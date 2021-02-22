import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./TodoAdditon.module.css";
function TodoAddition(props) {
  const [todo, setTodo] = useState("");
  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(todo);
    props.onAddTodo(todo);
    setTodo("");
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
