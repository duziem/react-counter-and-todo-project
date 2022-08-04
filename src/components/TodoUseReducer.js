import React, { useState, useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import Form from "react-bootstrap/Form";

const reducer = (todos, action) => {
  switch (action.type) {
    case "POPULATE_TODO":
      return action.payload;
    case "ADD_TODO":
      return [...todos, newTodo(action.payload.inputValue)];
    case "MARK_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "EDIT_TODO":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, inputValue: action.payload.value };
        }
        return todo;
      });
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

const newTodo = (value) => {
  return { id: Date.now(), inputValue: value, completed: false };
};

const TodoUseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { inputValue: inputValue } });

    // console
  };

  useEffect(() => {
    // if (todos) console.log(todos);
    //set local storage
    if (todos.length > 0) {
      localStorage.setItem("todosList", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    // get local storage
    // if the local storage is not null
    // dispatch an action type POPULATE_TODO to populate the todos state using the todolist stored in localStorage
    const localTodos = JSON.parse(localStorage.getItem("todosList")) || []; // set to an empty array if null
    if (localTodos.length > 0) {
      dispatch({ type: "POPULATE_TODO", payload: localTodos });
    }
  }, []);

  return (
    <div>
      <h2>My Todo App</h2>
      <form onSubmit={handleSubmit} className="my-form">
        {/* <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        /> */}
        <Form.Group
          className="mb-3"
          style={{ maxWidth: "40%", margin: "auto" }}
          controlId="exampleForm.ControlInput1"
        >
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Group>
      </form>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoUseReducer;
