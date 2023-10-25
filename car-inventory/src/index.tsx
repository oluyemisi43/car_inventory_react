import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { Button, Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
}
from 'react-router-dom';
import logo from './assets/img/logo.jpg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Router>

    <Navbar bg='dark' variant='dark'>

    <Navbar.Brand>
      <img
        alt="Car Logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>

    <Nav className='nav' activeKey='/'>

    <Nav.Item>
      <Nav.Link as='div'>
        <Link to='/'> Home </Link>
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link as='div'>
        <Link to='/'> Dashboard </Link>
      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link as='div'>
        <Link to='/'> Profile </Link>
      </Nav.Link>
    </Nav.Item>

  </Nav>
    </Navbar> 
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
