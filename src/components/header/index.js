import React from 'react';
import { Container, ContainerTheme, Separator } from './style';

export default function Header({ onToggleTheme, currentTheme }) {
  return (
    <>
      <ContainerTheme onClick={onToggleTheme}>
        {currentTheme === 'dark' ? '🌞' : '🌚'}
      </ContainerTheme>

      <Container>
        <h1>
          NOTE
          {' '}
          <br />
          {' '}
          TASK
        </h1>
      </Container>

      <Separator />

    </>
  );
}
