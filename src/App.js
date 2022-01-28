import ToDoAddForm from "./components/toDo-add-form/ToDoAddForm";

import "./App.scss";
import TasksList from "./components/tasks-list/TasksList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO LIST</h1>
        <ToDoAddForm />
        <TasksList />
      </header>
    </div>
  );
}

export default App;
