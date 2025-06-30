import React from 'react'
import styles from './projects.module.css'
const Projects = () => {
  return (
    <div>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>An Online Clearance system for university</h2>
          <p>
            A full-stack web app that streamlines the student clerance process. Feature include role-based login, document uploads, digital approvals, real-time status tracking and a  printable final clearance form. Built with Next.js 14, MongoDB, and Moudle CSS.  
          </p>
          <a href="https://e-clearance.vercel.app//" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>View Project</button>
            </a>
        </div>
        
        <div className={styles.card}>
          <h2>Real Estate App</h2>
          <p>
            Real Estate website built with React and css. This is a standard frontend application showcasing property listings and details.
          </p>
          <a href="https://rent-ups.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>View Project</button>
            </a>
        </div>
        
        <div className={styles.card}>
          <h2>
            SmartBite - A Food Ordering App
          </h2>
          <p>
            A resposive food ordering app UI designed for easy browsing. Built with a clean layouts and user-friendly navigation.
            The app features a menu with various pizza categories, allowing users to explore and select their favorite dishes. 
            
          </p>
          <a href="https://smart-bite-one.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>View Project</button>
            </a>
        </div>
        
        <div className={styles.card}>
          <h2>Tour Guide App</h2>
          <p>
           A mobile-friendly Tour Guide App design that helps users explore cities with ease. Built on react and css
          </p>
          <a href="https://tour-guide-sage.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>View Project</button>
            </a>
        </div>
        
       
      </div>
    </div>
  )
}

export default  Projects

