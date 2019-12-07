import React, { Component } from 'react';
import '@styles/components/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="/#home">Home</a></li>
            <li><a className="smoothscroll" href="/#about">About Me</a></li>
            <li><a className="smoothscroll" href="/selection">Stories</a></li>
	          <li><a className="smoothscroll" href="/#contact">Contact Me</a></li>
            <li><a className="smoothscroll" href="/#subscribe">Subscribe</a></li>
         </ul>

      </nav>

      </header>
        );
    }
}

export default Navbar;