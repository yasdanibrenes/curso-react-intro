import './TodoCreateButton.css'

function TodoCreateButton({ setOpenModal }) {
    return(
      <div className='box'>
        <div className='btn btnTodoCreateButton' onClick={ 
            () => { setOpenModal(state => !state) }
            }>
          <span>+ Add task</span>
        </div>
      </div>
    )
  };

export { TodoCreateButton };
