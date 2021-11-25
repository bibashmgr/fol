import React from 'react';

// components
import {CardBox, CardHead, CardImage, CardBody, CardText, CardTitle, CardInfo, CardButtons, CardGitButton, GitText, CardDemoButton} from './CardElements';

// icons
import { FaGithub } from 'react-icons/fa';

const Card = ({name, info, img, github, demo}) => {
    return (
            <CardBox>
                <CardHead>
                    <CardImage src={img} alt={name}></CardImage>
                </CardHead>
                <CardBody>
                    <CardText>
                        <CardTitle>{name}</CardTitle>
                        <CardInfo>{info}</CardInfo>
                    </CardText>
                    <CardButtons>
                        <CardGitButton href={github} target='_blank'>
                            <FaGithub />
                            <GitText>Github</GitText>
                        </CardGitButton>
                        <CardDemoButton href={demo} target='_blank'>Live Demo</CardDemoButton>
                    </CardButtons>
                </CardBody>
            </CardBox>
    )
}

export default Card
