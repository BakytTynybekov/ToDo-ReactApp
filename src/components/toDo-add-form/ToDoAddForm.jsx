import React from "react";
import { Component } from "react";
import "./toDoAddForm.scss";
class ToDoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="toDoAddForm">
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Тут вы можете себе добавить задание..."
          contenteditable
        />
        <button>Add</button>
      </div>
    );
  }
}

export default ToDoAddForm;
