import React, { createContext, useState } from 'react';

export const UpdateTaskContext = createContext();

export function UpdateTaskContextProvider({ children }) {
  const [updateTasks, setUpdateTasks] = useState();

  return (
    <UpdateTaskContext.Provider
      value={{
        setUpdateTasks,
        updateTasks,
      }}
    >
      {children}
    </UpdateTaskContext.Provider>
  );
}
