import { getGists } from 'api';
import React, { useRef, useEffect } from 'react';
import { Actions, setGistsResponse } from './actions';
import { GistStateInterface } from './store';

export const useGistData = (state: GistStateInterface, dispatch: React.Dispatch<Actions>): void => {
    const firstRender = useRef(false);
    useEffect(() => {
        if (!firstRender.current && state.user) {
            firstRender.current = true;
            getGists(state.user)
                .then((data) => {
                    dispatch(setGistsResponse({ data }));
                })
                .catch((error) => {
                    console.error({ error });
                    dispatch(setGistsResponse({ data: [], error }));
                });
        }
        return () => {
            firstRender.current = false;
        };
    }, [state.user, dispatch]);
};
