import { ReactElement } from 'react';
import { GistUserInterface } from 'types';

import * as S from './userDetail.styled';

interface UserDetailProps {
    gist: GistUserInterface;
}

export const UserDetail = (props: UserDetailProps): ReactElement => {
    const { description, url, languages, forks } = props.gist;
    return (
        <S.Section>
            <S.Description>
                <S.GistLink target="_blank" href={url} data-testid="description">
                    {description}
                </S.GistLink>
            </S.Description>
            <S.SubSection>
                <S.Badges data-testid="languages">
                    {languages.map((language) => (
                        <S.Badge key={language}>{language}</S.Badge>
                    ))}
                </S.Badges>
                <S.ForksContainer>
                    {forks.map((fork) => (
                        <a href={fork.profile} key={fork.userName}>
                            <S.ForkProfile data-testid="fork" src={fork.avatarLink} title={fork.userName} />
                        </a>
                    ))}
                </S.ForksContainer>
            </S.SubSection>
        </S.Section>
    );
};
