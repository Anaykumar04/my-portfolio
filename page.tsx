'use client'
import { useState } from 'react'
import './globals.css'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Header Section */}
      <header className="header">
        <a href="#" className="logo"><span>Anay</span></a>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#about">About</a>
          </li>    
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
        <i className="fa-solid fa-bars" id="menu-icon" onClick={toggleMenu}></i>
        <button className="visit-btn">Visit Github</button>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <img src="/images/po.jpg" alt="Profile" />
          <div className="info-box">
            <div className="text">
              <h3>Hi, I'm</h3>
              <h1>Anay</h1>
              <span>Frontend Developer</span>
            </div>
            <div className="btn-group">
              <div className="btn">Download CV</div>
              <div className="btn">Contact</div>
            </div>
            <div className="socials">
              <a href="#"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-info">
          <div className="grid">
            <div className="grid-card">
              <span>Frontend</span>
              <i className="fa-solid fa-code"></i>
              <h3>HTML, CSS, JS</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, debitis.</p>
            </div>
            <div className="grid-card">
              <i className="fa-brands fa-python"></i>
              <span>Python</span>
              <h3>Pandas, Numpy, Matplot, Seaborn</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, debitis.</p>
            </div>
            <div className="grid-card">
              <i className="fa-solid fa-photo-film"></i>
              <span>Graphic Design</span>
              <h3>Ps, Illustration, Premium pro</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, debitis.</p>
            </div>
            <div className="grid-card">
              <i className="fa-solid fa-c"></i>
              <span>Programming</span>
              <h3>C, C++</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, debitis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/w1.png" alt="Project 1" />
            <h3>Project</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="btn-group">
              <div className="btn">Live Demo</div>
              <div className="btn">Github</div>
            </div>
          </div>
          <div className="project-card">
            <img src="/images/w1.png" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="btn-group">
              <div className="btn">Live Demo</div>
              <div className="btn">Github</div>
            </div>
          </div>
          <div className="project-card">
            <img src="/images/w1.png" alt="Project 3" />
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="btn-group">
              <div className="btn">Live Demo</div>
              <div className="btn">Github</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="Contact">
        <div className="input-box">
          <h2 className="section-title">Contact me</h2>
          <div className="input">
            <input type="text" placeholder="example@gmail.com" />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="btn">Submit</div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">All Rights Reserved | Anay</p>
      </footer>
    </>
  )
}