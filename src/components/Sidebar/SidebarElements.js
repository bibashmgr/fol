// dependencies
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import {FaTimes} from 'react-icons/fa';

export const Side = styled.aside`
    background-color: #ECF0F1;
    height: 100%;
    width: 100%;
    z-index: 99;
    position: absolute;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};;
    transition: all 0.3s ease-in-out;
`

export const SideIcon = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: 0px 25px;
    padding: 0px 25px;
    text-align: center;
    font-size: 1.5rem;
    color: #130F40;
`
export const Times = styled(FaTimes)`
    cursor: pointer;
`

export const SideContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const SideItem = styled.li`
    padding: 50px 0px;
`
export const SideLink = styled(LinkS)`
    color: #130F40;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

export const SideButton = styled(LinkS)`
    color: #ECF0F1;
    background-color: #130F40;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    padding: 7.5px 15px;
    border: 2.5px solid #130F40;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #130F40;
        background-color: #ECF0F1;
    }
`
