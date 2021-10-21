import styled from "styled-components";

export const CarouselContainer = styled.div `
    display: flex;
    vertical-align: center;
    align-items: center;
    background-color: black;
    padding: 30px 0 30px 0;
`;

export const CarouselTitle = styled.div `
    color: white;
    width: 40%;
    text-align: center;
    font-size: 30px;
    padding: 0 100px 0 100px;
`;

export const SlideContainer = styled.div `
    height: 80%;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;

export const SlideImg = styled.img `
    object-fit: contain;
    transition: all 0.2s ease-in-out;
`;

export const SlideDesc = styled.div `
    background-color: black;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    padding-left: 30px;
    border-top-left-radius: 20px;
    opacity: 0.8;
`;