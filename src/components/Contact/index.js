// dependencies
import React from 'react';

// components
import {ContactSection, ContactContainer, ContactHeading, ContactMainHeading, ContactSubHeading, ContactBody, ContactInfo, InfoBox, InfoIcon, InfoText, InfoTitle, InfoSubTitle} from './ContactElements';
import Form from '../Form';

// icons
import {FaPhoneAlt} from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';
import {RiUserLocationFill} from 'react-icons/ri';

// data
const infos = [
    {
        id: 1,
        title: 'Call Me',
        subtitle: '9806628788',
        getIcons : () => {
            return (
                <FaPhoneAlt />
            )
        }
    },
    {
        id: 2,
        title: 'Email',
        subtitle: 'mail.bibash21@gmail.com',
        getIcons : () => {
            return (
                <IoMail />
            )
        }
    },
    {
        id: 3,
        title: 'Location',
        subtitle: 'Bagar, Pokhara, Nepal',
        getIcons : () => {
            return (
                <RiUserLocationFill />
            )
        }
    }
]

const Contact = () => {
    return (
        <ContactSection id='contact'>
            <ContactContainer>
                <ContactHeading>
                    <ContactMainHeading>
                        Contact Me
                    </ContactMainHeading>
                    <ContactSubHeading>
                        Let's Talk
                    </ContactSubHeading>
                </ContactHeading>
                <ContactBody>
                    <ContactInfo>
                        {infos.map((info) => {
                            return (
                                <InfoBox key={info.id}>
                                    <InfoIcon>{info.getIcons()}</InfoIcon>
                                    <InfoText>
                                        <InfoTitle>{info.title}</InfoTitle>
                                        <InfoSubTitle>{info.subtitle}</InfoSubTitle>
                                    </InfoText>
                                </InfoBox>
                            )
                        })}
                    </ContactInfo>
                    <Form />
                </ContactBody>
            </ContactContainer>
        </ContactSection>
    )
}

export default Contact
