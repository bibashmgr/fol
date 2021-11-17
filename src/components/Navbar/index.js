// dependencies
// dependencies
import React from 'react';
import { AiOutlineBars } from "react-icons/ai";

// components
import {Nav, NavContainer, NavLogo, BarsIcon, NavMenu, NavItem, NavLink, NavButton} from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    bibash
                </NavLogo>
                <BarsIcon>
                    <AiOutlineBars />
                </BarsIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/projects'>Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavButton to='/contact'>Contact</NavButton>
                    </NavItem>   
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
