import React, { useState, useEffect } from "react";
import "./App.css";

const skills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    desc: "Robust OOP language for scalable backend and Android apps.",
    color: "#f89820",
    gradient: "linear-gradient(135deg, #f89820 0%, #ff6b35 100%)"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    desc: "Versatile scripting for AI, ML, automation, and web.",
    color: "#3572A5",
    gradient: "linear-gradient(135deg, #3572A5 0%, #4B8BBE 100%)"
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    desc: "Efficient data querying and relational database design.",
    color: "#e38c00",
    gradient: "linear-gradient(135deg, #e38c00 0%, #ff8c00 100%)"
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Semantic markup for accessible, SEO-friendly web pages.",
    color: "#e34c26",
    gradient: "linear-gradient(135deg, #e34c26 0%, #ff5722 100%)"
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Modern, responsive, and animated web styling.",
    color: "#264de4",
    gradient: "linear-gradient(135deg, #264de4 0%, #3f51b5 100%)"
  },
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    desc: "Low-level programming for performance-critical systems.",
    color: "#00599C",
    gradient: "linear-gradient(135deg, #00599C 0%, #1976d2 100%)"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Dynamic, interactive web experiences and full-stack apps.",
    color: "#f7df1e",
    gradient: "linear-gradient(135deg, #f7df1e 0%, #ffd700 100%)"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Modern UI development with component-based architecture.",
    color: "#61dafb",
    gradient: "linear-gradient(135deg, #61dafb 0%, #00d4ff 100%)"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [activeEducation, setActiveEducation] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-container">
          <div className="loader-circle">
            <img src="/images/profile-photo.jpg" alt="Loading" className="loader-img" />
          </div>
          <div className="loader-text">
            <span className="loading-text">Loading Portfolio</span>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Mohammed Arqam Ahmed</span>
            </h1>
            <p className="hero-subtitle">
              <span className="typing-text">Turning ideas into reality with creativity & innovation.
</span>
            </p>
            <div className="hero-description">
              <p>Creative Mind • AI/ML Enthusiast • Full-Stack Innovator
