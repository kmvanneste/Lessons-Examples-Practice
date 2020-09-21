import React, { useReducer, useRef } from "react";
import "./App.css";
import Form from "/components/Form/form.js";
import ToDoList from "component/List/list.js";

function App() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          name: action.name
        }
      ];
      // Bonus: Remove a todo from the list.
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
    }
  }, []);
  

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <Form />
      <h4>My Todo List:</h4>
      <ToDoList />
    </div>
  );
}

export default TodoList;
