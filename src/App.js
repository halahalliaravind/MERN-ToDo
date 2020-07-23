import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN STACK TODO APP</h2>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
