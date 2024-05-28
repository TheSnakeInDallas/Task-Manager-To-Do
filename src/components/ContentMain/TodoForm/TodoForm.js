import React, { useState } from "react";
import styled from "styled-components";

const StyledTodoForm = styled.form`
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
    font-family: inherit;

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
    font-family: inherit;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #6c5b71;
    }
  }
`;

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");

    console.log(value);
  };

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your tasks"
      />
      <button type="submit">Add task</button>
    </StyledTodoForm>
  );
};
