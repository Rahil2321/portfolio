import React, { Component } from 'react';
import styles from './Skills.css'

class Skills extends Component {
  render() {
    return (
      <section className="skills" id="skills">
        <h3 className="page-header">My Skills</h3>
        <div className="my-skills">
          <div className="skills-des">
            My creative skills & experiences.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae
            consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae
            laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum.
            Ad delectus natus aut hic explicabo minus quod.
      </div>
          <div className="about-skills">
            <button>HTML</button>
            <button>CSS</button>
            <button>JAVA SCRIPT</button>
            <button>JQUERY</button>
            <button>SAAS</button>
            <button>TYPE SCRIPT</button>
            <button>BOOTSTRAP</button>
            <button>REACT JS</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
