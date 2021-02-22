import React, { useState } from "react";
import { connect } from "react-redux";
import { Route, useParams } from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import classes from "./TodoAdditon.module.css";
function TodoAddition(props) {
  const [todo, setTodo] = useState("");
  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo("");
    props.history.push("/all");
  };

  return (
    <div className={classes.TodoAddition}>
      <form onSubmit={onSubmitHandler}>
        <input
          className="form-control"
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={(event) => onChangeHandler(event)}
        />
      </form>
      {/* <TodoList /> */}
      <Route path="/:filter" component={TodoList} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onAddTodo: (todo) => dispatch({ type: "ADD_TODO", value: todo }),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(TodoAddition);
