// dependencies
import React from 'react';

// components
import {MainSection, MainContainer,MainBox, MainHeading, MainHeadingOne, MainHeadingTwo, MainSubHeading, MainButton, MainIcons,IconLink, LinkedinIcon, TwitterIcon, GithubIcon} from './MainElements';

const Main = () => {
    return (
        <MainSection id='home'>
            <MainContainer>
                <MainBox>
                    <MainHeading>
                        <MainHeadingOne>Hi, I am</MainHeadingOne>
                        <MainHeadingTwo>Bibash Thapa Magar.</MainHeadingTwo>
                    </MainHeading>
                    <MainSubHeading>
                        A web developer from Nepal
                    </MainSubHeading>
                    <MainButton to="./files/resume.pdf" target="_blank" download>
                        Download CV
                    </MainButton>
                </MainBox>
                <MainIcons>
                    <IconLink href="https://www.linkedin.com/in/bibashmgr" target='_blank' aria-label='LinkedIn'>
                        <LinkedinIcon />
                    </IconLink>
                    <IconLink href="https://twitter.com/bibashmgr21" target='_blank' aria-label='Twitter'>
                        <TwitterIcon />
                    </IconLink>
                    <IconLink href="https://github.com/bibashmgr" target='_blank' aria-label='Github'>
                        <GithubIcon />
                    </IconLink>
                </MainIcons>
            </MainContainer>
        </MainSection>
    )
}

export default Main
