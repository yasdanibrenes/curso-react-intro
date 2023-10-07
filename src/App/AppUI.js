import React from "react";
import { TodoCounter } from "../TodoCounter";
import { EmptyCounter } from "../EmptyCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoSearchLoading } from "../TodoSearchLoading";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoCreateButton } from "../TodoCreateButton";
import { TodoCreateButtonLoading } from "../TodoCreateButtonLoading";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      {searchedTodos.length === 0 ? (
        <EmptyCounter />
      ) : (
        <TodoCounter />
      )}

      {loading ? (
        <TodoSearchLoading />
      ) : (
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      )}

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {loading ? <TodoCreateButtonLoading /> : <TodoCreateButton setOpenModal={setOpenModal} />}

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </>
  );
}

export { AppUI };
