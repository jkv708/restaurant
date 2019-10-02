import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Footer from './Footer';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
  	<div>
  	<BrowserRouter>
     <Nav />
    <Switch>
    <Route path="/" exact component={Header}/>
    <Route path="/about" component={About}/>
    <Route path="/menu"  component={Menu}/>
    <Route path="/Contact"component={Contact}/>
    </Switch>
    </BrowserRouter>
    <Footer />
    </div>
    
  );
}

export default App;
