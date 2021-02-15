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
    owner: {
        url: string;
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
    forks: GistForkInterface[];

    getGistLanguages(gistUser: GistUserResponse): string[] {
        return Object.values(gistUser.files).reduce((acc: string[], cur) => {
            const language = cur.language || 'text/plain';
            if (!acc.includes(language)) acc.push(language);
            return acc;
        }, []);
    }

    setForks(forks: GistForkInterface[]): void {
        this.forks = forks
            .filter((fork) => fork?.avatarLink)
            .sort((a: GistForkInterface, b: GistForkInterface) => b.updatedAt.getTime() - a.updatedAt.getTime())
            .slice(0, 3);
    }

    constructor(gistResponse: GistUserResponse) {
        this.gistId = gistResponse.id;
        this.description = gistResponse.description || 'Unnamed description';
        this.url = gistResponse.html_url;
        this.languages = this.getGistLanguages(gistResponse);
        this.forks = [];
    }
}
