import styled from 'styled-components';
import { ReactComponent as ArrowRight } from 'assets/svg/arrow-right.svg';

const svgSize = '1.8em';

export const SearchIcon = styled(ArrowRight)`
    position: absolute;
    right: 4px;
    top: 4px;
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
    display: flex;
    width: 70%;
    :focus-within ${SearchIcon} {
        fill: #d6d6d6;
        border-color: #d6d6d6;
        cursor: pointer;
    }
    @media (min-width: 470px) {
        width: 250px;
    }
`;

export const InputWithIcon = styled.input`
    font-size: 1em;
    width: 100%;
    padding: 0.5em;
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
