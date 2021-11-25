// dependencies
import styled from "styled-components";

export const ContactSection = styled.section`
    background-color: #130f40;
    color: #ecf0f1;
    width: 100%;
    height: calc(100vh - 80px);
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