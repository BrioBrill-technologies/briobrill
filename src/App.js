import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <button className="get-started-btn">Get Started</button>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="strike-pink">BRIO BRILL</span>
            </h1>
            <p className="hero-subtitle">Design craftsmanship for the modern era.</p>
            <div className="hero-annotation">
              <span className="handwriting">Thoughtful ideas. Precise craft. Modern execution.</span>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="services">
          <h2 className="section-title">Take a PEEK <i>at</i> <br />OUR SERVICES</h2>

          <div className="folder-stack-container">
            <div className="folder-annotation">
              <span className="handwriting pink">Let's dive <br /> right into it</span>
              <img src="/Arrow.png" alt="arr" className="arrow-img" />
            </div>

            <div className="note-paper">
              <p>We design, develop, and <br />think.</p>
              <p>A small craft bureau, taking <br />time with ideas</p>
              <p>and care with how things are <br />made.</p>
              <p>We believe in quiet clarity <br />over noise,</p>
              <p>in showing up fully for the <br />work.</p>
            </div>

            <div className="folder-stack">
              <div className="folder folder-1" data-tab="DESIGN">
                <div className="folder-tab">DESIGN</div>
              </div>
              <div className="folder folder-2" data-tab="DEVELOPMENT">
                <div className="folder-tab">DEVELOPMENT</div>
              </div>
              <div className="folder folder-3" data-tab="CONSULTATIONS">
                <div className="folder-tab">CONSULTATIONS</div>
              </div>
              <div className="folder folder-4" data-tab="REBRANDING">
                <div className="folder-tab">REBRANDING</div>
              </div>
              <div className="folder folder-main">
                <div className="folder-tab">VISUAL CRAFT</div>
                <div className="folder-front">
                  <div className="protruding-card"></div>
                  <img src="/seal.png" alt="Seal" className="folder-seal-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-content">
            <span>BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill </span>
          </div>
        </div>

        {/* METHODOLOGY SECTION */}
        <section className="methodology">
          <div className="methodology-container">
            <div className="crossword-center">
              <img src="/Crossword.png" alt="Crossword" className="crossword-img" />
            </div>

            <div className="post-it post-blue execution">
              <div className="tape"></div>
              <h3>EXECUTION</h3>
              <p>Design, development, marketing, <br />and brand building come together <br />as one disciplined practice.</p>
            </div>

            <div className="post-it post-green perspective">
              <div className="tape"></div>
              <h3>PERSPECTIVE</h3>
              <p>Every decision is made <span className="highlight">holistically</span>, <br />with the full system in mind.</p>
            </div>

            <div className="post-it post-pink voice">
              <div className="tape"></div>
              <h3>VOICE</h3>
              <p>We build work that <span className="highlight">speaks the <br />language</span> of the individual or brand <br />we partner with.</p>
            </div>

            <div className="post-it post-purple integration">
              <div className="tape"></div>
              <h3>INTEGRATION</h3>
              <p><span className="highlight">We work end to end</span>, from design <br />through development, without silos <br />or hand-offs.</p>
            </div>

            <div className="post-it post-yellow positioning">
              <div className="tape"></div>
              <h3>POSITIONING</h3>
              <p>BrioBrill is not an agency or a <br />studio.</p>
              <p>We operate as a <span className="highlight">craft bureau.</span></p>
            </div>
          </div>
        </section>

        {/* MARQUEE REPEAT */}
        <div className="marquee">
          <div className="marquee-content">
            <span>BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill — BrioBrill </span>
          </div>
        </div>

        {/* PORTFOLIO SECTION */}
        <section className="portfolio">
          <div className="portfolio-grid">
            <div className="portfolio-card intro-card">
              <img src="/retro-mac.png" alt="Retro Mac" className="retro-img" />
              <p>We are, <br /><strong>Briobrilliants</strong></p>
            </div>

            <div className="portfolio-card title-card">
              <h2>PORTFOLIO</h2>
            </div>

            <div className="portfolio-card toaster-card">
              <img src="/toaster.png" alt="Toaster" className="toaster-img" />
            </div>

            <div className="stats-box green">
              <span className="stat-number">251</span>
              <span className="stat-label">PROJECTS</span>
            </div>

            <div className="stats-box purple">
              <span className="stat-number">156</span>
              <span className="stat-label">AWARDS</span>
            </div>

            <div className="stats-box pink client-card">
              <span className="stat-label">CLIENTS</span>
            </div>

            <div className="stats-box blue tech-card">
              <span className="stat-number">172</span>
              <span className="stat-label">RECOGNITIONS</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Briobrill Technologies. Crafted with care.</p>
      </footer>
    </div>
  );
}

export default App;
