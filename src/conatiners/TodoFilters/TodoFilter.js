import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./TodoFilter.css";

function TodoFilter(props) {
  return (
    <div className="TodoFilter">
      <a style={{ marginRight: "20px" }}>{props.todos.length} Items left</a>
      <NavLink to="/all" style={{ marginRight: "20px", color: "black" }}>
        All
      </NavLink>
      <NavLink to="/active" style={{ marginRight: "20px", color: "black" }}>
        Active
      </NavLink>
      <NavLink to="/completed" style={{ marginRight: "20px", color: "black" }}>
        Completed
      </NavLink>
      <NavLink to="/clear" style={{ marginRight: "20px", color: "black" }}>
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
