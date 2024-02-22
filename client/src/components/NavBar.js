import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const navbarStyle = {
  width: '100%',
  backgroundColor: '#333',
  overflow: 'hidden',
  padding: '10px 0',
  margin: '10px'
};

const linkStyle = {
  float: 'left',
  display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
};

const linkHoverStyle = {
  backgroundColor: '#ddd',
  color: 'black',
};

export default class NavBar extends Component {
  render() {
    return (
      <div style={navbarStyle}>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="#about" style={linkStyle}>
          About
        </a>
        <a href="#services" style={linkStyle}>
          Services
        </a>
        <a href="#contact" style={linkStyle}>
          Contact
        </a>
      </div>
    )
  }
}


