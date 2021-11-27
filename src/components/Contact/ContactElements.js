// dependencies
import styled from "styled-components";

export const ContactSection = styled.section`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #130f40;
    color: #ecf0f1;
    width: 100%;
    height: 100%;
`
export const ContactContainer = styled.div`
    margin: 0px 100px;
    padding: 0px 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 796px) {
        margin: 0px 25px;
    }
`
export const ContactHeading = styled.div`
    text-align: center;
`
export const ContactMainHeading = styled.div`
    font-size: 2.5rem;
    font-weight: 600;

    @media screen and (max-width: 796px) {
        font-size: 2rem;
    }
`
export const ContactSubHeading = styled.div`
    font-size: 1rem;
    font-weight: 400;
    opacity: 80%;
`

export const ContactBody = styled.div`
    width: 60%;
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1200px) {
        width: 75%;
    }

    @media screen and (max-width: 986px) {
        width: 100%;
    }

    @media screen and (max-width: 796px) {
        grid-template-columns: 1fr;
        width: 100%;
    }
`
export const ContactInfo = styled.div`
    margin-top: 25px;
`

export const InfoBox = styled.div`
    display: flex;
    padding-bottom: 25px;
`
export const InfoIcon = styled.div`
    font-size: 2rem;
    padding: 5px 10px;

    @media screen and (max-width: 796px) {
        font-size: 1.5rem;
    }
`
export const InfoText = styled.div`
    font-size: 1rem;
`
export const InfoTitle = styled.div`
    font-weight: 600;
    `
export const InfoSubTitle = styled.div`
    font-weight: 400;
`