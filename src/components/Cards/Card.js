import React from 'react';

// components
import {CardBox, CardHead, CardImage, CardBody, CardText, CardTitle, CardInfo, CardButtons, CardReadButton, CardDemoButton} from './CardElements';

const Card = ({name, info, img}) => {
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
                        <CardReadButton>Read more</CardReadButton>
                        <CardDemoButton>Live Demo</CardDemoButton>
                    </CardButtons>
                </CardBody>
            </CardBox>
    )
}

export default Card
