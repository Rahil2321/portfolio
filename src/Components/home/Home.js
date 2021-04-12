import React, { Component } from 'react'
import styles from './Home.css';


class Home extends Component {
  render() {
    return (
      <div>
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content">
              <div className="text-1">Hello, my name is </div>
              <div className="text-2">Rahil Shaik </div>
              <div className="text-3">And I'm a <span>Web Developer</span></div>
              <a href="#">Hire me</a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
