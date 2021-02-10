import styled from 'styled-components';
import { ReactComponent as ArrowRight } from 'assets/svg/arrow-right.svg';

const inputWidth = '20em';
const svgSize = '1.2em';

export const SearchIcon = styled(ArrowRight)`
    position: absolute;
    right: 10px;
    top: 5px;
    width: ${svgSize};
    height: ${svgSize};
    border: 2px solid #eee;
    border-radius: 20px;
    padding: 4px;
    fill: #eee;
    transition: all 0.15s ease-in-out;
`;

export const InputContainer = styled.div`
    position: relative;
    max-width: calc(${inputWidth} + ${svgSize});
    display: flex;
    :focus-within ${SearchIcon} {
        fill: #d6d6d6;
        border-color: #d6d6d6;
        cursor: pointer;
    }
`;

export const InputWithIcon = styled.input`
    font-size: 1em;
    min-width: ${inputWidth};
    min-height: 1.5em;
    padding: 0.5em 0.5em;
    border: 1px solid #eee;
    border-radius: 0.5em;
    transition: all 0.15s ease-in-out;
    :focus {
        outline: none;
        border-color: #d6d6d6;
        box-shadow: 0 0 1px #d6d6d6;
        border-witdh: 2px;
    }
`;
