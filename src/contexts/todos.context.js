import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: "Find a job", completed: false },
  { id: 2, task: "Go jogging when it is raining", completed: true }
]

export const TodosContext = createContext(defaultTodos);

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos)

  return (
    <TodosContext.Provider value={ todosStuff }>
      {props.children}
    </TodosContext.Provider>
  )
}
