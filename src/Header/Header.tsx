import React from "react";
import logo from '../logo.svg';
import '../main.css';
import './Header.scss';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
   render() {
      return (
         <header>
            <Link to='./' className="site-logo"><img src={logo} className="App-logo" height="40" alt="logo" /></Link>
            <nav>
               <div className="nav-links">
                  <Link to='./'><span>Home</span></Link>
                  <Link to='./about'><span>About</span></Link>
                  <Link to='./tic-tak-toe'><span>Tic Tak Toe</span></Link>
               </div>
            </nav>
         </header>
       )
   }
}