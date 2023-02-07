import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
