import { createStore } from "redux";
import todoListReducer from "./reducers/TodoListReducer";
import { compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todoListReducer, composeEnhancers());

export default store;
