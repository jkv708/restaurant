﻿import React from 'react';
import "./Nav.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
    	<div>
        <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link> </li>
      <li><Link to="/menu">Menu</Link> </li>
      <li><Link to="/contact">Contact</Link></li>

      </ul>
      </div>
    );
}
export default Nav;