import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  position: fixed;
  bottom: 30px;
  right: 0px;

  width: 150px;
  height: auto;

  @media(max-width: 560px){
    width: 90px;
    bottom: 10px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;

  cursor: pointer;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.primaryFontColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  border:none;
`;

export const ButtonAdd = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => (props.menu === false ? props.theme.buttonBackgroundColor : '#b15d5d')};
  font-size: 20px;
  cursor: pointer;

  transition: 0.3s;
  transform: rotate(${(props) => (props.menu === false ? '90deg' : '46deg')});

  user-select: none;

  :focus{
    transform: rotate(46deg);
    background-color: #b15d5d;
  }
`;
