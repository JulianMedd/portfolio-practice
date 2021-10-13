import styled from "styled-components";

export const CoverContainer = styled.div `
    height: 100vh;
    width: 100%;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Video = styled.video `
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
`;

export const Title = styled.h1 `
    color: white;
    font-size: 100px;
`;

export const Text = styled.p `
    margin-top: 8px;
    color: white;
    font-size: 32px;
`;
