import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UpdateTaskContext } from '../../context/UpdateTaskContext';

import { Container } from './style';
import Card from '../../components/card';

export default function Cards() {
  const [tasks, setTasks] = useState([]);

  const { updateTasks } = useContext(UpdateTaskContext);

  useEffect(() => {
    const getTasks = async () => {
      await axios.get('http://localhost:3000/tasks')
        .then((res) => {
          if (res) {
            setTasks(res.data);
          }
        });
    };
    getTasks();
  }, [updateTasks]);

  return (
    <Container>
      {
        tasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            content={task.content}
          />
        ))
      }
    </Container>
  );
}
