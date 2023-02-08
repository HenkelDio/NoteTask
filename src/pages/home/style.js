import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 200px;
  margin: 0 auto;

  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ${(props) => props.theme.secondFontColor};
  background-color: ${(props) => props.theme.cardBackgroundColor};

  padding: 10px;
  border-radius: ${(props) => props.theme.buttonBorderRadius};

  p {
    margin-bottom: 50px;
  }

  a {
    padding: 20px;
    margin-top: 50px;

    background-color: ${(props) => props.theme.buttonBackgroundColor};
    color: ${(props) => props.theme.buttonFontColor};
    border-radius: ${(props) => props.theme.buttonBorderRadius};
    font-weight: 700;
    text-decoration: none;
    border: none;
  }
`;
