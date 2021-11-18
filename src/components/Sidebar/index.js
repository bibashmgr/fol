// dependencies
import React from 'react';

// components
import {Side, SideIcon, Times, SideContainer, SideItem, SideLink, SideButton} from './SidebarElements';

const Sidebar = ({isOpen, toggleEffect}) => {
    return (
        <Side isOpen={isOpen}>
            <SideIcon>
                <Times onClick={toggleEffect}/>
            </SideIcon>
            <SideContainer>
                <SideItem>
                    <SideLink to='/'>Home</SideLink>
                </SideItem>
                <SideItem>
                    <SideLink to='/about'>About</SideLink>
                </SideItem>
                <SideItem>
                    <SideLink to='/projects'>Projects</SideLink>
                </SideItem>
                <SideItem>
                    <SideButton to='/contact'>Contact</SideButton>
                </SideItem>
            </SideContainer>
        </Side>
    )
}

export default Sidebar
