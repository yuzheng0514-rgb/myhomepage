import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "董雨铮 | Yuzheng Dong",
  description:
    "董雨铮，中国人民大学统计与大数据研究院博士生。研究方向包括最优传输、子数据抽样与时间序列。",
};

const researchAreas = [
  {
    number: "01",
    title: "最优传输",
    english: "Optimal Transport",
    description:
      "关注概率分布之间的几何结构与匹配问题，探索最优传输在统计推断、分布比较和数据分析中的理论与计算方法。",
    detail:
      "Studying the geometry of probability distributions and efficient methods for statistical inference, distribution comparison, and data analysis.",
  },
  {
    number: "02",
    title: "子数据抽样",
    english: "Data Subsampling",
    description:
      "面向大规模数据，研究如何选择具有代表性的子样本，在降低计算成本的同时尽可能保留统计信息与推断质量。",
    detail:
      "Developing representative subset-selection methods that reduce computational cost while preserving statistical information and inferential quality.",
  },
  {
    number: "03",
    title: "时间序列",
    english: "Time Series",
    description:
      "研究具有时间依赖性的数据结构，关注动态变化、分布漂移及复杂时间过程中的统计建模与可靠推断。",
    detail:
      "Investigating temporally dependent data, dynamic change, distribution shift, and reliable inference for complex time-evolving processes.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#about" aria-label="返回首页">
          <span className="wordmark-mark">董</span>
          <span>
            董雨铮
            <small>Yuzheng Dong</small>
          </span>
        </a>
        <nav aria-label="主导航">
          <a href="#about">关于 / About</a>
          <a href="#research">研究 / Research</a>
          <a href="#education">经历 / Experience</a>
          <a href="#contact">联系 / Contact</a>
        </nav>
      </header>

      <main className="page-grid">
        <aside className="profile-card" aria-label="个人信息">
          <div className="portrait-placeholder" role="img" aria-label="个人照片待添加">
            <span>DYZ</span>
            <small>PHOTO COMING SOON</small>
          </div>

          <div className="identity">
            <h1>董雨铮</h1>
            <p className="name-en">Yuzheng Dong</p>
            <p className="role">博士研究生（二年级）</p>
            <p className="role-en">Ph.D. Student · Year 2</p>
          </div>

          <div className="affiliation">
            <a href="https://isbd.ruc.edu.cn/" target="_blank" rel="noreferrer">
              中国人民大学<br />统计与大数据研究院
            </a>
            <span>Institute of Statistics and Big Data<br />Renmin University of China</span>
          </div>

          <div className="profile-links">
            <a href="mailto:dongyz0514@ruc.edu.cn">
              <span className="link-icon">@</span>
              <span>Email</span>
            </a>
            <a href="#research">
              <span className="link-icon">↘</span>
              <span>Research interests</span>
            </a>
          </div>

          <p className="location">Beijing, China · 北京</p>
        </aside>

        <div className="content-column">
          <section id="about" className="hero section-block">
            <p className="eyebrow">ABOUT · 关于我</p>
            <h2>
              Exploring structure in
              <br />
              <em>complex and evolving data.</em>
            </h2>
            <div className="intro-copy">
              <p>
                我是中国人民大学统计与大数据研究院博士生。我的研究兴趣位于现代统计计算与数据结构的交叉地带，主要关注
                <strong>最优传输、子数据抽样和时间序列</strong>。
              </p>
              <p>
                我希望发展兼具理论保证与计算效率的统计方法，更好地理解大规模、分布变化及具有时间依赖性的数据，并期待与相关领域的研究者交流合作。
              </p>
            </div>
            <div className="intro-en">
              <p>
                I am a second-year Ph.D. student at the Institute of Statistics and Big Data,
                Renmin University of China. My research lies at the intersection of modern
                statistical computation and structured data, with a focus on optimal transport,
                data subsampling, and time series.
              </p>
              <p>
                I aim to develop statistically principled and computationally efficient methods
                for large-scale, distribution-shifting, and temporally dependent data. I welcome
                conversations and potential collaborations in related areas.
              </p>
            </div>
            <a className="contact-button" href="mailto:dongyz0514@ruc.edu.cn">
              联系我 · Get in touch <span>↗</span>
            </a>
          </section>

          <section id="research" className="section-block research-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">RESEARCH · 研究方向</p>
                <h2>Research interests</h2>
              </div>
              <p>
                从分布的几何，到海量数据的代表性压缩，
                <br />再到随时间演化的统计结构。
              </p>
            </div>

            <div className="research-list">
              {researchAreas.map((area) => (
                <article className="research-item" key={area.number}>
                  <span className="research-number">{area.number}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p className="research-en-title">{area.english}</p>
                  </div>
                  <div className="research-description">
                    <p>{area.description}</p>
                    <p lang="en">{area.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="section-block experience-section">
            <p className="eyebrow">EXPERIENCE · 学术经历</p>
            <h2>Education</h2>
            <div className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-date">PRESENT</div>
              <div>
                <h3>博士研究生 · Ph.D. Student</h3>
                <p>中国人民大学统计与大数据研究院</p>
                <p lang="en">Institute of Statistics and Big Data, Renmin University of China</p>
              </div>
            </div>
          </section>

          <section id="contact" className="section-block contact-section">
            <p className="eyebrow">CONTACT · 联系</p>
            <h2>Let&apos;s talk about research.</h2>
            <p>
              如果你的研究也涉及最优传输、可扩展统计计算或时间序列，欢迎来信交流。
            </p>
            <p lang="en">
              If your work touches optimal transport, scalable statistical computation, or time
              series, I would be glad to hear from you.
            </p>
            <a className="email-link" href="mailto:dongyz0514@ruc.edu.cn">
              dongyz0514@ruc.edu.cn <span>↗</span>
            </a>
          </section>
        </div>
      </main>

      <footer>
        <span>© 2026 董雨铮 · Yuzheng Dong</span>
        <span>Academic homepage · Beijing</span>
      </footer>
    </div>
  );
}
