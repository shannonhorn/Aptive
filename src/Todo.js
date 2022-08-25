import React from "react";

const Todo = ({ todo, handleCheck }) => {
  return (
    <li>
      <input type="checkbox" onChange={() => handleCheck(todo)} />
      {todo.name}
    </li>
  );
};

export default Todo;
