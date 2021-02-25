import React, { useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import classes from "./TodoAdditon.module.css";
import * as actionTypes from "../../store/actions/index";
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
          placeholder="What needs to be done?"
          value={todo}
          onChange={(event) => onChangeHandler(event)}
        />
      </form>
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
    onAddTodo: (todo) => dispatch(actionTypes.addTodo(todo)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(TodoAddition);
