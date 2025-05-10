import React, { useState } from "react";
import TodoList from "./TodoList";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { task: "Learn React", completed: false },
    { task: "Build a React app", completed: false },
    { task: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (todo) => {
    const updatedTodos = todos.map((ele) =>
      ele.task === todo.task ? { ...ele, completed: true } : ele
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
