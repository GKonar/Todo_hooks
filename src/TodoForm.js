import React, { useContext, useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

import { DispatchContext } from './contexts/todos.context';

function TodoForm() {
  const [ value, handleChange, reset ] = useInputState("");
  const dispatch = useContext(DispatchContext);
  const inputRef = useRef();
  return (
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
      <form 
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value })
          reset();
        }}
      >
        <TextField 
          value={ value } 
          onChange={ handleChange } 
          margin="normal" 
          label="Add New Todo" 
          fullWidth
        />
      </form>
      <input ref={inputRef} type="text"/>
      <button onClick={() => console.log(inputRef)}>FocuS</button>
    </Paper>
  );
};

export default TodoForm;
