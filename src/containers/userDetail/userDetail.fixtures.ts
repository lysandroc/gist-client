import { GistUserInterface } from 'types';

export const fixtures: GistUserInterface[] = [
    {
        gistId: 'id',
        description: 'description',
        url: 'url_here',
        languages: ['a', 'b', 'c'],
        forks: [{ profile: 'profile', avatarLink: 'link', userName: 'userName', updatedAt: new Date() }],
    },
];
