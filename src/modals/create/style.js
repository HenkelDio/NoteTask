import styled from 'styled-components';

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  margin-bottom: 20px;

  label {
    opacity: 0.8;
    font-size: 15px;
    margin-bottom: 5px;
  }

  input {
    background-color: ${(props) => props.theme.backgroundColor};
    border: none;
    height: 55px;
    outline: none;
    color: ${({ theme }) => theme.secondFontColor};
    padding-left: 10px;
    border-radius: ${(props) => props.theme.buttonBorderRadius};
    font-size: 1.5rem;

    :hover {
      background-color: ${(props) => props.theme.onCardHover};
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 55px;
  cursor: pointer;

  background-color: ${(props) => props.theme.buttonBackgroundColor};
  color: ${(props) => props.theme.buttonFontColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  transition: 0.1s;

  :hover{
    background-color: ${(props) => props.theme.onHoverButtonBackgroundColor}
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;

  padding: 10px 13px;
  background-color: #b15d5d;
  border-radius: 50px;

  font-weight: bold;
  cursor: pointer;
`;
