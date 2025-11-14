import React from "react";
import styles from "./dashboard.module.css";
import Link from "next/link";
import { FaArrowRight, FaCode, FaServer, FaLightbulb } from "react-icons/fa";

const DashBoard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundAnimation}></div>
      
      <div className={styles.wrapper}>
        <div className={styles.info}>
          {/* Animated greeting */}
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <h2 className={styles.subtitle}>Let's Build Something Amazing Together!</h2>
          </div>

          {/* Main title with typing effect */}
          <div className={styles.titleContainer}>
            <h1 className={styles.name}>
              Hi, I'm <span className={styles.gradientName}>Yusuf</span>
            </h1>
            <div className={styles.typingContainer}>
              <span className={styles.typingText}>Full Stack Developer</span>
              <span className={styles.cursor}>|</span>
            </div>
          </div>

          {/* Enhanced content with icons */}
          <div className={styles.content}>
            <div className={styles.textCard}>
              <div className={styles.textHeader}>
                <FaCode className={styles.textIcon} />
                <h3 className={styles.textTitle}>Frontend Expertise</h3>
              </div>
              <p className={styles.text}>
                I'm a <strong>Full Stack Developer</strong> passionate about
                crafting clean, responsive, and user-focused web applications. I
                specialize in <strong>Next.js, React, and modern CSS</strong> to create
                engaging user experiences that perform beautifully across all devices.
              </p>
            </div>

            <div className={styles.textCard}>
              <div className={styles.textHeader}>
                <FaServer className={styles.textIcon} />
                <h3 className={styles.textTitle}>Backend Excellence</h3>
              </div>
              <p className={styles.text}>
                On the backend, I work with{" "}
                <strong>Node.js, MongoDB, and RESTful APIs</strong> to build
                scalable, secure, and efficient server-side solutions that power
                modern web applications.
              </p>
            </div>

            <div className={styles.textCard}>
              <div className={styles.textHeader}>
                <FaLightbulb className={styles.textIcon} />
                <h3 className={styles.textTitle}>Beyond Code</h3>
              </div>
              <p className={styles.text}>
                I'm dedicated to delivering fast, accessible, and scalable solutions
                that meet both user needs and business goals. When I'm not coding, 
                you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying a good book.
              </p>
            </div>
          </div>

          {/* Enhanced CTA section */}
          <div className={styles.ctaSection}>
            <Link href="/projects" className={styles.ctaLink}>
              <button className={styles.cta}>
                <span>View My Projects</span>
                <FaArrowRight className={styles.ctaIcon} />
              </button>
            </Link>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;