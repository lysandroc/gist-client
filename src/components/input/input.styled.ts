import styled from 'styled-components';

export const Input = styled.input`
    min-height: 35px;
    min-width: 250px;
    padding: 0.5em 0.5em;
    border: 1px solid #d6d6d6;
    box-shadow: 0 0 1px #d6d6d6;
    border-radius: 0.5em;
    :focus {
        outline: none;
        border-color: #0070c9;
        box-shadow: 0 0 1px #0070c9;
        border-witdh: 2px;
    }
    background-color: #24292e;
    color: white;
`;
