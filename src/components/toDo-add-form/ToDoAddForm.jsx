import React from "react";
import { useState } from "react";
import "./toDoAddForm.scss";

const ToDoAddForm = ({ onAdd }) => {
  const [state, setState] = useState({ task: "" });

  const onSubmit = (e) => {
    if (state.task.length < 3) return;
    onAdd(state.task);
    setState({
      task: "",
    });
  };

  const onValueChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="toDoAddForm">
      <textarea
        value={state.task}
        name="task"
        onChange={onValueChange}
        placeholder="Тут вы можете себе добавить задание..."
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};
export default ToDoAddForm;
