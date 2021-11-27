import React from 'react';

// components
import { FormContainer, FormGroup, FormLabel, FormInput, FormTextArea, FormButton } from './FormElements';

const Form = () => {

    return (
        <FormContainer>
            <FormGroup onClick={(e) => {document.getElementById("email").focus();}}>
                <FormLabel>Email</FormLabel>
                <FormInput id="email" name="email" type="email"></FormInput>
            </FormGroup>
            <FormGroup onClick={(e) => {document.getElementById("projectname").focus();}}>
                <FormLabel>Project Name</FormLabel>
                <FormInput id="projectname" name="projectname" type="text"></FormInput>
            </FormGroup>
            <FormGroup style={{height:'10rem'}} onClick={(e) => {document.getElementById("message").focus();}}>
                <FormLabel>Message</FormLabel>
                <FormTextArea id="message" name="message"></FormTextArea>
            </FormGroup>
            <FormButton type='submit' value='Send Message'></FormButton>
        </FormContainer>
    )
}

export default Form
