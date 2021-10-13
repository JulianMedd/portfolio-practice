import React from 'react';
import { Navbar, NavbarLogo } from './Styles';

const NavBar = ({scrollValue}) => {
    const scrollTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <Navbar scrollValue={scrollValue}>
            <NavbarLogo onClick={scrollTop}>
                Julian Medina
            </NavbarLogo>
        </Navbar>
    )
}

export default NavBar
