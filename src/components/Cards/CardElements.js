import styled from 'styled-components';

export const CardBox = styled.div `
  background-color: #130f40;
  width: 350px;
  height: auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 25px;

  @media screen and (max-width: 796px) {
    width: 300px;
    height: 46vh;
  }
`;
export const CardHead = styled.div ``;

export const CardImage = styled.img `
  width: 300px;

  @media screen and (max-width: 796px) {
    width: 250px;
  }
`;
export const CardBody = styled.div ``;
export const CardText = styled.div `
  color: #ecf0f1;
`;
export const CardTitle = styled.div `
  font-size: 1rem;
  font-weight: 600;
`;
export const CardInfo = styled.div `
  font-size: 0.75rem;
  font-weight: 400;
`;
export const CardButtons = styled.div `
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;
export const CardGitButton = styled.a `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  background-color: #ecf0f1;
  color: #130f40;
  border: 1.5px solid #ecf0f1;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #ecf0f1;
    background-color: #130f40;
  }
`;

export const GitText = styled.div `
  padding-left: 2.5px;
`;

export const CardDemoButton = styled.a `
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  background-color: #ecf0f1;
  color: #130f40;
  border: 1.5px solid #ecf0f1;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 10px;

  &:hover {
    color: #ecf0f1;
    background-color: #130f40;
  }
`;

// components:Cards

export const CardsBox = styled.div `
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
  }

  @media screen and (max-width: 796px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`;