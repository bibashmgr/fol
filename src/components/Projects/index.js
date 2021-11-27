// dependencies
import React from 'react';

// components
import {ProjectsSection, ProjectsContainer, ProjectsHeading, ProjectsMainHeading, ProjectsSubHeading, ProjectsBody, ProjectsMoreButton, MoreButton} from './ProjectsElements';
import Cards from '../Cards';

const Projects = () => {
    return (
        <ProjectsSection id='projects'>
            <ProjectsContainer>
                <ProjectsHeading>
                    <ProjectsMainHeading>
                        My Projects
                    </ProjectsMainHeading>
                    <ProjectsSubHeading>
                        Most Recent Works
                    </ProjectsSubHeading>
                </ProjectsHeading>
                <ProjectsBody>
                    <Cards></Cards>
                </ProjectsBody>
                <ProjectsMoreButton>
                    <MoreButton href="https://error404s.netlify.app/">See More</MoreButton>
                </ProjectsMoreButton>
            </ProjectsContainer>
        </ProjectsSection>
    )
}

export default Projects
