import type { Metadata } from "next";
import { ThemeToggle } from "./theme-toggle";

export const metadata: Metadata = {
  title: "Yuzheng Dong",
  description:
    "Academic homepage of Yuzheng Dong, a Ph.D. student at Renmin University of China, working on optimal transport, data subsampling, and time series.",
};

const researchTopics = [
  {
    title: "Optimal transport and statistical learning",
    description:
      "Geometry-aware methods for comparing distributions, statistical inference, and data analysis.",
  },
  {
    title: "Data subsampling for scalable inference",
    description:
      "Representative subset selection that reduces computational cost while retaining statistical information.",
  },
  {
    title: "Time-series modeling and inference",
    description:
      "Reliable statistical methods for temporally dependent, dynamically changing, and distribution-shifting data.",
  },
];

export default function Home() {
  return (
    <div className="site-page">
      <header className="navbar">
        <nav className="nav-inner" aria-label="Main navigation">
          <a className="nav-name" href="#about">
            <span className="nav-name-accent">Yuzheng</span> Dong
          </a>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#research">research</a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="container">
        <section id="about" className="about-section">
          <header className="post-header">
            <h1>Yuzheng Dong</h1>
            <p>
              Ph.D. Student, Institute of Statistics and Big Data,
              <br className="mobile-break" /> Renmin University of China
            </p>
          </header>

          <aside className="profile">
            <div className="profile-photo">
              <img
                src="./profile.jpg"
                alt="Portrait of Yuzheng Dong"
                width="1280"
                height="1280"
              />
            </div>
            <div className="profile-info">
              Institute of Statistics and Big Data<br />
              Renmin University of China<br />
              Beijing, China
            </div>
          </aside>

          <div className="prose intro">
            <p>
              Welcome to my homepage! I am <code>Yuzheng Dong</code>, a second-year Ph.D. student
              at the <a href="https://isbd.ruc.edu.cn/" target="_blank" rel="noreferrer">Institute of Statistics and Big Data</a>,
              <code> Renmin University of China</code>, where I am fortunate to be advised by
              <a href="https://cheng-bdal.github.io/" target="_blank" rel="noreferrer"> Dr. Cheng Meng</a>.
              Previously, I received my B.S. degree from the <a href="https://www.bnu.edu.cn/" target="_blank" rel="noreferrer">School of Mathematical Sciences, Beijing Normal University</a>, in 2025.
            </p>
            <p>
              My research lies at the intersection of modern statistical computation and structured
              data. I am currently interested in <code>optimal transport</code>, <code>data subsampling</code>,
              and <code>time series</code>. I aim to develop statistically principled and computationally
              efficient methods for large-scale, distribution-shifting, and temporally dependent data.
            </p>
            <p>
              I am always happy to exchange ideas and explore potential collaborations in related areas.
            </p>

            <h2>Links</h2>
            <ul className="link-list">
              <li>Email: <a href="mailto:dongyz0514@ruc.edu.cn"><code>dongyz0514 at ruc dot edu dot cn</code></a></li>
              <li>Affiliation: <a href="https://isbd.ruc.edu.cn/" target="_blank" rel="noreferrer">Institute of Statistics and Big Data, RUC</a></li>
              <li>Location: Beijing, China</li>
            </ul>
          </div>
        </section>

        <section id="research" className="content-section">
          <h2 className="section-title">research</h2>
          <p className="section-intro">
            My current research agenda centers on three connected themes.
          </p>
          <div className="research-list">
            {researchTopics.map((topic, index) => (
              <article className="research-row" key={topic.title}>
                <div className="topic-index">0{index + 1}</div>
                <div className="topic-body">
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="publication-note">
            <span className="status-badge">In progress</span>
            <div>
              <strong>Publications and preprints</strong>
              <p>Research outputs will be listed here as they become publicly available.</p>
            </div>
          </div>
        </section>

        <section id="news" className="content-section">
          <h2 className="section-title">news</h2>
          <div className="news-table">
            <div className="news-row">
              <time>Jul, 2026</time>
              <p>Personal academic homepage launched.</p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container footer-inner">
          © 2026 Yuzheng Dong. Inspired by <a href="https://github.com/alshedivat/al-folio" target="_blank" rel="noreferrer">al-folio</a>.
          Hosted with <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a>.
        </div>
      </footer>
    </div>
  );
}
