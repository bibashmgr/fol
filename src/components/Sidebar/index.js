// dependencies
import React from 'react';

// components
import {Side, SideIcon, Times, SideContainer, SideItem, SideLink, SideButton} from './SidebarElements';

const Sidebar = ({isOpen, toggleEffect}) => {
    return (
        <Side isOpen={isOpen} onClick={toggleEffect}>
            <SideIcon>
                <Times onClick={toggleEffect}/>
            </SideIcon>
            <SideContainer>
                <SideItem>
                    <SideLink to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggleEffect}>Home</SideLink>
                </SideItem>
                <SideItem>
                    <SideLink to='about' smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggleEffect}>About</SideLink>
                </SideItem>
                <SideItem>
                    <SideLink to='projects' smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggleEffect}>Projects</SideLink>
                </SideItem>
                <SideItem>
                    <SideButton to='contact' smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggleEffect}>Contact</SideButton>
                </SideItem>
            </SideContainer>
        </Side>
    )
}

export default Sidebar
