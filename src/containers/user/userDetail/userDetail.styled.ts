import styled from 'styled-components';

export const Container = styled.section`
    border: 1px solid #e8eaec;
    border-radius: 0.4em;
`;

export const Id = styled.a`
    color: #037de1;
    font-size: 0.6em;
`;

export const Description = styled.span`
    color: #24292e;
`;

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: 10px;
`;

export const Badges = styled.div`
    display: flex;
    flex-diretion: row;
    flex: wrap;
`;

export const Badge = styled.div`
    max-width: 100px;
    padding: 8px 10px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    margin-left: 5px;
    background: #2f4058;
    color: whitesmoke;
`;
