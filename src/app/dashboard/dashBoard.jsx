import React from "react";
import styles from "./dashboard.module.css";

const DashBoard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.subtitle}>Let's Work Together!</h2>
        <h1 className={styles.name}>Hi, I'm Yusuf</h1>
        <p className={styles.text}>
          I'm a <strong>Full Stack Developer</strong> passionate about crafting clean, responsive, and user-focused web applications. I specialize in <strong>Next.js, React, and modern CSS</strong> on the frontend, and work with <strong>Node.js, MongoDB, and RESTful APIs</strong> on the backend.
        </p>
        <p className={styles.text}>
          I’m dedicated to delivering fast, accessible, and scalable solutions that meet both user needs and business goals. I take pride in writing clean code, designing intuitive interfaces, and building robust backend systems that work in harmony.
        </p>
      </div>
    </section>
  );
};

export default DashBoard;