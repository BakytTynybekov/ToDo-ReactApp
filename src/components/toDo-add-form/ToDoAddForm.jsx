import React from "react";
import { Component } from "react";
import "./toDoAddForm.scss";
class ToDoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.task);
    this.setState({
      task: ""
    });
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { task } = this.state;
    return (
      <div className="toDoAddForm">
        <textarea
          value={task}
          name="task"
          onChange={this.onValueChange}
          placeholder="Тут вы можете себе добавить задание..."
          contenteditable
        />
        <button onClick={this.onSubmit}>Add</button>
      </div>
    );
  }
}

export default ToDoAddForm;
