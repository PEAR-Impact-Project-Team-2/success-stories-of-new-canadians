import React, { Component } from 'react';
import '@styles/components/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="/#home">Home</a></li>
            <li><a className="smoothscroll" href="https://azharlaher.com/about-azhar">About Me</a></li>
            <li><a className="smoothscroll" href="/selection">Stories</a></li>
	          <li><a className="smoothscroll" href="/#contact">Contact Me</a></li>
            <li><a className="smoothscroll" href="/#subscribe">Subscribe</a></li>
         </ul>

      </nav>
        );
    }
}

export default Navbar;