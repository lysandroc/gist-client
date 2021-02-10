import { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from 'react-query';
import { Header } from 'components';
import { getGists } from 'api';
import { reactQueryConfigOptions } from 'helpers';

import * as S from './user.styled';
import { UserDetail } from './userDetail';

interface UserParams {
    user: string;
}

type UserProps = RouteComponentProps<UserParams>;

export const User = (props: UserProps): ReactElement | null => {
    const { user } = props.match.params;

    const { data: gistsUserData, isLoading, isError } = useQuery(['gistUser', user], () => getGists(user), reactQueryConfigOptions);

    return (
        <>
            <Header />
            {isLoading && <S.Loading>Loading</S.Loading>}
            {isError && <S.NotFound>The user was not found or API rate exceeded the limit</S.NotFound>}
            <S.GistGrid>
                {gistsUserData?.map((gist) => {
                    return <UserDetail key={gist.gistId} gist={gist} />;
                })}
            </S.GistGrid>
        </>
    );
};
