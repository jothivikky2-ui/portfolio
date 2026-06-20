import "./index.css";

function App() {
  return (
    <div className="hero">
      <h1>Jothi Basu</h1>
      <h2>Python Full Stack Developer</h2>

      <p>
        B.Tech Information Technology student passionate about
        React.js, Vue.js, Python, MySQL and MongoDB.
      </p>

      <button className="btn">View Projects</button>
      <a href="/resume.pdf" target="_blank">
  <button className="btn">Download Resume</button>
</a>

      <section style={{ marginTop: "60px" }}>
        <h2>About Me</h2>
        <p>
          I am a B.Tech IT student from Sri Krishna Engineering College.
          I have completed Python Full Stack Development training and
          enjoy building modern web applications.
        </p>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Vue.js</li>
          <li>Python</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Aiml</li>
        </ul>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Projects</h2>

        <h3>AI-Based Placement Prediction System</h3>
        <p>
          Developed a machine learning-based system using Python,
          Django, NLP and Random Forest to predict student placement outcomes.
        </p>

        <h3>Attendance Management System</h3>
        <p>
          Built using Vue.js with attendance tracking, reports and dashboard.
        </p>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>Contact</h2>
        <p>Email: jothivikky2@gmail.com</p>
        <p>Phone: 9159608154</p>
      </section>
    </div>
  );
}

export default App;