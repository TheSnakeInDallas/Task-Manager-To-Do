import React, { useState } from "react";
import styled from "styled-components";

const StyledEditTodoForm = styled.form`
  margin-bottom: 1rem;

  input {
    outline: none;
    background: none;
    border: 1px solid #79737f;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 300px;
    height: 40px;
    color: #ffffff;

    &::placeholder {
      color: #ffffff4d;
    }
  }

  button {
    background: #75637b;
    color: #ffffff;
    border: none;
    padding: 0.55rem;
    cursor: pointer;
    height: 41px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #6c5b71;
    }
  }
`;

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    console.log("Form submitted");
  };

  return (
    <StyledEditTodoForm onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Update task"
      />
      <button type="submit">Update Task</button>
    </StyledEditTodoForm>
  );
};
