import React from "react";
import { TodoContext } from "../TodoContext";
import confetti from "canvas-confetti";
import "./TodoCounter.css";

function TodoCounter() {
  const { todos, totalTodos, completedTodos } = React.useContext(TodoContext);

  const fire = () => {
    confetti();
  };

  return totalTodos === completedTodos && !todos.empty ? (
    <>
      <h1 className="TodoCounter Congrats">
        <span onMouseOver={fire} className="fire">
          Congrats
        </span>
        , all task completed!
      </h1>
      <h2 className="TodoCounter-h2">add a new task to complete</h2>
    </>
  ) : (
    <h1 className="TodoCounter">
      Completed <span>{completedTodos}</span> of <span>{totalTodos}</span> task
    </h1>
  );
}

export { TodoCounter };
