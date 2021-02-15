export interface GistForkUserResponse {
    updated_at: string;
    owner: {
        login: string;
        avatar_url: string;
        url: string;
    };
}

export interface GistForkInterface {
    profile: string;
    userName: string;
    avatarLink: string;
    updatedAt: Date;
}

export class GistFork implements GistForkInterface {
    readonly profile: string;
    readonly userName: string;
    readonly avatarLink: string;
    readonly updatedAt: Date;

    constructor(forkResponse: GistForkUserResponse) {
        this.profile = forkResponse?.owner?.url;
        this.userName = forkResponse?.owner?.login;
        this.avatarLink = forkResponse?.owner?.avatar_url;
        this.updatedAt = forkResponse && new Date(forkResponse.updated_at);
    }
}
