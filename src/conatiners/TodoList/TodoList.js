import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./TodoList.module.css";
import * as actionTypes from "../../store/actions/index";

function TodoList(props) {
  const doubleClick = (event) => {
    props.onChangeStatus(event.target.value);
  };
  const test = (todo, event) => {
    props.onSetTodo(todo, event.target.value);
  };
  const radioButtonHandler = (event) => {
    props.onStrikeThrough(event.target.value);
  };

  const removeTodo = (todo) => {
    props.onRemoveTodo(todo);
  };

  const params = useParams();

  let actions = [];
  if (params.filter === "all") {
    actions = [...props.todos];
  }
  if (params.filter === "active") {
    actions = props.todos.filter((todo) => todo.status === "active");
  }
  if (params.filter === "completed") {
    actions = props.todos.filter((todo) => todo.status === "completed");
  }
  if (params.filter === "clear") {
    props.onClearCompleted();
    props.history.push("/all");
  }

  const list = actions.map((todo) => {
    return (
      <div className={classes.TodoList} key={todo.id}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                value={todo.todo}
                aria-label="Radio button for following text input"
                onChange={radioButtonHandler}
                checked={todo.status === "completed" ? true : false}
              />
            </div>
          </div>
          <input
            className={
              todo.status === "completed"
                ? `form-control ${classes.Input}`
                : "form-control"
            }
            type="text"
            value={todo.todo}
            onDoubleClick={doubleClick}
            onChange={(event) => test(todo, event)}
            aria-label="Text input with radio button"
            disabled={todo.status === "completed" ? true : false}
          />
          <button
            className="btn"
            value={todo.todo}
            onClick={() => removeTodo(todo.todo)}
          >
            x
          </button>
        </div>
      </div>
    );
  });

  return <div className={classes.TodoListStyle}>{list}</div>;
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onSetTodo: (todo, updatedTodo) =>
      dispatch(actionTypes.setTodo(todo, updatedTodo)),
    onStrikeThrough: (todo) => dispatch(actionTypes.strikeThrough(todo)),
    onChangeStatus: (todo) => dispatch(actionTypes.changeStatus(todo)),
    onRemoveTodo: (todo) => dispatch(actionTypes.removeTodo(todo)),
    onClearCompleted: () => dispatch(actionTypes.clearCompleted()),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(TodoList);
