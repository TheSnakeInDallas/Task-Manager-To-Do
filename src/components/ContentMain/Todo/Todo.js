import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledTodo = styled.div`
  justify-content: space-between;
  align-items: center;
  background: #75637b;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;
  gap: 0 0.75rem;
  min-width: 375px;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #6c5b71;
  }

  &:active {
    transform: translateY(2px);
  }

  .task {
    &.completed {
      color: #b1b1b1;
      text-decoration: line-through;
      cursor: pointer;
    }

    &.incompleted {
      color: #ffffff;
      cursor: pointer;
    }
  }

  .fa-trash {
    margin-left: 0.75rem;
  }

  .edit-icon,
  .delete-icon {
    cursor: pointer;
  }
`;

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const handleEditClick = () => {
    editTodo(task.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(task.id);
  };

  return (
    <StyledTodo>
      <p
        className={`task ${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={handleEditClick}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={handleDeleteClick}
        />
      </div>
    </StyledTodo>
  );
};
