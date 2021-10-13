import styled from "styled-components";

export const AboutContainer = styled.div `
    display: flex;
    background-color: white;
    color: black;
    height: 70vh;
    padding: 100px 0 100px 0;
`;

export const AboutDesc = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    padding: 0 100px 0 100px;
`;

export const AboutTitle = styled.h3 `
    margin-bottom: 30px;
    font-size: 28px;
`;

export const AboutText = styled.p `
    line-height: 1.5;
`;

export const AboutImg = styled.div `
    height: 180%;
    display: flex;
    align-self: center;
`;