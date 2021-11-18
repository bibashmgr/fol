// dependencies
// dependencies
import React from 'react';

// components
import {Nav, NavContainer, NavLogo, BarsIcon, Bars, NavMenu, NavItem, NavLink, NavButton} from './NavbarElements';

const Navbar = ({toggleEffect}) => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    bibash
                </NavLogo>
                <BarsIcon>
                    <Bars onClick={toggleEffect}/>
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
