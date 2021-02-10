import React, { ReactElement, useState } from 'react';

import * as S from './inputWithIcon.styled';

interface InputWithIconProps extends React.HTMLAttributes<HTMLInputElement> {
    action: (value: string) => void;
}

export const InputWithIcon = (props: InputWithIconProps): ReactElement => {
    const { action, ...rest } = props;
    const [value, setValue] = useState('');

    const onClickHandler = () => props.action(value);
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && props.action(value);

    return (
        <S.InputContainer>
            <S.SearchIcon onClick={onClickHandler} />
            <S.InputWithIcon type="text" onKeyDown={keyDownHandler} onChange={onChangeHandler} {...rest} />
        </S.InputContainer>
    );
};
