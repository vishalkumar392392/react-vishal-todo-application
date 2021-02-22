import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./TodoList.module.css";
function TodoList(props) {
  let changeValue = "";
  const [clickstart, setclickstart] = useState(false);
  const [todos, setTodos] = useState("");

  const doubleClick = (event) => {
    console.log("double");
    console.log(event.target.value);
    props.onChangeStatus(event.target.value);
  };
  const test = (todo, event) => {
    props.onSetTodo(todo, event.target.value);
  };
  const [cssClass, setcssClass] = useState(null);
  let count = 1;
  const radioButtonHandler = (event) => {
    props.onStrikeThrough(event.target.value);
  };
  const setDefault = () => {
    console.log("setdef");
  };

  const buttonHandler1 = (event) => {
    console.log(event.target.value);
  };
  const list = props.todos.map((todo) => {
    return (
      <div className={classes.TodoList} key={todo.id}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                value={todo.todo}
                aria-label="Radio button for following text input"
                onClick={radioButtonHandler}
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
          <button className="btn" value={todo.todo} onClick={buttonHandler1}>
            x
          </button>
        </div>
      </div>
    );
  });

  return <div>{list}</div>;
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onSetTodo: (todo, name) =>
      dispatch({ type: "SET_TODO", value: todo, updatedTodo: name }),
    onStrikeThrough: (name) => dispatch({ type: "STRIKE", value: name }),
    onChangeStatus: (name) => dispatch({ type: "CHANGE_STATUS", value: name }),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(TodoList);
