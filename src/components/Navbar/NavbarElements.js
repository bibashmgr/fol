// dependencies
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { AiOutlineBars } from 'react-icons/ai';

export const Nav = styled.nav `
  background-color: #130f40;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  transition: all 0.3s ease-in-out;
  z-index: 10;
`;
export const NavContainer = styled.div `
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0px 100px;

  @media screen and (max-width: 796px) {
    margin: 0px 25px;
  }
`;
export const NavLogo = styled.div `
  color: #ecf0f1;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;

  @media screen and (max-width: 796px) {
    font-size: 1.5rem;
  }
`;

export const Logo = styled.div `
  cursor: pointer;
`;

export const BarsIcon = styled.div `
  display: none;

  @media screen and (max-width: 796px) {
    display: block;
    color: #ecf0f1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0px 25px;
  }
`;

export const Bars = styled(AiOutlineBars)
`
  cursor: pointer;
`;

export const NavMenu = styled.ul `
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 796px) {
    display: none;
  }
`;

export const NavItem = styled.li `
  padding: 0px 40px;
`;

export const NavLink = styled(LinkS)
`
  color: #ecf0f1;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

export const NavButton = styled(LinkS)
`
  color: #130f40;
  background-color: #ecf0f1;
  font-size: 1rem;
  font-weight: 600;
  padding: 7.5px 15px;
  border: 2.5px solid #ecf0f1;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #ecf0f1;
    background-color: #130f40;
  }
`;