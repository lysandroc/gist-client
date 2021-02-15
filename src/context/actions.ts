import { GistUserInterface } from 'types';

// TODO - Fix that false positive using @typescript-eslint/no-unused-vars
export enum ActionType {
    // eslint-disable-next-line no-unused-vars
    FetchGist = 'FETCH_GIST_DATA',
    // eslint-disable-next-line no-unused-vars
    SetGist = 'SET_GIST_DATA',
}

interface GetGistDataInterface {
    type: ActionType.FetchGist;
    payload: {
        user: string;
        loading: boolean;
    };
}

interface SetGistDataInterface {
    type: ActionType.SetGist;
    payload: {
        loading: boolean;
        data: GistUserInterface[];
        error?: Error;
    };
}

export type Actions = GetGistDataInterface | SetGistDataInterface;

export const fetchGistData = (user: string): GetGistDataInterface => ({
    type: ActionType.FetchGist,
    payload: {
        loading: true,
        user,
    },
});

export const setGistsResponse = ({ data, error }: { data: GistUserInterface[]; error?: Error }): SetGistDataInterface => ({
    type: ActionType.SetGist,
    payload: {
        loading: false,
        data,
        error,
    },
});
