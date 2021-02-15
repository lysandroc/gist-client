import { ReactElement, useContext, useCallback, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchGistData, store } from 'context';
import { Header } from 'components';
import { UserDetail } from './../userDetail';

import * as S from './user.styled';

interface UserParams {
    user: string;
}

type UserProps = RouteComponentProps<UserParams>;

export const User = (props: UserProps): ReactElement | null => {
    const { user } = props.match.params;

    const { state, dispatch } = useContext(store);
    const dispatchFetch = useCallback(() => dispatch(fetchGistData(user)), [dispatch, user]);

    useEffect(() => {
        dispatchFetch();
    }, [dispatchFetch]);

    return (
        <>
            <Header />
            {state.loading && <S.Loading>Loading</S.Loading>}
            {state.error && <S.NotFound>The user was not found or API rate exceeded the limit</S.NotFound>}
            <S.GistGrid>
                {state.data?.map((gist) => {
                    return <UserDetail key={gist.gistId} gist={gist} />;
                })}
            </S.GistGrid>
        </>
    );
};