</p>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="cta-button primary">
                <span>View My Work</span>
                <svg className="arrow-icon" viewBox="0 0 24 24">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </a>
              <a href="#contact" className="cta-button secondary">
                <span>Get In Touch</span>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/mohammedarqamahmed" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-container">
              <img src="/images/profile-photo.jpg" alt="Arqam Ahmed" className="profile-image" />
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-number">01</span>
              About Me
            </h2>
            <div className="title-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <h3>Passionate Developer & AI Enthusiast</h3>
                <p>
                  Mohammed Arqam is a passionate and creative individual, driven by curiosity and innovation. He thrives on exploring new ideas and finding unique ways to bring them to life. With an adaptable mindset and a problem-solving attitude, he embraces challenges as opportunities to grow and make a lasting impact. Always eager to learn and improve, he blends creativity with determination to achieve meaningful results.

                </p>
              </div>
              <div className="about-details">
                <div className="detail-item">
                  <div className="detail-icon">🎯</div>
                  <div className="detail-content">
                    <h4>Problem Solver</h4>
                    <p>Transforming complex challenges into elegant, scalable solutions</p>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">🚀</div>
                  <div className="detail-content">
                    <h4>Fast Learner</h4>
                    <p>Quickly adapting to new technologies and frameworks</p>
                  </div>
                </div>
                <div className="detail-item">
                  <div className="detail-icon">💡</div>
                  <div className="detail-content">
                    <h4>Innovation Driven</h4>
                    <p>Always exploring cutting-edge technologies and methodologies</p>
                  </div>
                </div>
              </div>
              <div className="about-actions">
                <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
                  <span>Download CV</span>
                  <svg viewBox="0 0 24 24" className="download-icon">
                    <path d="M12 16l-5-5h3V4h4v7h3l-5 5z"/>
                    <path d="M20 18H4v2h16v-2z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-visual">
              <div className="image-container">
                <img src="/images/cover.jpg" alt="About Me" className="about-image" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-number">02</span>
              Education
            </h2>
            <div className="title-line"></div>
          </div>
          <div className="education-grid">
            <div className="edu-card" onClick={() => setActiveEducation(activeEducation === 1 ? null : 1)}>
              <div className="edu-card-header">
                <div className="edu-logo">
                  <img src="/images/st-martins-logo.jpeg" alt="BTech" />
                </div>
                <div className="edu-badge">Current</div>
              </div>
              <div className="edu-content">
                <h3>B.Tech - CSE (AI & ML)</h3>
                <p className="edu-period">2022 - 2026</p>
                <p className="edu-institution">St. Martin's Engineering College</p>
                {activeEducation === 1 && (
                  <div className="edu-details">
                    <div className="grade-display">
                      <span className="grade-label">CGPA</span>
                      <span className="grade-value">7.6</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="edu-card" onClick={() => setActiveEducation(activeEducation === 2 ? null : 2)}>
              <div className="edu-card-header">
                <div className="edu-logo">
                  <img src="/images/chitanya-logo.jpeg" alt="Intermediate" />
                </div>
              </div>
              <div className="edu-content">
                <h3>Intermediate - MPC</h3>
                <p className="edu-period">2020 - 2022</p>
                <p className="edu-institution">Kakatiya Junior College</p>
                {activeEducation === 2 && (
                  <div className="edu-details">
                    <div className="grade-display">
                      <span className="grade-label">Percentage</span>
                      <span className="grade-value">77%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="edu-card" onClick={() => setActiveEducation(activeEducation === 3 ? null : 3)}>
              <div className="edu-card-header">
                <div className="edu-logo">
                  <img src="/images/st-francis-logo.jpeg" alt="School" />
                </div>
              </div>
              <div className="edu-content">
                <h3>Schooling - SSC</h3>
                <p className="edu-period">2020</p>
                <p className="edu-institution">Nirmala Hrudaya High School</p>
                {activeEducation === 3 && (
                  <div className="edu-details">
                    <div className="grade-display">
                      <span className="grade-label">Grade</span>
                      <span className="grade-value">9.80</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-number">03</span>
              Skills & Technologies
            </h2>
            <div className="title-line"></div>
          </div>
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className={`skill-card${activeSkill === idx ? " active" : ""}`}
                  style={{ "--skill-gradient": skill.gradient }}
                  onMouseEnter={() => setActiveSkill(idx)}
                  onMouseLeave={() => setActiveSkill(null)}
                  tabIndex={0}
                >
                  <div className="skill-icon-container">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-description">
                      <p>{skill.desc}</p>
                    </div>
                  </div>
                  <div className="skill-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-number">04</span>
              Featured Projects
            </h2>
            <div className="title-line"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card" onClick={() => setActiveProject(activeProject === 1 ? null : 1)}>
              <div className="project-image">
                <img src="/images/college-companion.jpeg" alt="College Companion" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://college-companion-by-imad.netlify.app/" target="_blank" className="project-link live">
                      <span>Live Demo</span>
                      <svg viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/mohammedarqamahmed/college-companion" target="_blank" className="project-link github">
                      <span>GitHub</span>
                      <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>College Companion</h3>
                <p>Smart academic companion with interactive dashboard and integrated student resource management.</p>
                {activeProject === 1 && (
                  <div className="project-features">
                    <div className="feature-item">📌 Interactive Dashboard</div>
                    <div className="feature-item">📌 Resource Management</div>
                    <div className="feature-item">📌 Responsive Design</div>
                  </div>
                )}
              </div>
            </div>

            <div className="project-card" onClick={() => setActiveProject(activeProject === 2 ? null : 2)}>
              <div className="project-image">
                <img src="/images/electronic-signature.png" alt="Electronic Signature" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://electronic-signature.netlify.app/" target="_blank" className="project-link live">
                      <span>Live Demo</span>
                      <svg viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/mohammed-imad-umar/Electronic_Signature-" target="_blank" className="project-link github">
                      <span>GitHub</span>
                      <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Electronic Signature</h3>
                <p>Digital signing system with secure authentication and smooth canvas-based signature capture.</p>
                {activeProject === 2 && (
                  <div className="project-features">
                    <div className="feature-item">📌 Secure Authentication</div>
                    <div className="feature-item">📌 Canvas Signature</div>
                    <div className="feature-item">📌 Easy Integration</div>
                  </div>
                )}
              </div>
            </div>

            <div className="project-card" onClick={() => setActiveProject(activeProject === 3 ? null : 3)}>
              <div className="project-image">
                <img src="/images/smart-parking-project.png" alt="Smart Parking" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/mohammed-imad-umar/smart-parking-system" target="_blank" className="project-link github">
                      <span>GitHub</span>
                      <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Smart Parking System</h3>
                <p>IoT-based real-time parking management with mobile app and cloud integration.</p>
                {activeProject === 3 && (
                  <div className="project-features">
                    <div className="feature-item">📌 IoT Integration</div>
                    <div className="feature-item">📌 Real-time Management</div>
                    <div className="feature-item">📌 Cloud Architecture</div>
                  </div>
                )}
              </div>
            </div>

            <div className="project-card" onClick={() => setActiveProject(activeProject === 4 ? null : 4)}>
              <div className="project-image">
                <img src="/images/twitter-bots-project.png" alt="Twitter Bots" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/mohammed-imad-umar/detecting-twitter-bots" target="_blank" className="project-link github">
                      <span>GitHub</span>
                      <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Detecting Twitter Bots</h3>
                <p>ML model to detect bot accounts on Twitter with high accuracy and real-time prediction.</p>
                {activeProject === 4 && (
                  <div className="project-features">
                    <div className="feature-item">📌 ML Model</div>
                    <div className="feature-item">📌 High Accuracy</div>
                    <div className="feature-item">📌 Real-time Prediction</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-number">05</span>
              Get In Touch
            </h2>
            <div className="title-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:arqam911204@gmail.com">arqam911204@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:+917013655107">+91 7013655107</a>
                </div>
              </div>
            </div>
            <div className="contact-message">
              <p>Ready to collaborate on exciting projects? Let's build something amazing together!</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Mohammed Arqam Ahmed | Crafted with ❤️ and ☕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
