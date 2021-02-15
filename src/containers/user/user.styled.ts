import styled from 'styled-components';

export const GistGrid = styled.div`
    display: grid;
    gap: 1em;
    grid-auto-rows: 140px;
    max-width: 90%;
    grid-template-columns: 100%;
    margin: 80px auto 20px auto;
    @media (min-width: 480px) {
        grid-template-columns: repeat(2, 50%);
        max-width: 80%;
    }
`;

export const NotFound = styled.div`
    margin: 80px 0;
`;

export const Loading = styled.div`
    margin: 80px 0;
`;

export const Section = styled.section`
    border: 1px solid #e8eaec;
    border-radius: 0.4em;
`;

export const Id = styled.span`
    color: #037de1;
    font-size: 0.6em;
`;

export const Description = styled.span`
    color: #24292e;
`;
