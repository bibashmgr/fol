// dependencies
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS} from "react-scroll";

export const Nav = styled.nav`
    background-color: #130F40;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
`
export const NavContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0px 100px;

    @media screen and (max-width:796px){
        margin: 0px 25px;
    }
`
export const NavLogo = styled(LinkR)`
    color: #ECF0F1;
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0px 25px;

    @media screen and (max-width:796px){
        font-size: 1.5rem;
    }
`

export const BarsIcon = styled.div`
    display:none;

    @media screen and (max-width:796px){
        display:block;
        color: #ECF0F1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        padding: 0px 25px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media screen and (max-width:796px){
        display: none;
    }
`

export const NavItem = styled.li`
    padding: 0px 40px;
`

export const NavLink = styled(LinkS)`
    color: #ECF0F1;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
`

export const NavButton = styled(LinkS)`
    color: #130F40;
    background-color: #ECF0F1;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 7.5px 15px;
    border-radius: 2.5px;
`