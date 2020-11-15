import React from 'react';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Location from './Location';

import NotFound from './NotFound';
import'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import { Navbar,Nav, } from 'react-bootstrap';
import {Jumbotron, Button} from 'react-bootstrap';



function App() {
  return (
    <Router>
    <div className="App">

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">


      <NavLink href="#home" exact activeClassName="active" to="/">Home</NavLink>
      <br />
    <NavLink href="#about" activeClassName="active" to="/about">About</NavLink>
    <br />
    <NavLink href="#contact" activeClassName="active" to="/contact">Contact</NavLink>
    <br />
    <NavLink href="#location" activeClassName="active" to="/location">Location</NavLink>
    <br />

     

        
      
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

 <Jumbotron>

     </Jumbotron>



    
    

    

  

    

    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/location" component={Location} />
    <Route component={NotFound} />
    </Switch>
</div>
  </Router>
  );
}

export default App;
