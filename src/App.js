import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaNotesMedical } from "react-icons/fa";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <Link className="navbar-brand" to="/" target="">
            {" "}
            <FaNotesMedical className="text-white" size={40} />
          </Link>
          <Link to="/" className="navbar-brand text-white">
            TODO
          </Link>
          <div className="collpase nav-collpase">
            <ul className="navbar-nav mr-auto">
              <li className="navbara-item">
                <Link to="/" className="nav-link text-white">
                  Todos
                </Link>
              </li>
              <li className="navbara-item">
                <Link to="/create" className="nav-link text-white">
                  CreateTodo
                </Link>
              </li>
              <li className="navbara-item">
                <Link to="/edit" className="nav-link text-white">
                  EditTodo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
