import React, { ReactElement, useState } from 'react';
import * as S from './input.styled';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    action: (value: string) => void;
}

export const Input = (props: InputProps): ReactElement => {
    const { action, ...rest } = props;
    const [value, setValue] = useState('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => event.key === 'Enter' && props.action(value);

    return <S.Input type="text" onKeyDown={keyDownHandler} onChange={onChangeHandler} {...rest} />;
};
