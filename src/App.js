import "./App.css";
import TodoAddition from "./conatiners/TodoAddition/TodoAddition";
import TodoList from "./conatiners/TodoList/TodoList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoFilter from "./conatiners/TodoFilters/TodoFilter";

function App() {
  return (
    <div className="App">
      <h1 className="h1">Vishal todos application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TodoAddition} />
        </Switch>
        <TodoFilter />
      </BrowserRouter>
    </div>
  );
}

export default App;
