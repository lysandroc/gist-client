import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid #e8eaec;
    border-radius: 0.4em;
`;

export const Description = styled.span`
    flex: 0 0 calc(100% + 1px);
    height: 1.5em;
    border-top-left-radius: 0.4em;
    border-top-right-radius: 0.4em;
    background-color: #e8eaec;
    padding-right: 30px;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const GistLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #24292e;
`;

export const SubSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: calc(100% - 1.5em);
    padding: 10px;
`;

export const ForksContainer = styled.div`
    display: flex;
    flex: row;
    justify-content: flex-end;
`;

export const ForkProfile = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 1px;
`;

export const Badges = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

export const Badge = styled.div`
    max-width: 100px;
    padding: 8px;
    margin-right: 3px;
    margin-bottom: 5px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    background: #623198;
    color: whitesmoke;
    font-weight: 600;
    font-size: 0.6em;
`;
