import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const gatherInput = evt => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <form onSubmit={gatherInput}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        name="task"
        type="text"
        onChange={(evt) => setTask(evt.target.value)}
        value={task}
      />
      <button>Add a todo!</button>
    </form>
  );
  
}

export default NewTodoForm;
