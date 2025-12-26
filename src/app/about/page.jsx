import React from 'react';
import styles from './about.module.css';
import { FaReact, FaNodeJs, FaCode, FaRocket, FaTools, FaLightbulb } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { icon: <FaReact />, name: 'React.js', level: 90 },
    { icon: <SiNextdotjs />, name: 'Next.js', level: 85 },
    { icon: <SiTypescript />, name: 'TypeScript', level: 80 },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 95 },
    { icon: <FaNodeJs />, name: 'Node.js', level: 75 },
    { icon: <SiMongodb />, name: 'MongoDB', level: 70 },
  ];

  const highlights = [
    {
      icon: <FaCode />,
      title: 'Clean Architecture',
      description: 'Writing modular, maintainable code with modern JavaScript and best practices'
    },
    {
      icon: <FaRocket />,
      title: 'Performance Focus',
      description: 'Building fast, accessible, and optimized web applications'
    },
    {
      icon: <FaTools />,
      title: 'Full-Stack Development',
      description: 'Frontend interfaces, backend APIs, state management, and system integration'
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem-Solving',
      description: 'Translating complex requirements into clear and effective solutions'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundAnimation}></div>

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          About <span className={styles.highlight}>Me</span>
        </h1>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Full Stack Developer focused on scalable and reliable web solutions
        </p>
      </div>

      <div className={styles.content}>
        {/* Introduction */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <FaLightbulb />
            </div>
            <h2 className={styles.cardTitle}>Professional Overview</h2>
          </div>
          <p className={styles.intro}>
            I am a <strong>full stack web developer</strong> with a strong focus on building
            scalable, responsive, and user-centric applications. My work emphasizes
            clean design, solid engineering principles, and solutions that align with
            real business needs.
          </p>
        </div>

        {/* Skills */}
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <div className={styles.skillInfo}>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className={styles.highlightsSection}>
          <h2 className={styles.sectionTitle}>Core Strengths</h2>
          <div className={styles.highlightsGrid}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{highlight.icon}</div>
                <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                <p className={styles.highlightDesc}>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className={styles.detailsSection}>
          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Frontend Development</h3>
            <p className={styles.detailText}>
              I specialize in building modern user interfaces with
              <strong> React and Next.js</strong>, focusing on performance,
              accessibility, and maintainability. I work comfortably with
              state management, API integration, and UI optimization to deliver
              production-ready applications.
            </p>
          </div>

          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Engineering Practices</h3>
            <p className={styles.detailText}>
              My development approach emphasizes clean, readable, and reusable
              code using modern JavaScript and structured patterns. I value
              collaboration, clear communication, and disciplined workflows,
              including Agile-style development processes.
            </p>
          </div>

          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Backend & Integration</h3>
            <p className={styles.detailText}>
              Alongside frontend development, I build backend services using
              <strong> Node.js and MongoDB</strong>, designing APIs and data
              flows that support secure and scalable applications. I enjoy
              working across the stack to ensure smooth system integration.
            </p>
          </div>

          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Professional Focus</h3>
            <p className={styles.detailText}>
              My objective is to deliver reliable digital products that combine
              thoughtful design with solid engineering. I aim to create solutions
              that are not only functional but sustainable, scalable, and aligned
              with long-term business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
