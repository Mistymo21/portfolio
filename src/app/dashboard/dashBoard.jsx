import React from "react";
import styles from "./dashboard.module.css";
const DashBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Let's Work Together!</h1>
        <p className={styles.name}>Hi, I'm Yusuf,</p>
        <p className={styles.text}>
         I'm a Full Stack Developer with a strong focus on building clean, responsive, and user-friendly web applications. I specialize in Next.js, React, and modern CSS on the frontend, and work with Node.js, MongoDB, and RESTful APIs on the backend. I’m dedicated to delivering fast, accessible, and scalable solutions that align with both user needs and business goals. I take pride in writing clean code, designing intuitive interfaces, and developing reliable backend systems that work seamlessly together.
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
