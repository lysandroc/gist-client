import { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputWithIcon } from 'components';
import * as S from './searchUser.styled';

export const SearchUser = (): ReactElement => {
    const history = useHistory();

    const [user, setUser] = useState('');

    useEffect(() => {
        user && history.push(`user/${user}`);
    }, [user, history]);

    return (
        <S.Container>
            <S.Title>Gist explorer</S.Title>
            <InputWithIcon placeholder="Search a user name" action={(userName: string) => setUser(userName)} />
        </S.Container>
    );
};
