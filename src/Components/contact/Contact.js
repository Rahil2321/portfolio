import React, { Component } from 'react'
import styles from './Contact.css'

class Contact extends Component {
  render() {
    return <section className="contact" id="contact">
      <h3 className="page-header">Contact Me</h3>

      <div className="contact-me">
        <div className="my-contact">
          <h4 className="contact-header">Get in Touch</h4>

          <div className="info">
            <div className="info-field">
              <label for="name">Name :</label>
              <span>Rahil Shaik</span>
            </div>

            <div className="info-field">
              <label for="name">Mobile :</label>
              <span>+91-9160476403</span>
            </div>

            <div className="info-field">
              <label for="name">Email :</label>
              <span>rahil.shaik72@gmail.com</span>
            </div>
          </div>

        </div>

        <div className="message-me">
          <h4>message me</h4>
          <form>
            <div className="input-row">
              <input className="name" type="text" placeholder="Name"></input>
              <input className="email" type="email" placeholder="Email"></input>
            </div>

            <div>
              <input className="subject" type="text" placeholder="Subject"></input>
            </div>

            <div className="field textarea">
              <textarea className="message" cols="30" rows="10" placeholder="Message...">
              </textarea>
            </div>

            <div className="button-click">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>


    </section>
  }
}

export default Contact
