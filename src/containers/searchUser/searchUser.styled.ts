import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Title = styled.div`
    font-family: 'Kaushan Script';
    font-size: 2em;
    margin-bottom: 15px;
    @media (min-width: 470px) {
        font-size: 3em;
    }
`;
