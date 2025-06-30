import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <br />
      <p className={styles.info}>
        I'm a passionate and detail-oriented web developer who specializes in building seamless, responsive, and user-friendly web applications.
      </p>
      <p className={styles.desc}>
        My core expertise lies in React and Next.js, where I focus on building high-performance, accessible, and visually engaging websites. I love turning complex problems into simple, elegant solutions that enhance user experience. From frontend development and state management to API integration and performance optimization, I enjoy working on every layer of a project that delivers real value.
      </p>
      <p className={styles.desc}>
        I write clean, modular, and maintainable code using modern JavaScript (ES6+), and I’m always exploring better ways to implement scalable UI architecture. I’m comfortable working independently or in collaborative teams and follow Agile methodologies to ensure efficient and timely delivery.
      </p>
      <p className={styles.desc}>
        Beyond coding, I’m constantly learning new tools and technologies to stay up-to-date in the fast-evolving web landscape. I'm currently exploring TypeScript, Tailwind CSS, backend integrations, and building fullstack applications. I take pride in continuous self-improvement, whether through projects, open-source contributions, or tech communities.
      </p>
      <p className={styles.desc}>
        My goal is to create web experiences that not only work well but feel great to use — blending design and functionality into polished, production-ready solutions.
      </p>
    </div>
  )
}

export default About