import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./TodoFilter.css";

function TodoFilter(props) {
  return (
    <div className="TodoFilter">
      <a style={{ marginRight: "20px" }}>{props.todos.length} Items left</a>
      <NavLink to="/" style={{ marginRight: "20px" }}>
        Active
      </NavLink>
      <NavLink to="/" style={{ marginRight: "20px" }}>
        All
      </NavLink>
      <NavLink to="/" style={{ marginRight: "20px" }}>
        Completed
      </NavLink>
      <NavLink to="/" style={{ marginRight: "20px" }}>
        Clear Completed
      </NavLink>
    </div>
  );
}

const stateMaptoProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(stateMaptoProps)(TodoFilter);
