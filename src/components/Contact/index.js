// dependencies
import React from 'react';

// components
import {ContactSection, ContactContainer, ContactHeading, ContactMainHeading, ContactSubHeading} from './ContactElements';

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
            </ContactContainer>
        </ContactSection>
    )
}

export default Contact
