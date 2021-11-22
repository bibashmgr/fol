// dependencies
import React from 'react';

// components
import {AboutSection, AboutContainer, AboutHeading, AboutMainHeading, AboutSubHeading, AboutBody, AboutImageBox,AboutImage, AboutTextBox, AboutText, AboutInfo, AboutButtonBox, AboutButton} from './AboutElements';

const About = () => {
    return (
        <AboutSection id='about'>
            <AboutContainer>
                <AboutHeading>
                    <AboutMainHeading>
                        About Me
                    </AboutMainHeading>
                    <AboutSubHeading>
                        Introduction
                    </AboutSubHeading>
                </AboutHeading>
                <AboutBody>
                    <AboutImageBox>
                        <AboutImage src='./images/about.svg'></AboutImage>
                    </AboutImageBox>
                    <AboutTextBox>
                        <AboutText>
                            <AboutInfo>
                                Web developer based on Nepal, with an experience in designing and developing user friendly websites and  web apps. Also, I am good at solving complex problems.
                            </AboutInfo>
                            <AboutButtonBox>
                                <AboutButton>
                                    Read more
                                </AboutButton>
                            </AboutButtonBox>
                        </AboutText>
                    </AboutTextBox>
                </AboutBody>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
