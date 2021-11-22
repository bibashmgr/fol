// dependencies
import React from 'react';
import { animateScroll } from 'react-scroll';

// components
import {Nav, NavContainer, NavLogo, Logo, BarsIcon, Bars, NavMenu, NavItem, NavLink, NavButton} from './NavbarElements';

const Navbar = ({toggleEffect}) => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <Logo onClick={() =>{animateScroll.scrollToTop({smooth:'true', duration:'500'})}}>
                        bibash
                    </Logo>
                </NavLogo>
                <BarsIcon>
                    <Bars onClick={toggleEffect}/>
                </BarsIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='about' smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='projects'>Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavButton to='contact'>Contact</NavButton>
                    </NavItem>   
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
