import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 500px;
  height: 100px;

  margin: 10px auto;
  padding: 2px 10px;
  opacity: 1;

  font-family: Arial, Helvetica, sans-serif;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  color: ${(props) => props.theme.primaryFontColor};

  h3 {
    font-size: ${(props) => props.theme.large};
    margin-bottom: 5px;
  }

  small {
    font-size: ${(props) => props.theme.small};
  }

  :hover {
    background-color: ${(props) => props.theme.onCardHover}
  }

  @keyframes entryAnimation {
    0%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media(max-width: 560px){
    width: 95%;
  }

  form {
    position: absolute;
    right: 0;
    top: 5px;
  }

  form button {
    background: none;
    color: white;
    border: none;
    cursor: pointer;

    opacity: 0.8;
    font-size: 1.5rem;
  }

  form button:nth-child(1){
    color: ${(props) => props.theme.onDeleteBackgroundColor}
  }

  form button:hover{
    opacity: 1;
  }
`;

export const FormInput = styled.form`
  position: absolute;
  left: 0;

  width: 400px;
  padding: 13px 8px;

  display: flex;
  flex-direction: column;

  input {
    background: none;
    border: none;
    color: ${(props) => props.theme.primaryFontColor};
    outline: none;
    opacity: 0.8;
  }

  input:nth-child(1){
    margin-top: 10px;
    margin-bottom: 4px;
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
