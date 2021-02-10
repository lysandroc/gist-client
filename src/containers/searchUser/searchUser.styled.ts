import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    * + div {
        margin: 10px 0;
    }
`;

export const Title = styled.div`
    font-family: 'Kaushan Script';
    font-size: 4em;
`;
