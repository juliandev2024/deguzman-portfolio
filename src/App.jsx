import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Hi, i'm Julian Jay!</h1>
      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>{" | "}
        <NavLink to="/projects">Projects</NavLink>{" | "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Julian Jay De Guzman. All rights reserved.</p>
    </footer>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function Home() {
  return (
    <section>
     <img src="/Picture.png" alt="Julian Jay" width="200" />
      <h2>BSIT Student | Aspiring Web Developer</h2>
      <p>
        Welcome to my personal portfolio! I'm a Bachelor of Science in
        Information Technology student passionate about technology, web
        development, and learning new skills. Here, you can explore my
        background, skills, and projects.
      </p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        As a third-year BSIT student at Gordon College, I am continuously
        developing my technical knowledge and problem-solving skills. I am
        eager to gain experience, explore new technologies, and grow as a
        future IT professional.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML Fundamentals</li>
        <li>Basic CSS</li>
        <li>JavaScript Basics</li>
        <li>AutoCAD</li>
        <li>Technical Drafting</li>
      </ul>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: "CALCULATOR",
    description:
      "A functional calculator application designed to perform basic and advanced mathematical operations with a simple and user-friendly interface.",
    image: "/Calcu.png",
  },
  {
    id: 2,
    title: "TRIPWISE",
    description:
      "A smart travel planning website designed to help users explore tourist destinations in Zambales, create itineraries, and estimate travel expenses based on their budget.",
    image: "/TripWise.png",
  },
  {
    id: 3,
    title: "MOTOGUIDE",
    description:
      "A motorcycle parts information website that provides details, descriptions, and functions of different motorcycle components to help users understand their motorcycles better.",
    image: "/MotoGuide.png",
  },
];

function Projects() {
  return (
    <section>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <article key={project.id} className="project-card">
          <img src={project.image} alt={project.title} />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Email: 202412272@gordoncollege.edu.ph</p>
      <p>GitHub: github.com/juliandev2024</p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}