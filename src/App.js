import logo from "./logo.svg";
import "./App.css";
import TodoAddition from "./conatiners/TodoAddition/TodoAddition";
import TodoList from "./conatiners/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="h1">Vishal todos application</h1>
      <TodoAddition />
      <TodoList />
    </div>
  );
}

export default App;
