import React from "react";
import { TodoContext } from "../TodoContext";
import './EmptyTodos.css';

function EmptyTodos() { 

  const {
    todos,
  } = React.useContext(TodoContext);
    return(
    <>
      {todos.length === 0 ? ( 
        <p className='EmptyTodos'>Hi, create your first task!</p>
      ) : (
        <p className='EmptyTodos'>There are no task to show.</p>
      )}
    </>
    )
  };

export { EmptyTodos };
