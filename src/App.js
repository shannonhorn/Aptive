import React, { useState, useEffect } from "react";
import Todo from "./Todo";

import "./styles.scss";

/*
  - Create a TODO list of unfinished tasks
  - Create a COMPLETED list of finished tasks
  - When marking a task as complete move it to the COMPLETED list
  - Show a count of how many tasks are complete
  - Show a count of how many tasks are not complete
  - Sort the COMPLETED list alphabetically
*/

export default function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  useEffect(() => {
    const incompleteTodos = [
      {
        id: 0,
        name: "eat lunch",
        complete: false
      },
      { id: 1, name: "walk the dog", complete: false },
      { id: 2, name: "mow the lawn", complete: false }
    ];
    setTodos(incompleteTodos);
  }, []);

  const handleCheck = (checkedTodo) => {
    let incompleteTodos = todos.filter((todo) => todo.id !== checkedTodo.id);
    let completeTodos = [...completedTodos];
    completeTodos = [...completeTodos, checkedTodo];
    completeTodos.sort((a, b) => a.name > b.name);
    setTodos(incompleteTodos);
    setCompletedTodos(completeTodos);
  };

  return (
    <div className="App">
      <h4>
        To Do <small>({todos.length})</small>
      </h4>

      <ul className="todo-list">
        {todos &&
          todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} handleCheck={handleCheck} />;
          })}
      </ul>

      <h4>
        Completed <small>({completedTodos.length})</small>
      </h4>

      <ul className="todo-list completed">
        {completedTodos &&
          completedTodos.map((todo) => {
            return <Todo key={todo.id} todo={todo} handleCheck={handleCheck} />;
          })}
      </ul>
    </div>
  );
}
