import React from 'react'
import styles from './resume.module.css'
import { FaDownload, FaEye, FaFilePdf, FaCalendar, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss, SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si'

const Resume = () => {
  const skills = [
    { name: 'React.js', level: 90, icon: <SiReact /> },
    { name: 'Next.js', level: 85, icon: <SiNextdotjs /> },
    { name: 'TypeScript', level: 80, icon: <SiTypescript /> },
    { name: 'JavaScript', level: 95, icon: <SiJavascript /> },
    { name: 'Node.js', level: 75, icon: <SiNodedotjs /> },
    { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
    { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss /> },
    { name: 'CSS3', level: 95, icon: <SiCss3 /> },
    { name: 'HTML5', level: 98, icon: <SiHtml5 /> },
  ]

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Developing responsive web applications using modern technologies including React, Next.js, Node.js, and MongoDB. Collaborating with clients to deliver custom solutions that meet their business needs.',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Personal Projects',
      period: '2021 - 2022',
      description: 'Built various frontend applications focusing on user experience, responsive design, and modern JavaScript frameworks. Implemented best practices for code quality and performance.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5']
    }
  ]

  const education = [
    {
      degree: 'B.Sc in Computer Science',
      institution: 'Al-Hikmah University',
      period: '2021 - 2025',
      description: 'Pursuing a Bachelor of Science degree in Computer Science, focusing on web development.'}
  ]

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}></div>
      
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          My <span className={styles.highlight}>Resume</span>
        </h1>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Download my resume to learn more about my experience, skills, and qualifications
        </p>
      </div>

      {/* Quick Info Cards */}
      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <FaFilePdf className={styles.infoIcon} />
          <div className={styles.infoContent}>
            <h3>PDF Resume</h3>
            <p>Latest updated version</p>
          </div>
        </div>
        
        {/* <div className={styles.infoCard}>
          <FaCalendar className={styles.infoIcon} />
          <div className={styles.infoContent}>
            <h3>2+ Years</h3>
            <p>Professional Experience</p>
          </div>
        </div> */}
        
        <div className={styles.infoCard}>
          <FaMapMarkerAlt className={styles.infoIcon} />
          <div className={styles.infoContent}>
            <h3>Nigeria</h3>
            <p>Based in Nigeria</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <a href="/Yusuf_Muhammed_CV.pdf" download className={styles.downloadBtn}>
          <FaDownload className={styles.btnIcon} />
          Download PDF
        </a>
        <a href="/Yusuf_Muhammed_CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
          <FaEye className={styles.btnIcon} />
          View in Browser
        </a>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Education */}
      <div className={styles.contentGrid}>
        {/* Experience */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <div className={styles.companyInfo}>
                    <span className={styles.company}>{exp.company}</span>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <p className={styles.jobDescription}>{exp.description}</p>
                  <div className={styles.technologies}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.educationInfo}>
                    <span className={styles.institution}>{edu.institution}</span>
                    <span className={styles.period}>{edu.period}</span>
                  </div>
                  <p className={styles.educationDescription}>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Preview */}
      <div className={styles.previewSection}>
        <h2 className={styles.sectionTitle}>Resume Preview</h2>
        <div className={styles.previewContainer}>
          <iframe
            src="/Yusuf Muhammed CV.pdf"
            className={styles.preview}
            title="Resume Preview"
          />
          <div className={styles.previewOverlay}></div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h3 className={styles.ctaTitle}>Ready to Work Together?</h3>
          <p className={styles.ctaText}>
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          <div className={styles.ctaActions}>
            <a href="mailto:yusufmm90999@gmail.com" className={styles.ctaBtn}>
              <FaEnvelope className={styles.ctaIcon} />
              Email Me
            </a>
            <a href="tel:+2348162078947" className={styles.ctaBtnSecondary}>
              <FaPhone className={styles.ctaIcon} />
              Call Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume