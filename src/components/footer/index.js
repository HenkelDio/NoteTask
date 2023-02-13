import React, { useState } from 'react';
import CreateModal from '../../modals/create';

import {
  ButtonAdd, Container, ContainerButton, Button,
} from './style';

export default function Footer() {
  const [menu, setMenu] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenu((prevState) => (prevState === false));
  };

  const openCreateModal = () => {
    setIsOpen(true);
    setMenu(false);
  };

  const closeCreateModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>

      <CreateModal
        modalIsOpen={modalIsOpen}
        onCloseCreateModal={closeCreateModal}
        setIsOpen={setIsOpen}
      />

      {menu
      && (
      <ContainerButton>
        <Button
          onClick={openCreateModal}
        >
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
