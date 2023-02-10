import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../../components/card';

export default function Cards() {
  const [tasks, setTasks] = useState([]);

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
  }, []);

  return (
    <>
      {
        tasks.map((task) => (
          <Card
            id={task.id}
            title={task.title}
            content={task.content}
          />
        ))
      }
    </>
  );
}
