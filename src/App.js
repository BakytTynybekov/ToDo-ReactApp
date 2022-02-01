import ToDoAddForm from "./components/toDo-add-form/ToDoAddForm";
import { Component } from "react";
import "./App.scss";
import TasksList from "./components/tasks-list/TasksList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { task: "Сходить в магазин", id: 1 },
        { task: "Read a book", id: 2 },
      ],
    };
    this.maxId = 3;
  }

  onAdd = (task) => {
    const newItem = {
      task,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onDelete = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => id !== item.id),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TO-DO LIST</h1>
          <ToDoAddForm onAdd={this.onAdd} />
          <TasksList data={this.state.data} onDelete={this.onDelete} />
        </header>
      </div>
    );
  }
}

export default App;
