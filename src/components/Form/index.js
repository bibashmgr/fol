import React from 'react';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
// import dotenv from 'dotenv';

// components
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
} from './FormElements';

const Form = () => {
  // environment-variables:
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;

  // states:
  const [values, setValues] = useState({
    email: '',
    projectname: '',
    message: '',
  });

  // refs:
  const form = useRef();

  // handlers:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    document.getElementById('email-box').style.border = '2.5px solid #ecf0f1';
    document.getElementById('projectname-box').style.border =
      '2.5px solid #ecf0f1';
    document.getElementById('message-box').style.border = '2.5px solid #ecf0f1';

    if (!values.email) {
      errors.email = 'Email is required';
      document.getElementById('email-box').style.border = '2.5px solid #e74c3c';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid Email';
      document.getElementById('email-box').style.border = '2.5px solid #e74c3c';
    }

    if (!values.projectname.trim()) {
      errors.projectname = 'Project Name is required';
      document.getElementById('projectname-box').style.border =
        '2.5px solid #e74c3c';
    }

    if (!values.message) {
      errors.message = 'Message is required';
      document.getElementById('message-box').style.border =
        '2.5px solid #e74c3c';
    }

    if (Object.keys(errors).length === 0) {
      emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setValues({
        email: '',
        projectname: '',
        message: '',
      });
    }
  };

  return (
    <FormContainer ref={form} onSubmit={handleSubmit}>
      <FormGroup
        onClick={() => {
          document.getElementById('email').focus();
        }}
        id='email-box'
      >
        <FormLabel>Email</FormLabel>
        <FormInput
          id='email'
          name='email'
          type='text'
          onChange={handleChange}
          value={values.email}
        ></FormInput>
      </FormGroup>
      <FormGroup
        onClick={() => {
          document.getElementById('projectname').focus();
        }}
        id='projectname-box'
      >
        <FormLabel>Project Name</FormLabel>
        <FormInput
          id='projectname'
          name='projectname'
          type='text'
          onChange={handleChange}
          value={values.projectname}
        ></FormInput>
      </FormGroup>
      <FormGroup
        style={{ height: '10rem' }}
        onClick={() => {
          document.getElementById('message').focus();
        }}
        id='message-box'
      >
        <FormLabel>Message</FormLabel>
        <FormTextArea
          id='message'
          name='message'
          onChange={handleChange}
          value={values.message}
        ></FormTextArea>
      </FormGroup>
      <FormButton type='submit'>Send Message</FormButton>
    </FormContainer>
  );
};

export default Form;
