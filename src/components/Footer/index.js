// dependencies
import React from 'react';

// components
import {FooterContainer, FooterHead, FooterLinks, IconLink, GithubIcon, TwitterIcon, LinkedinIcon, FooterRights} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterHead>
                bibash
            </FooterHead>
            <FooterLinks>
                <IconLink href="https://www.linkedin.com/in/bibashmgr" target='_blank' aria-label='LinkedIn'>
                        <LinkedinIcon />
                </IconLink>
                <IconLink href="https://twitter.com/_bibashmagar_" target='_blank' aria-label='Twitter'>
                    <TwitterIcon />
                </IconLink>
                <IconLink href="https://github.com/bibashmgr" target='_blank' aria-label='Github'>
                    <GithubIcon />
                </IconLink>
            </FooterLinks>
            <FooterRights>
                Copyright 2022 ©️ bibashmagar
            </FooterRights>
        </FooterContainer>
    )
}

export default Footer
