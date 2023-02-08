import React, { useState } from 'react';
import Modal from 'styled-react-modal';

import { FormInput, Button, CloseModal } from './style';

const StyledModal = Modal.styled`
  position: relative;

  width: 40rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  color: ${(props) => props.theme.primaryFontColor};
  font-family: Arial;
  animation: open 0.5s ease;

  h3 {
    margin-bottom: 0;
  }

  @keyframes open {
    0% {
      opacity: 0.2;
      bottom: -100px;
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }
`;

export default function CreateModal({ modalIsOpen, onCloseCreateModal }) {
  return (
    <StyledModal
      isOpen={modalIsOpen}
      onEscapeKeydown={onCloseCreateModal}
      onBackgroundClick={onCloseCreateModal}
    >

      <CloseModal onClick={onCloseCreateModal}>X</CloseModal>

      <h3>Criar nova Tarefa</h3>
      <p>Adicione as informações necessárias abaixo e clique em criar.</p>

      <form>
        <FormInput>
          <label htmlFor="title">Título</label>
          <input type="text" name="title" />
        </FormInput>
        <FormInput>
          <label htmlFor="content">Conteúdo</label>
          <input type="text" name="content" />
        </FormInput>
        <Button type="button">
          Criar
        </Button>
      </form>
    </StyledModal>
  );
}
