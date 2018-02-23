import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewClient from './components/newclient.component';
import Home from './components/home.component';
import About from './components/about.component';


class App extends React.Component{
  render() {
      return (
        <Router>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Home</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="/about">
                  About
              </NavItem>
              <NavItem href="/new-client">
                New Client
              </NavItem>
            </Nav>
          </Navbar>
    
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/new-client" component={NewClient} />
        </div>
      </Router>
      )}
}

export default App;
