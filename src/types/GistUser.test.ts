import { GistUser, GistUserResponse } from './GistUser';

const fixtureGistResponse: GistUserResponse = {
    id: 'id',
    description: 'description value',
    html_url: 'gists url',
    files: {
        'no-matter': {
            language: 'javascript',
        },
    },
    owner: {
        url: 'gists profile url',
    },
};

describe('Creates a new GistUser instance', () => {
    it('should return of transformation value', () => {
        const userGistInstance = new GistUser(fixtureGistResponse);
        expect(userGistInstance.gistId).toBe(fixtureGistResponse.id);
        expect(userGistInstance.url).toBe(fixtureGistResponse.html_url);
        expect(userGistInstance.description).toBe(fixtureGistResponse.description);
        expect(userGistInstance.languages).toStrictEqual(userGistInstance.getGistLanguages(fixtureGistResponse));
    });

    it('should return a unique language', () => {
        const fixtureUniqueLanguage = {
            ...fixtureGistResponse,
            files: { 'no-matter-ts': { language: 'typescript' }, ts: { language: 'typescript' }, 'another-property': { language: 'ts' } },
        };
        const userGistInstance = new GistUser(fixtureUniqueLanguage);
        expect(userGistInstance.languages).toStrictEqual(userGistInstance.getGistLanguages(fixtureUniqueLanguage));
    });
});
