import React from 'react';
import styles from './projects.module.css';
import { FaExternalLinkAlt, FaGithub, FaCode, FaServer, FaMobile, FaGlobe } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiMongodb, SiCss3 } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "Online Clearance System for University",
      description: "A full-stack web app that streamlines the student clearance process. Features include role-based login, document uploads, digital approvals, real-time status tracking and a printable final clearance form.",
      longDescription: "Built with modern technologies to handle the entire university clearance process digitally, reducing paperwork and processing time by 70%.",
      technologies: ["Next.js 14", "MongoDB", "Module CSS", "Node.js", "Authentication"],
      icons: [<SiNextdotjs key="next" />, <SiMongodb key="mongo" />, <FaServer key="server" />],
      link: "https://clearance-system.vercel.app/",
      github: "https://github.com/Mistymo21/Final-Year-Project",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Agriculture E-commerce Platform",
      description: "A full-stack e-commerce platform tailored for agricultural products. Features include user authentication, product listings, shopping cart, order management, and payment integration.",
      longDescription: "Developed to connect farmers directly with consumers, enhancing market access and reducing intermediaries.",
      technologies: ["Next.js 14", "MongoDB", "Module CSS", "Node.js", "Authentication"],
      icons: [<SiNextdotjs key="next" />, <SiMongodb key="mongo" />, <FaServer key="server" />],
      link: "https://agromartt.com/",
      github: "https://github.com/Mistymo21/agricultural-app",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Real Estate App",
      description: "A modern real estate platform showcasing property listings with advanced filtering, search functionality, and property details in a clean, user-friendly interface.",
      longDescription: "Frontend application with responsive design, property categorization, and interactive elements for a seamless user experience.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      icons: [<SiReact key="react" />, <SiCss3 key="css" />, <FaMobile key="mobile" />],
      link: "https://rent-ups.vercel.app/",
      github: "#",
      category: "Frontend",
      featured: false
    },
    {
      title: "SmartBite - Food Ordering App",
      description: "A responsive food ordering app UI designed for easy browsing. Features a clean layout, user-friendly navigation, and interactive menu with various food categories.",
      longDescription: "Modern food delivery interface with cart functionality, category filtering, and smooth animations for enhanced user engagement.",
      technologies: ["React", "CSS3", "UI/UX Design", "Responsive"],
      icons: [<SiReact key="react" />, <SiCss3 key="css" />, <FaMobile key="mobile" />],
      link: "https://smart-bite-one.vercel.app/",
      github: "#",
      category: "Frontend",
      featured: false
    },
    {
      title: "Tour Guide App",
      description: "A mobile-friendly Tour Guide App that helps users explore cities with ease. Features location-based recommendations and interactive maps.",
      longDescription: "Travel companion app with destination guides, popular attractions, and itinerary planning capabilities for travelers.",
      technologies: ["React", "CSS3", "Mobile First", "Interactive UI"],
      icons: [<SiReact key="react" />, <SiCss3 key="css" />, <FaGlobe key="globe" />],
      link: "https://tour-guide-sage.vercel.app/",
      github: "#",
      category: "Frontend",
      featured: false
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}></div>
      
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          My <span className={styles.highlight}>Projects</span>
        </h1>
        <div className={styles.titleUnderline}></div>
        <p className={styles.subtitle}>
          Here are some of my recent works that showcase my skills in web development
        </p>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className={styles.featuredBadge}>
                <span>⭐ Featured</span>
              </div>
            )}

            {/* Project Header */}
            <div className={styles.cardHeader}>
              <div className={styles.techIcons}>
                {project.icons.map((icon, i) => (
                  <span key={i} className={styles.techIcon}>{icon}</span>
                ))}
              </div>
              <span className={styles.category}>{project.category}</span>
            </div>

            {/* Project Content */}
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectLongDescription}>{project.longDescription}</p>
            </div>

            {/* Technologies */}
            <div className={styles.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>{tech}</span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className={styles.cardActions}>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.demoButton}
              >
                <FaExternalLinkAlt className={styles.buttonIcon} />
                Live Demo
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubButton}
              >
                <FaGithub className={styles.buttonIcon} />
                Code
              </a>
            </div>

            {/* Hover Effect */}
            <div className={styles.cardHover}></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <FaCode className={styles.ctaIcon} />
          <h3 className={styles.ctaTitle}>Want to see more?</h3>
          <p className={styles.ctaText}>
            I'm constantly working on new projects and improving my skills. 
            Feel free to check out my GitHub for more code examples and ongoing work.
          </p>
          <a 
            href="https://github.com/Mistymo21" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <FaGithub className={styles.ctaButtonIcon} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;