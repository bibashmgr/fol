// dependencies
import styled from "styled-components";

export const ProjectsSection = styled.section`
    background-color: #130f40;
    color: #ecf0f1;
    width: 100%;
    height: 100%;
    padding-bottom: 5vh;
`
export const ProjectsContainer = styled.div`
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
export const ProjectsHeading = styled.div`
    text-align: center;
`
export const ProjectsMainHeading = styled.div`
    font-size: 2.5rem;
    font-weight: 600;

    @media screen and (max-width: 796px) {
        font-size: 2rem;
    }
`
export const ProjectsSubHeading = styled.div`
    font-size: 1rem;
    font-weight: 400;
    opacity: 80%;
`

export const ProjectsBody = styled.div`
`

export const ProjectsMoreButton = styled.div`
`

export const MoreButton = styled.div`
    color: #ECF0F1;
    background-color: #130F40;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 5px 10px;
    border-bottom: 2px solid #130F40;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #ECF0F1;
        background-color: #130F40;
        border-bottom: 2px solid #ECF0F1;
    }
`
