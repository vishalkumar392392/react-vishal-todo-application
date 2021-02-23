export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    value: todo,
  };
};

export const setTodo = (todo, name) => {
  return { type: "SET_TODO", value: todo, updatedTodo: name };
};

export const strikeThrough = (todo) => {
  return { type: "STRIKE", value: todo };
};

export const changeStatus = (todo) => {
  return { type: "CHANGE_STATUS", value: todo };
};

export const removeTodo = (todo) => {
  return { type: "REMOVE", value: todo };
};

export const clearCompleted = () => {
  return { type: "CLEAR_COMPLETE" };
};
