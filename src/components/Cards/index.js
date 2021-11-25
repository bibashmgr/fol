// dependencies
import React from 'react';

// components
import Card from './Card';
import {CardsBox} from './CardElements';

// data
import {projects} from './projects';

const Cards = () => {
    return (
        <CardsBox>
            {projects.map((project) => {
                const {id, name, info, img} = project;
                return (
                    <Card key={id} name={name} info={info} img={img} />
                )
            })}
        </CardsBox>
    )
}

export default Cards
