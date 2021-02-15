import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: row;
    padding: 10px 0;
    min-width: 100%;
    background-color: #24292e;
`;

export const Title = styled.header`
    font-family: 'Kaushan Script';
    color: white;
    cursor: pointer;
    font-size: 1em;
    padding-left: 20px;
    align-self: center;
    @media (min-width: 400px) {
        font-size: 2em;
        padding-left: 20px;
    }
`;

export const InputWrapper = styled.div`
    align-self: center;
    padding-left 20px;
`;
