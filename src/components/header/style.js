import styled from 'styled-components';

export const Container = styled.header`
  margin: 0 auto;
  color: ${(props) => props.theme.secondFontColor};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  font-size: 30px;
`;

export const ContainerTheme = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background: none;
  border: none;

  font-size: ${({ theme }) => theme.large};
  cursor: pointer;

  opacity: 0.8;
  transition: 0.2s;

  :hover{
    opacity: 1;
  }
`;

export const Separator = styled.div`
  width: 100px;
  height: 5px;

  margin: 0 auto;
  margin-bottom: 30px;

  border-radius: ${(props) => props.theme.buttonBorderRadius};
  background-color: ${(props) => props.theme.secondFontColor};

`;
