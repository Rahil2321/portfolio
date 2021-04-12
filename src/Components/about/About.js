import React, { Component } from 'react'
import styles from './About.css'
import copy from '../../Shared/images/copy.jpg';
class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <h3 className="page-header">About me</h3>
        <div className="wrap">
          <div className="img-card">
            <img src={copy} alt=""></img>
          </div>

          <div className="about-content">
            <p>I am <span>Rahil Shaik</span> and i'm a <span>Front End Developer</span> </p>
            <p>
              i'm passionate about all things about Web development.I work hard.I care about writing clean code and I
              genuinely love to learn.I'm currently looking for the right oppurtunity to work in an environment that will
              help me progress into a full-stack role.
        </p>
            <button>Download CV</button>
          </div>
        </div>
      </section>
    )
  }
}

export default About


