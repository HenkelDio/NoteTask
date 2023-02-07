import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 100px;

  margin: 10px auto;
  padding: 2px 10px;

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

  @media(max-width: 560px){
    width: 95%;
  }
`;
