import React, { createContext, useReducer, ReactElement } from 'react';
import { GistUserInterface } from 'types';

import { Actions } from './actions';
import { useGistData } from './hooks';
import { reducer } from './reducers';

export interface GistStateInterface {
    user: string;
    data: GistUserInterface[];
    loading: boolean;
    error?: Error;
}

export interface IAppContext {
    state: GistStateInterface;
    dispatch: React.Dispatch<Actions>;
}

export const initialState: GistStateInterface = {
    user: '',
    data: [],
    loading: false,
    error: undefined,
};

const store = createContext<IAppContext>({
    state: initialState,
    dispatch: () => null,
});

const { Provider } = store;

const AppProvider = ({ children }: { children: React.ReactNode }): ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useGistData(state, dispatch);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, AppProvider };
