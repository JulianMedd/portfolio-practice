import styled from "styled-components";

export const Navbar = styled.nav `
    position: fixed;
    top: 0;
    background-color: ${props => props.scrollValue > 20 ? "black" : "transparent"};
    width: 100%;
    height: 80px;
    padding-left: 50px;
    font-size: 20px;
    z-index: 1;
    transition: all 0.5s ease;
`;

export const NavbarLogo = styled.div `
    height: 80px;
    line-height: 80px;
    color: white;
    cursor: pointer;
`;