import React, { Component } from 'react'
import styles from './Header.css'; 

class Header extends Component {
  render() {
    return <div className="top-nav">
      <div className="brand-name">
        <h3><span>R</span>ahil</h3>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact me</a>
      </div>
    </div>
  }
}

export default Header


