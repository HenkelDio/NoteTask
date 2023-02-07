import React, { useState } from 'react';

import {
  ButtonAdd, Container, ContainerButton, Button,
} from './style';

export default function Footer() {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu((prevState) => (prevState === false));
  };

  return (
    <Container>
      {menu
      && (
      <ContainerButton>
        <Button>
          Criar
        </Button>
        <Button>
          Criar
        </Button>
      </ContainerButton>
      )}

      <ButtonAdd onClick={handleToggleMenu} menu={menu}>
        <h1>+</h1>
      </ButtonAdd>
    </Container>
  );
}
