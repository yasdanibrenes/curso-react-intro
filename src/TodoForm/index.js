import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Add your new task</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Write here your task to add" />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancel</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Submit</button>
            </div>
        </form>
    );
}

export { TodoForm };
