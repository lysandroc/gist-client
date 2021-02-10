import { ReactElement } from 'react';
import { GistUserInterface } from 'types';

import * as S from './userDetail.styled';

interface UserDetailProps {
    gist: GistUserInterface;
}

export const UserDetail = (props: UserDetailProps): ReactElement => {
    const { gistId, description, url, forks, languages } = props.gist;
    return (
        <S.Container>
            <S.Description>{description || 'Unnamed description'}</S.Description>
            <S.Id target="_blank" href={url}>
                {gistId}
            </S.Id>
            {forks.map((fork) => (
                <S.Avatar key={fork.userName} src={fork.avatarLink} title={fork.userName} />
            ))}
            <S.Badges>
                {languages.map((language) => (
                    <S.Badge key={language}>{language}</S.Badge>
                ))}
            </S.Badges>
        </S.Container>
    );
};
