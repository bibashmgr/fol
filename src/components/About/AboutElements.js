// dependencies
import styled from "styled-components";

export const AboutSection = styled.section`
    background-color: #130f40;
    color: #ecf0f1;
    width: 100%;
    height: calc(100vh - 80px);
`
export const AboutContainer = styled.div`
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
export const AboutHeading = styled.div`
    text-align: center;
`
export const AboutMainHeading = styled.div`
    font-size: 2.5rem;
    font-weight: 600;

    @media screen and (max-width: 796px) {
        font-size: 2rem;
    }
`
export const AboutSubHeading = styled.div`
    font-size: 1rem;
    font-weight: 400;
    opacity: 80%;
`

export const AboutBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 796px) {
        grid-template-columns: 1fr;
    }
`

export const AboutImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 796px) {
        display: none;
    }
`

export const AboutImage = styled.img`
    width: 400px;

    @media screen and (max-width: 992px) {
        width: 250px;
    }

    @media screen and (max-width: 1200px) {
        width: 300px;
    }
`

export const AboutTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;

    @media screen and (max-width: 992px) {
        width: 85%;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`

export const AboutInfo = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
    
    @media screen and (max-width: 992px) {
        font-size: 1rem;
    }
`

export const AboutButtonBox = styled.div`
    width: 100%;
`

export const AboutButton = styled.a`
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