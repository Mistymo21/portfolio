"use client"
import emailjs from 'emailjs-com'
import React, { useRef } from 'react'
import styles from './contact.module.css'
import { toast } from 'react-toast'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_p20vuy9',      
      'template_dhz0hyf',     
      form.current,
      'KsSIiRTTEAVyvn_Po'       
    ).then(
      () => {
        toast.success('Message sent successfully!')
        form.current.reset()
      },
      (error) => {
        toast.error('Something went wrong. Try again later.')
        console.error(error)
      }
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Contact Me</h1>
        <p>Let's get in touch!</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="phone" placeholder="Phone Number" />
        <textarea name="message" placeholder="Enter your message..." required />
        <button type="submit" className={styles.btn}>Send</button>
      </form>
    </div>
  )
}

export default Contact