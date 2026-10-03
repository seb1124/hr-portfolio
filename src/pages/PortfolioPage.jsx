import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUpRight, FiArrowDown, FiMail } from 'react-icons/fi';
import studyflash from '../assets/studyflash.png';
import lexa from '../assets/lexa.png';
import Navbar from '../components/Navbar';
import ChromeOrbit from '../components/ChromeOrbit';

const skills = [
  { number: '01', title: 'Languages', items: ['TypeScript', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'C', 'C#'] },
  { number: '02', title: 'Frameworks', items: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'LangGraph'] },
  { number: '03', title: 'Developer tools', items: ['GitHub', 'MongoDB', 'Anaconda', 'VS Code', 'Unity', 'Codex', 'Docker'] },
];

const experiences = [
  {
    id: 'bny',
    company: 'Bank of New York (BNY)',
    role: 'Software Engineer Intern',
    periods: [
      {
        id: 'bny-2026',
        dates: 'Jun 2026 — Aug 2026',
        duration: '3 months',
        location: 'Lake Mary, Florida, United States · On-site',
        description: 'Developed an agentic workflow orchestration platform, enabling developers to compose AI workflows with parallel/conditional branching, sub-flows, RAG, and tool-calling.',
      },
      {
        id: 'bny-2025',
        dates: 'Aug 2025 — Nov 2025',
        duration: '4 months',
        description: 'Developed an AI-driven infrastructure monitoring application that analyzes system metrics to detect anomalies and provide actionable operational insights.',
      },
    ],
  },
  {
    id: 'saab-2026',
    company: 'Saab, Inc.',
    role: 'Software Engineer Intern',
    dates: 'Jan 2026 — Apr 2026',
    duration: '4 months',
    location: 'Orlando, Florida, United States · On-site',
    description: 'Worked on a data analysis/visualization platform, designing and developing the user interface. Collaborated with a cross-functional engineering team to gather requirements, deliver new features, and participate in code reviews and documentation.',
  },
  {
    id: 'fsi-2025',
    company: 'The Florida Space Institute',
    role: 'Undergraduate Research Assistant',
    dates: 'May 2025 — Dec 2025',
    duration: '8 months',
    location: 'Orlando, Florida, United States · On-site',
    description: 'Conducted applied research developing real-time, GPU-accelerated signal-processing pipelines that significantly reduced processing times for high-throughput data analysis.',
  },
  {
    id: 'miami-beach-2025',
    company: 'City of Miami Beach',
    role: 'Software Engineer Intern',
    dates: 'Jun 2025 — Aug 2025',
    duration: '3 months',
    location: 'Miami Beach, Florida, United States · Remote',
    description: 'Developed and maintained new features for internal applications, enhancing functionality, reliability, and overall user experience.',
  },
  {
    id: 'ucf-ist-2024',
    company: 'Institute for Simulation & Training — UCF',
    role: 'R&D Software Engineer Intern',
    dates: 'Dec 2024 — Jan 2025',
    duration: '2 months',
    location: 'Orlando, Florida, United States · Hybrid',
    description: 'Developed a VR training simulation in collaboration with the U.S. Department of Energy (DOE) and the Oak Ridge Enhanced Technology and Training Center (ORETTC) to support immersive, cost-effective, safety-focused training initiatives.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <section id="home" className="hero page-width" aria-labelledby="hero-title">
          {/* <div className="hero-topline micro"><span><span className="status-dot" /> PERSONAL PORTFOLIO</span><span>SOFTWARE / EXPERIMENTS / POSSIBILITIES</span></div> */}
          <div className="hero-body">
            <div className="hero-copy">
              {/* <p className="eyebrow">HELLO WORLD. I’M</p> */}
              <h1 id="hero-title" className="chrome-text">HECTOR<br /><span>RAMOS</span><span className="name-period"></span></h1>
              <div className="hero-description"><span className="crosshair" aria-hidden="true">✳</span><p>Full-stack software engineer.<br /><span>Turning complex problems into things that work.</span></p></div>
              <a className="chrome-button" href="#projects">EXPLORE MY WORK <FiArrowUpRight /></a>
            </div>
            <div className="hero-art"><ChromeOrbit /><span className="art-label micro"></span></div>
          </div>
          <div className="hero-bottom micro"><span>BASED IN CURIOSITY.<br />BUILT WITH INTENTION.</span><a href="#about">SCROLL TO DISCOVER <FiArrowDown /></a><span className="hero-index">[ 001 — 005 ]</span></div>
        </section>
        <div className="discipline-strip">
          <ul className="discipline-list page-width" aria-label="Areas of experience">
            <li>FULL-STACK DEVELOPMENT</li>
            <li>AI SYSTEMS</li>
            <li>COMPUTER VISION</li>
            <li>VIRTUAL REALITY</li>
          </ul>
        </div>
        <section id="about" className="section page-width" aria-labelledby="about-title">
          <div className="section-label micro"><span className="accent">01 /</span> ABOUT ME</div>
          <div className="about-grid"><h2 id="about-title">Curiosity.<br />Code.<br /><span className="chrome-text">A little bit of chaos.</span></h2><div className="about-copy"><p>I’m Hector Ramos, a computer science student at the University of Central Florida with a passion for software engineering.</p><p>I love finding creative solutions to complex problems. From full-stack web applications to immersive VR experiences, I’m always exploring what I can build next.</p><div className="identity-tag micro"><span className="status-dot" /> COMPUTER SCIENCE @ UCF <FiArrowUpRight /></div></div></div>
        </section>
        <section id="skills" className="section page-width" aria-labelledby="skills-title">
          <div className="section-heading"><div><div className="section-label micro"><span className="accent">02 /</span> MY TOOLKIT</div><h2 id="skills-title">Tools of the trade<span className="accent">.</span></h2></div><span className="micro muted">ALWAYS ADDING TO THE STACK ↗</span></div>
          <div className="skills-grid">{skills.map(group => <article className="skill-panel" key={group.number}><div className="panel-top micro"><span>STACK_{group.number}</span><span aria-hidden="true">＋</span></div><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </section>
        <section id="experience" className="section page-width" aria-labelledby="experience-title">
          <div className="section-label micro"><span className="accent">03 /</span> IN THE FIELD</div>
          <div className="experience-layout">
            <div className="experience-intro">
              <h2 id="experience-title">Real-world<br />experience<span className="accent">.</span></h2>
              <span className="experience-star chrome-text" aria-hidden="true">✳</span>
            </div>
            <ol className="experience-list">
              {experiences.map((experience, index) => (
                <li key={experience.id}>
                  <article className="experience-detail" aria-labelledby={experience.id}>
                    {!experience.periods && (
                      <div className="experience-meta micro">
                        <span className="accent">{experience.dates}</span>
                        <span>{experience.duration}</span>
                      </div>
                    )}
                    <h3 id={experience.id}>{experience.company}</h3>
                    <p className="role">{experience.role}</p>
                    {experience.periods ? (
                      <ol className="experience-periods">
                        {experience.periods.map(period => (
                          <li key={period.id}>
                            <div className="experience-meta micro">
                              <h4 className="accent">{period.dates}</h4>
                              <span>{period.duration}</span>
                            </div>
                            {period.location && <p className="experience-location">{period.location}</p>}
                            <p>{period.description}</p>
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <>
                        {experience.location && <p className="experience-location">{experience.location}</p>}
                        <p>{experience.description}</p>
                      </>
                    )}
                    <span className="experience-number micro" aria-hidden="true">EXP_0{index + 1}</span>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="projects" className="section page-width" aria-labelledby="projects-title">
          <div className="section-heading"><div><div className="section-label micro"><span className="accent">04 /</span> FROM IDEA TO INTERFACE</div><h2 id="projects-title">Selected work<span className="accent">.</span></h2></div><a className="text-link micro" href="https://github.com/seb1124" target="_blank" rel="noopener noreferrer">MORE ON GITHUB <FiArrowUpRight /></a></div>
          <a className="project-card" href="https://github.com/seb1124/studyFlash" target="_blank" rel="noopener noreferrer"><div className="project-visual"><div className="project-window"><div className="window-bar micro"><span>● ● ●</span><span>STUDYFLASH.APP</span><FiArrowUpRight /></div><img src={studyflash} alt="StudyFlash application preview" loading="lazy" /></div><span className="micro project-visual-label">LESS FRICTION. MORE LEARNING.</span></div><div className="project-copy"><div className="micro muted">PROJECT_001 <span>KNIGHTHACKS VII</span></div><h3>StudyFlash <FiArrowUpRight /></h3><p>A smarter way to study. An AI-powered web application that transforms uploaded study materials into flashcards, created for the KnightHacks VII hackathon.</p><div className="tags"><span>HTML / CSS</span><span>JavaScript</span><span>PHP</span><span>OpenAI API</span></div></div></a>
          <a id="lexa" className="project-card lexa-project" href="https://github.com/seb1124/Lexa" target="_blank" rel="noopener noreferrer" aria-labelledby="lexa-title">
            <div className="project-visual">
              <div className="project-window">
                <div className="window-bar micro"><span aria-hidden="true">● ● ●</span><span>LEXA / ASL TRAINER</span><span aria-hidden="true">✳</span></div>
                <img src={lexa} alt="Lexa ASL Alphabet Trainer with a webcam practice area, letter A prompt, alphabet progress, streak counter, and session summary" loading="lazy" width="1409" height="965" />
              </div>
              <span className="micro project-visual-label">LEARN A LETTER. MAKE A CONNECTION.</span>
            </div>
            <div className="project-copy">
              <div className="micro muted">PROJECT_002 <span>INTERACTIVE LEARNING</span></div>
              <h3 id="lexa-title">Lexa <FiArrowUpRight /></h3>
              <p>Learn the ASL alphabet, one sign at a time. Lexa uses webcam hand tracking and a custom KNN classifier to recognize hand poses and give instant feedback as you practice.</p>
              <p>Automatic letter progression, streaks, and a session summary help learners track progress and identify their most challenging letters.</p>
              <div className="tags"><span>React / Vite</span><span>Tailwind CSS</span><span>MediaPipe Hands</span><span>JavaScript / KNN</span><span>Node.js / Express</span></div>
            </div>
          </a>
        </section>
        <section id="contact" className="contact-section page-width" aria-labelledby="contact-title"><div className="section-label micro"><span className="accent">05 /</span> CONTACT</div><div className="contact-heading"><h2 id="contact-title">Let’s build<br /><span className="chrome-text">something.</span></h2><a className="contact-arrow" href="mailto:hector.ramos.cs@gmail.com" aria-label="Email Hector Ramos"><FiArrowUpRight /></a></div><div className="contact-bottom"><div className="social-links"><a href="https://github.com/seb1124" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub <FiArrowUpRight /></a><a href="https://www.linkedin.com/in/hector-ramos/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn <FiArrowUpRight /></a><a href="mailto:hector.ramos.cs@gmail.com"><FiMail /> Email <FiArrowUpRight /></a></div></div></section>
      </main>
      <footer className="page-width micro"><a href="#home" className="footer-logo">HR<span className="accent">®</span></a><span>© {new Date().getFullYear()} HECTOR RAMOS</span><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  );
}
