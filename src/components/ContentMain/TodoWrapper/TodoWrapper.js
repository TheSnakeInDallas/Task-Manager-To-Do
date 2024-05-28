import React, { useState, useEffect } from "react";
import { Todo } from "../Todo/Todo";
import { TodoForm } from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import styled from "styled-components";

const STORAGE_KEY = "userTasks";

const StyledTodoWrapper = styled.div`
  width: 100%;
  background: #2c2f36;
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const TabPanel = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    background: #75637b;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: transform 0.2s ease, background-color 0.2s ease;

    &:hover {
      background-color: #6c5b71;
    }

    &:active {
      transform: translateY(2px);
    }

    &:focus {
      outline: none;
    }
  }
`;

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const saveTodosToLocalStorage = (updatedTodos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
  };

  const addTodo = (task) => {
    if (task.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        task: task,
        completed: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      saveTodosToLocalStorage(updatedTodos);
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const editTodo = (task, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task } : todo
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    setEditingTodoId(null);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const handleEditTodo = (id) => {
    setEditingTodoId(id);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeTab === "all") {
      return true;
    } else if (activeTab === "completed") {
      return todo.completed;
    } else if (activeTab === "incompleted") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <StyledTodoWrapper>
      <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tasks</h2>
      <TabPanel>
        <button onClick={() => handleTabChange("all")}>All</button>
        <button onClick={() => handleTabChange("completed")}>Completed</button>
        <button onClick={() => handleTabChange("incompleted")}>
          Incompleted
        </button>
      </TabPanel>
      <TodoForm addTodo={addTodo} />
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          {editingTodoId === todo.id ? (
            <EditTodoForm editTodo={editTodo} task={todo} />
          ) : (
            <Todo
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={handleEditTodo}
              toggleComplete={toggleComplete}
            />
          )}
        </div>
      ))}
    </StyledTodoWrapper>
  );
};
