import React, { Component } from 'react';
import '@styles/components/Header.scss';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
  render() {

    return (
      <header id="home">

      <div className="row banner">
         <div className="banner-text">
            <h1>Welcome</h1>
            <h3>This is where we put a subtitle.</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i class="fa fa-arrow-down"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;