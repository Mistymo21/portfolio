import React from 'react'
import styles from './resume.module.css'

const Resume = () => {
  return (
    <div className={styles.container}>
      <h1>My Resume</h1>
      <p>Download or view my resume below:</p>

      <div className={styles.actions}>
        <a href="/Yusuf_Muhammed_CV.pdf" download className={styles.btn}>Download PDF</a>
        <a href="/Yusuf_Muhammed_CV.pdf" target="_blank" className={styles.btnSecondary}>View in Browser</a>
      </div>

      <iframe
        src="/Yusuf_Muhammed_CV.pdf"
        className={styles.preview}
        title="Resume Preview"
      />
    </div>
  )
}

export default Resume