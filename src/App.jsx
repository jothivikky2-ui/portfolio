import "./index.css";
import profile from "./assets/Profile.jpg";

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Jothi Basu</h1>
          <h2>Python Full Stack Developer</h2>

          <p>
            B.Tech Information Technology student passionate about
            Full Stack Development, Artificial Intelligence and
            modern web technologies.
          </p>

          <p>
            Skilled in React.js, Vue.js, Python, Django,
            MySQL and MongoDB.
          </p>

          <div className="btn-group">
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <button className="btn">Download Resume</button>
            </a>

            <a
              href="https://github.com/jothivikky2-ui"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">GitHub</button>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">LinkedIn</button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Jothi Basu" className="profile-pic" />
        </div>
      </section>

      {/* Career Objective */}
      <section className="objective">
        <h2>Career Objective</h2>

        <p>
          Aspiring Full Stack Developer seeking an entry-level opportunity
          to apply my skills in React.js, Python and modern web technologies
          while contributing to innovative software solutions.
        </p>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          I am Jothi Basu, a B.Tech Information Technology student from
          Sri Krishna Engineering College. I have completed Python Full
          Stack Development training and built projects using React.js,
          Vue.js, Python, Django and Machine Learning technologies.
          My goal is to start my career as a Software Developer and
          contribute to innovative products while continuously learning
          new technologies.
        </p>
      </section>

      {/* Education */}
      <section className="education">
        <h2>Education</h2>

        <div className="card">
          <h3>B.Tech Information Technology</h3>
          <p>Sri Krishna Engineering College</p>
          <p>2022 - 2026</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Vue.js</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">Django</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </section>

      {/* Training */}
      <section className="training">
        <h2>Training Experience</h2>

        <div className="card">
          <h3>Python Full Stack Development</h3>
          <p>Besant Technologies, Chennai</p>

          <p>
            Learned Frontend Development, React.js, Python,
            Django, SQL and GitHub version control.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>AI-Based Placement Prediction System</h3>

          <p>
            Developed an intelligent placement prediction platform using
            Machine Learning algorithms such as Random Forest and NLP
            techniques. The system analyzes academic performance,
            technical skills, certifications and aptitude scores to
            predict placement opportunities.
          </p>

          <p>
            <strong>Technologies:</strong> Python, Django,
            Machine Learning, NLP, Random Forest, MySQL
          </p>
        </div>

        <div className="project-card">
          <h3>Attendance Management System</h3>

          <p>
            Built using Vue.js with attendance tracking,
            dashboard, reporting and student management features.
          </p>

          <p>
            <strong>Technologies:</strong> Vue.js, JavaScript, CSS
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        <h2>Certifications</h2>

        <div className="card">
          <h3>Python Full Stack Development</h3>
          <p>Besant Technologies, Chennai</p>
        </div>

        <div className="card">
          <h3>React.js Development Training</h3>
          <p>Besant Technologies, Chennai</p>
        </div>

        <div className="card">
          <h3>SQL & Database Management</h3>
          <p>Besant Technologies, Chennai</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>

        <div className="card">
          <h3>📧 Email</h3>
          <p>jothivikky2@gmail.com</p>

          <h3>📱 Phone</h3>
          <p>9159608154</p>

          <div className="btn-group">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">LinkedIn</button>
            </a>

            <a
              href="https://github.com/jothivikky2-ui"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">GitHub</button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;