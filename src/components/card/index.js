import React, { useState, useContext } from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import { UpdateTaskContext } from '../../context/UpdateTaskContext';
import DeleteModal from '../../modals/delete';

import { Container, FormInput } from './style';

export default function Card({
  title, content, id,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState();
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const { setUpdateTasks } = useContext(UpdateTaskContext);

  const handleOpenDeleteModal = () => {
    setIsOpen((prevState) => (prevState === false));
  };

  const handleCloseDeleteModal = () => {
    setIsOpen(false);
  };

  const handleUpdateTask = async () => {
    await axios.put(`http://localhost:3000/tasks/${id}`, { title: newTitle, content: newContent })
      .then((res) => {
        if (res) {
          setUpdate(res);
          setEdit(false);
          setUpdateTasks(res);
        }
      });
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
                  <input type="text" defaultValue={title} onChange={(e) => setNewTitle(e.target.value)} />
                  <input type="text" defaultValue={content} onChange={(e) => setNewContent(e.target.value)} />
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
                  <FaSave
                    onClick={handleUpdateTask}
                    style={{
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
