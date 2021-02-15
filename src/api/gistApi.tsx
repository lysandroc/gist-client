import { GistUserResponse, GistUser } from 'types';
import { GistFork, GistForkInterface, GistForkUserResponse } from 'types/GistForks';
import { fetchValue } from './api';

const BASE_URL = 'https://api.github.com/';
const gistUserURL = (user: string) => `users/${user}/gists`;
const gistForkURL = (gistId: string) => `gists/${gistId}/forks`;

export const getGists = async (user: string): Promise<GistUser[]> => {
    const gistsUserResponse = await fetchValue<GistUserResponse[]>(`${BASE_URL}${gistUserURL(user)}`);
    const gists = gistsUserResponse.map((gist) => new GistUser(gist));
    const gistWithForks = gists.map(async (gist) => {
        const forks = await getForks(gist.gistId);
        gist.setForks(forks);
        return gist;
    });
    const solvedListOfPromise = Promise.all(gistWithForks);
    return new Promise((resolve) => resolve(solvedListOfPromise));
};

export const getForks = async (gistId: string): Promise<GistForkInterface[]> => {
    const forksResponse = await fetchValue<GistForkUserResponse[]>(`${BASE_URL}${gistForkURL(gistId)}`);
    const forks = forksResponse.map((forkResponse) => new GistFork(forkResponse));
    return forks;
};
