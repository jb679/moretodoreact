import React, { useState } from "react";
import "./styles.css";

function generateId() {
  return Math.floor(Math.random() * 100);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text: input,
        id: generateId(),
      },
    ]);
    setInput("");
  };

  const removeToDo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />

        <button onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeToDo(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
