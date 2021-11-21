// dependencies
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export const MainSection = styled.section `
    background-color: #130f40;
    color: #ecf0f1;
    width: 100%;
    height: calc(100vh - 80px);
`

export const MainContainer = styled.div `
    margin: 0px 100px;
    padding: 0px 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 796px) {
        margin: 0px 25px;
    }
`

export const MainBox = styled.div `
    margin: 0px 112.5px;

    @media screen and (max-width: 992px) {
        margin: 0px 0px;
    }
`

export const MainHeading = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.25;

    @media screen and (max-width: 992px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 796px) {
        font-size: 2rem;
    }
`

export const MainHeadingOne = styled.div `
    cursor: crosshair;
`

export const MainHeadingTwo = styled.div `
    cursor: crosshair;
`

export const MainSubHeading = styled.div `
    font-size: 1rem;
    font-weight: 400;
    opacity: 80%;
`

export const MainButton = styled(LinkR)`
    margin-top: 50px;
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

// Icons: 
export const MainIcons = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.5rem;
`

export const IconLink = styled.a`
    text-decoration: none;
    color: #ECF0F1;
`

export const LinkedinIcon = styled(FaLinkedin)`
    cursor: pointer;
`

export const TwitterIcon = styled(FaTwitter)`
    cursor: pointer;
`

export const GithubIcon = styled(FaGithub)`
    cursor: pointer;
`