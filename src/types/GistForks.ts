export interface GistForkUserResponse {
    owner: {
        login: string;
        avatar_url: string;
    };
}

export interface GistForkInterface {
    userName: string;
    avatarLink: string;
}

export class GistFork implements GistForkInterface {
    readonly userName: string;
    readonly avatarLink: string;

    constructor(gistFork: GistForkUserResponse) {
        this.userName = gistFork.owner.login;
        this.avatarLink = gistFork.owner.avatar_url;
    }
}
