import React from "react";
import { useState } from "react";
import "./toDoAddForm.scss";

class ToDoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  onSubmit = (e) => {
    if (this.state.task.length < 3) return;
    this.props.onAdd(this.state.task);
    this.setState({
      task: "",
    });
  };


  const onValueChange = (e) => {
    setState({
      task: e.target.value,
  onValueChange = (e) => {
    this.setState({
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
