import { getForks } from 'api';
import { GistForkInterface } from './GistForks';

export interface GistUserResponse {
    id: string;
    description: string;
    html_url: string;
    files: {
        [key: string]: {
            language: string;
        };
    };
}

export interface GistUserInterface {
    gistId: string;
    description: string;
    url: string;
    languages: string[];
    forks: GistForkInterface[];
}

export class GistUser implements GistUserInterface {
    readonly gistId: string;
    readonly description: string;
    readonly url: string;
    readonly languages: string[];
    forks: GistForkInterface[] = [];

    getGistLanguages(gistUser: GistUserResponse): string[] {
        return Object.values(gistUser.files).reduce((acc: string[], cur) => {
            if (!acc.includes(cur.language)) acc.push(cur.language || 'text/plain');
            return acc;
        }, []);
    }

    async getGistForks(gistUser: GistUserResponse): Promise<GistForkInterface[]> {
        // TODO - decouple this logic from types the model
        return await getForks(gistUser.id);
    }

    constructor(gistResponse: GistUserResponse) {
        this.gistId = gistResponse.id;
        this.description = gistResponse.description;
        this.url = gistResponse.html_url;
        this.languages = this.getGistLanguages(gistResponse);
        this.getGistForks(gistResponse).then((forks) => {
            this.forks = forks;
        });
    }
}
