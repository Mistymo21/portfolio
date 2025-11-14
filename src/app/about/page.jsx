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
      title: 'Clean Code',
      description: 'Writing modular, maintainable code with modern JavaScript (ES6+)'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Building high-performance, accessible, and visually engaging websites'
    },
    {
      icon: <FaTools />,
      title: 'Full Stack',
      description: 'Frontend development, state management, API integration, and optimization'
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solving',
      description: 'Turning complex problems into simple, elegant user experiences'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}></div>
      
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          About <span className={styles.highlight}>Me</span>
        </h1>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Passionate Full Stack Developer crafting digital experiences
        </p>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Introduction Card */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <FaLightbulb />
            </div>
            <h2 className={styles.cardTitle}>My Journey</h2>
          </div>
          <p className={styles.intro}>
            I'm a passionate and detail-oriented <strong>web developer</strong> who specializes 
            in building seamless, responsive, and user-friendly web applications. 
            I love creating solutions that not only work well but feel great to use.
          </p>
        </div>

        {/* Skills Grid */}
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

        {/* Expertise Highlights */}
        <div className={styles.highlightsSection}>
          <h2 className={styles.sectionTitle}>What I Bring</h2>
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

        {/* Detailed Description */}
        <div className={styles.detailsSection}>
          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Frontend Excellence</h3>
            <p className={styles.detailText}>
              My core expertise lies in <strong>React and Next.js</strong>, where I focus on 
              building high-performance, accessible, and visually engaging websites. 
              From frontend development and state management to API integration and 
              performance optimization, I enjoy working on every layer of a project 
              that delivers real value.
            </p>
          </div>

          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Code Quality & Methodology</h3>
            <p className={styles.detailText}>
              I write clean, modular, and maintainable code using modern JavaScript (ES6+), 
              and I'm always exploring better ways to implement scalable UI architecture. 
              I'm comfortable working independently or in collaborative teams and follow 
              Agile methodologies to ensure efficient and timely delivery.
            </p>
          </div>

          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Continuous Growth</h3>
            <p className={styles.detailText}>
              Beyond coding, I'm constantly learning new tools and technologies to stay 
              up-to-date in the fast-evolving web landscape. I'm currently exploring 
              <strong> TypeScript, Tailwind CSS, backend integrations</strong>, and building 
              fullstack applications. I take pride in continuous self-improvement, whether 
              through projects, open-source contributions, or tech communities.
            </p>
          </div>

          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>My Mission</h3>
            <p className={styles.detailText}>
              My goal is to create web experiences that not only work well but feel great 
              to use — blending design and functionality into polished, production-ready 
              solutions that make a real impact for users and businesses alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;