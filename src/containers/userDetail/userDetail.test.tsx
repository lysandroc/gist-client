import { cleanup, render } from '@testing-library/react';
import { GistUserInterface } from 'types';

import { UserDetail } from './userDetail';
import { fixtures } from './userDetail.fixtures';

afterEach(cleanup);

describe('Validate fields <userDetail /> with fixture data', () => {
    fixtures.forEach((fixture: GistUserInterface) => {
        it(`expected description property to be "${fixture.description}"`, () => {
            // TODO - reuse the render
            const { getByTestId } = render(<UserDetail gist={fixture} />);
            const descriptionElm = getByTestId('description');
            expect(descriptionElm).toHaveAttribute('href', fixture.url);
            expect(descriptionElm).toHaveTextContent(fixture.description);
        });
        it(`expected languages element to be ${fixture.languages}`, () => {
            const { getByTestId } = render(<UserDetail gist={fixture} />);
            fixture.languages.forEach((language) => {
                expect(getByTestId('languages')).toHaveTextContent(language);
            });
        });
        fixture.forks.forEach(({ avatarLink, userName }) => {
            it(`expected fork avatarLink property to be "${avatarLink}"`, () => {
                const { getByTestId } = render(<UserDetail gist={fixture} />);
                expect(getByTestId('fork')).toHaveAttribute('src', avatarLink);
                expect(getByTestId('fork')).toHaveAttribute('title', userName);
            });
        });
    });
});
