import ToDoAddForm from "./components/toDo-add-form/ToDoAddForm";
import { useState } from "react";

import "./App.scss";
import TasksList from "./components/tasks-list/TasksList";

const dataArr = () => {
  return {
    data: [
      { task: "Сходить в магазин", id: 1 },
      { task: "Read a book", id: 2 },
    ],
  };
};
let maxId = 3;
function App() {
  const [state, setState] = useState(dataArr);

  const onDelete = (id) => {
    setState((state) => ({
      data: state.data.filter((item) => id !== item.id),
    }));
  };

  const onAdd = (task) => {
    const newItem = {
      task,
      id: maxId++,
    };
    setState((state) => ({
      data: [...state.data, newItem],
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO LIST</h1>
        <ToDoAddForm onAdd={onAdd} />
        <TasksList data={state.data} onDelete={onDelete} />
      </header>
    </div>
  );
}

export default App;
