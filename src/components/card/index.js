import React, { useState } from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaSave } from 'react-icons/fa';
import DeleteModal from '../../modals/delete';

import { Container, FormInput } from './style';

export default function Card({ title, content, id }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleOpenDeleteModal = () => {
    setIsOpen((prevState) => (prevState === false));
  };

  const handleCloseDeleteModal = () => {
    setIsOpen(false);
  };

  return (
    <>

      <DeleteModal
        modalIsOpen={modalIsOpen}
        onCloseDeleteModal={handleCloseDeleteModal}
        id={id}
      />

      <Container>
        <div>
          {
            edit
              ? (
                <FormInput>
                  <input type="text" placeholder={title} />
                  <input type="text" placeholder={content} />
                </FormInput>
              )
              : (
                <>
                  <h3>{title}</h3>
                  <small>{content}</small>
                </>
              )
          }

        </div>
        <form>
          <button type="button">
            {
              edit
                ? (
                  <FaSave style={{
                    color: '#fff',
                  }}
                  />
                )
                : <MdDelete onClick={handleOpenDeleteModal} />
            }

          </button>
          <button type="button" onClick={() => setEdit((prevState) => (prevState !== true))}>
            {
              edit
                ? <IoCloseCircleSharp />
                : <MdModeEditOutline />
            }
          </button>
        </form>
      </Container>
    </>
  );
}
