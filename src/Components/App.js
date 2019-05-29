import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import CreateTodo from '../Components/todos-list/CreateTodo';
import EditTodo from '../Components/todos-list/EditTodo';
import TodoList from '../Components/todos-list/TodoList';

function App() {
  return (
    <Router>
    <div className="container">
      <h2>MERN-Stack Todo App</h2>
      <ul>
      <li><Link to="/"><button>TodoList</button></Link></li>
      <li><Link to='/edit/:id'><button>edit</button></Link></li>
      <li><Link to="/create"><button>create</button></Link></li>
      </ul>
    <Route path="/" exact component={TodoList}/>
    <Route path="/edit/:id" component={EditTodo}/>
    <Route path="/create" component={CreateTodo}/>
    </div>
    </Router>
  );
}

export default App;
