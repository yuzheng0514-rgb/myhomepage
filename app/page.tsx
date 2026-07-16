import type { Metadata } from "next";
import { ThemeToggle } from "./theme-toggle";

export const metadata: Metadata = {
  title: "董雨铮 | Yuzheng Dong",
  description:
    "Academic homepage of Yuzheng Dong, a Ph.D. student at Renmin University of China, working on optimal transport, data subsampling, and time series.",
};

const researchTopics = [
  {
    title: "Optimal transport and statistical learning",
    zh: "最优传输与统计学习",
    description:
      "Geometry-aware methods for comparing distributions, statistical inference, and data analysis.",
    descriptionZh: "研究概率分布之间的几何结构，以及最优传输在统计推断和数据分析中的方法。",
  },
  {
    title: "Data subsampling for scalable inference",
    zh: "面向可扩展推断的子数据抽样",
    description:
      "Representative subset selection that reduces computational cost while retaining statistical information.",
    descriptionZh: "研究如何选择具有代表性的子样本，在降低计算成本的同时保留关键统计信息。",
  },
  {
    title: "Time-series modeling and inference",
    zh: "时间序列建模与推断",
    description:
      "Reliable statistical methods for temporally dependent, dynamically changing, and distribution-shifting data.",
    descriptionZh: "关注时间依赖、动态变化和分布漂移数据的可靠建模与统计推断。",
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
            <h1>董雨铮 <span>Yuzheng Dong</span></h1>
            <p>
              Ph.D. Student, Institute of Statistics and Big Data,
              <br className="mobile-break" /> Renmin University of China
            </p>
            <p className="post-header-zh">中国人民大学统计与大数据研究院 · 博士研究生（二年级）</p>
          </header>

          <aside className="profile">
            <div className="profile-photo" role="img" aria-label="Profile photo placeholder">
              <span>DYZ</span>
              <small>photo coming soon</small>
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
              Previously, I received my B.S. degree from <a href="https://www.bnu.edu.cn/" target="_blank" rel="noreferrer">Beijing Normal University</a> in 2025.
            </p>
            <p>
              My research lies at the intersection of modern statistical computation and structured
              data. I am currently interested in <code>optimal transport</code>, <code>data subsampling</code>,
              and <code>time series</code>. I aim to develop statistically principled and computationally
              efficient methods for large-scale, distribution-shifting, and temporally dependent data.
            </p>
            <p className="zh-copy">
              欢迎来到我的个人主页！我是中国人民大学统计与大数据研究院博士生，目前师从
              <a href="https://cheng-bdal.github.io/" target="_blank" rel="noreferrer">孟程老师</a>。
              此前，我于 2025 年毕业于北京师范大学，获理学学士学位。我的研究兴趣位于现代统计计算与结构化数据的交叉地带，
              主要关注最优传输、子数据抽样与时间序列，希望发展兼具理论保证和计算效率的统计方法。
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
            <span>我的研究围绕以下三个相互关联的方向展开。</span>
          </p>
          <div className="research-list">
            {researchTopics.map((topic, index) => (
              <article className="research-row" key={topic.title}>
                <div className="topic-index">0{index + 1}</div>
                <div className="topic-body">
                  <h3>{topic.title}</h3>
                  <p className="topic-zh">{topic.zh}</p>
                  <p>{topic.description}</p>
                  <p className="topic-description-zh">{topic.descriptionZh}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="publication-note">
            <span className="status-badge">In progress</span>
            <div>
              <strong>Publications and preprints</strong>
              <p>Research outputs will be listed here as they become publicly available.</p>
              <p className="topic-description-zh">论文与预印本将在公开后更新于此。</p>
            </div>
          </div>
        </section>

        <section id="news" className="content-section">
          <h2 className="section-title">news</h2>
          <div className="news-table">
            <div className="news-row">
              <time>Jul, 2026</time>
              <p>Personal academic homepage launched. <span>个人学术主页上线。</span></p>
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
