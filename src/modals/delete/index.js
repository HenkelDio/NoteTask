import React from 'react';
import axios from 'axios';
import Modal from 'styled-react-modal';

import { CloseModal } from './style';

const StyledModal = Modal.styled`
  position: relative;

  width: 40rem;
  height: 20rem;
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

  button {
    width: 500px;

    height: 55px;
    cursor: pointer;

    margin-top: 20px;

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

export default function DeleteModal({ modalIsOpen, onCloseDeleteModal, id }) {
  console.log(id);

  const deleteTask = async () => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
      .then((res) => {
        if (res) {
          console.log(res);
        }
      });
  };

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onEscapeKeydown={onCloseDeleteModal}
      onBackgroundClick={onCloseDeleteModal}
    >

      <CloseModal onClick={onCloseDeleteModal}>X</CloseModal>

      <h3>Tem certeza que deseja excluir essa tarefa?</h3>
      <button
        type="button"
        onClick={deleteTask}
      >
        Sim
      </button>
      <button
        type="button"
        onClick={onCloseDeleteModal}
      >
        Não
      </button>
    </StyledModal>
  );
}
