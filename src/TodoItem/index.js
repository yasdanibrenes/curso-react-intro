import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-Check ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
        >&#10003;</span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span 
        className='Icon Icon-delete'
        onClick={props.onDelete}
        >&#10007;</span>
      </li>
    );
  }

export { TodoItem };
