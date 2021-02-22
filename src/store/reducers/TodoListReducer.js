const initalState = {
  todos: [],
};
let id = 1;
const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const todo = { id: ++id, todo: action.value, status: "active" };
      return {
        todos: state.todos.concat(todo),
      };
    case "SET_TODO":
      const obj = state.todos.filter((todo) => todo.id !== action.value.id);
      const newTodo = {
        id: action.value.id,
        todo: action.updatedTodo,
        status: "active",
      };
      return {
        todos: obj.concat(newTodo),
      };
    case "CHANGE_STATUS":
      const filteredObj = state.todos.filter(
        (todo) => todo.todo !== action.value
      );
      const updated = state.todos.filter((todo) => todo.todo === action.value);

      const updatedStatusTodo = {
        id: updated[0].id,
        todo: updated[0].todo,
        status: "completed",
      };
      console.log(updated);
      console.log(updatedStatusTodo);
      return {
        todos: filteredObj.concat(updatedStatusTodo),
      };

    case "STRIKE":
      console.log(action);
      const todos = state.todos.filter((todo) => todo.todo !== action.value);
      const updatedtodo = state.todos.filter(
        (todo) => todo.todo === action.value
      );

      const updatedStatusTodoClick = {
        id: updatedtodo[0].id,
        todo: updatedtodo[0].todo,
        status: updatedtodo[0].status === "completed" ? "active" : "completed",
      };
      console.log(updatedtodo);
      console.log(updatedStatusTodoClick);
      return {
        todos: todos.concat(updatedStatusTodoClick),
      };

    default:
      return state;
  }
};

export default todoReducer;
