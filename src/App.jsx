import "./App.css";
import profilePic from "./profile.webp";

export default function App() {
  return (
    <div className="container">
      {/* Hero */}
      <header className="hero">
        <img src={profilePic} alt="Niel Arvin" className="profile-pic" />
        <h1 className="fade-in">Niel Arvin Reyes</h1>
        <p className="subtitle slide-up">Showcasing my journey in CS and development</p>
      </header>

      {/* Card Layout */}
      <div className="cards">
        <div className="card fade-in">
          <h2>About Me</h2>
          <p><strong>Course:</strong> Bachelor of Science in Information Technology</p>
          <p>Hello! I’m still learning React and this is my simple portfolio, now with a formal touch.</p>
        </div>

        <div className="card slide-up">
          <h2>Projects</h2>
          <ul className="projects">
            <li>Personal Portfolio</li>
            <li>Mobile App Concept</li>
            <li>Small API Project</li>
          </ul>
        </div>

        <div className="card fade-in">
          <h2>Contact</h2>
          <p><strong>Phone:</strong> 0929939994</p>
          <p><strong>Email:</strong> nielarvin23@gmail.com</p>
        </div>
      </div>

      <footer className="footer slide-up">
        <p>© {new Date().getFullYear()} Niel Arvin | Built with React</p>
      </footer>
    </div>
  );
}
