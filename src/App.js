import ToDoAddForm from "./components/toDo-add-form/ToDoAddForm";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO LIST</h1>
        <ToDoAddForm />
      </header>
    </div>
  );
}

export default App;
