import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer.js';

const defaultTodos = [
  { id: 1, task: "Find a job", completed: false },
  { id: 2, task: "Go jogging when it is raining", completed: true }
];

export const TodosContext = createContext(defaultTodos);
export const DispatchContext = createContext()

export function TodosProvider(props) {
const [ todos, dispatch ] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
