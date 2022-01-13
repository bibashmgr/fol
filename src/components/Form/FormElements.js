import styled from "styled-components";

export const FormContainer = styled.form`
    width: 92.5%;
    background-color: #130f40;
    color: #130f40;
`
export const FormGroup = styled.div`
    background-color: #ecf0f1;
    height: 5rem;
    border: 2.5px solid #ecf0f1;
    outline: none;
    border-radius: 10px;
    margin: 25px 0px;
    padding: 12.5px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
`
export const FormLabel = styled.label`
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
`

export const FormInput = styled.input`
    background-color: #ecf0f1;
    border: none;
    outline: none;
    cursor: pointer;
`

export const FormTextArea = styled.textarea`
    background-color: #ecf0f1;
    border: none;
    outline: none;
    height: 10rem;
    resize: none;
    cursor: pointer;
`

export const FormButton = styled.button`
    margin-top: 25px;
    display: inline-block;
    padding: 7.5px 15px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    background-color: #ecf0f1;
    color: #130f40;
    border: 2.5px solid #ecf0f1;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #ecf0f1;
        background-color: #130f40;
    }
`