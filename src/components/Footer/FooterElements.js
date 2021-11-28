// dependencies
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export const FooterContainer = styled.footer`
    height: 25vh;
    display: flex;
    opacity: 0.75;
    background-color: rgba(236, 240, 241, 0.75);
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const FooterHead = styled.div`
    color: #130F40;
    font-size: 1.75rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 25px;

    @media screen and (max-width:796px){
        font-size: 1.25rem;
    }
`

export const FooterLinks = styled.div`
    font-size: 1.5rem;
`

export const IconLink = styled.a`
    color: #130f40;
    text-decoration: none;
    padding: 0px 5px;
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

export const FooterRights = styled.div`
    color: #130f40;
    font-size: 0.75rem;
    font-weight: 400;
`