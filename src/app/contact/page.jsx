"use client"
import emailjs from 'emailjs-com'
import React, { useRef, useState } from 'react'
import styles from './contact.module.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const form = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (!form.current) return

    emailjs.sendForm(
      'service_p20vuy9',      
      'template_dhz0hyf',     
      form.current,
      'KsSIiRTTEAVyvn_Po'       
    ).then(
      () => {
        toast.success('🎉 Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setIsLoading(false)
      },
      (error) => {
        toast.error('❌ Something went wrong. Please try again later.')
        console.error(error)
        setIsLoading(false)
      }
    )
  }

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}></div>
      
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Get In <span className={styles.highlight}>Touch</span>
        </h1>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
        </p>
      </div>

      <div className={styles.content}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <div className={styles.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
            </div>
            <p>Based in Nigeria</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <div className={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <h3>Email</h3>
            </div>
            <p>yusufmm90999<br />@gmail.com</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <div className={styles.infoIcon}>
                <FaPhone />
              </div>
              <h3>Phone</h3>
            </div>
            <p>+234 816 207 8947</p>
          </div>

          <div className={styles.socialLinks}>
            <a 
              href="https://www.linkedin.com/in/yusuf-muhammed-06029b321" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Mistymo21" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.formContainer}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Send Me a Message</h2>
              <p className={styles.formSubtitle}>I typically respond within 24 hours</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.inputContainer}>
                  <FaUser className={styles.inputIcon} />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Full Name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputContainer}>
                  <FaEnvelope className={styles.inputIcon} />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email Address" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputContainer}>
                  <FaPhone className={styles.inputIcon} />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number (Optional)" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.textareaContainer}>
                  <FaComment className={styles.textareaIcon} />
                  <textarea 
                    name="message" 
                    placeholder="Tell me about your project, timeline, and budget..." 
                    required 
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    rows={6}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className={styles.spinner}></div>
                ) : (
                  <>
                    <FaPaperPlane className={styles.buttonIcon} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Contact