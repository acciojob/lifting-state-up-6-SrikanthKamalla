import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((ele) => (
          <li key={ele.task}>
            {ele.task}
            {!ele.completed && (
              <button onClick={() => handleComplete(ele)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
