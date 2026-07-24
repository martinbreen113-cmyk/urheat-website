import React from "react";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Gauge,
  Mail,
  Menu,
  Phone,
  Settings2,
  ThermometerSun,
  Wrench,
  X,
} from "lucide-react";

const helpOptions = [
  {
    icon: ThermometerSun,
    title: "Service my heat pump",
    text: "Specialist servicing, checks and performance review.",
    href: "#contact",
  },
  {
    icon: Wrench,
    title: "Fix a heating problem",
    text: "Practical fault finding for systems that are not working properly.",
    href: "#contact",
  },
  {
    icon: ClipboardCheck,
    title: "Get engineering advice",
    text: "Independent design review, consultancy and technical support.",
    href: "#contact",
  },
  {
    icon: Gauge,
    title: "Improve performance",
    text: "Optimise controls, comfort, efficiency and running costs.",
    href: "#contact",
  },
];

const services = [
  ["Heat pumps", "Servicing, diagnostics, commissioning and optimisation."],
  ["Heating systems", "Controls, emitters, pumps, hot water and system upgrades."],
  ["Consultancy", "Independent design review and practical engineering advice."],
  ["Building performance", "Measured performance, technical assessment and improvement plans."],
];

const credentials = [
  "Mechanical engineer",
  "Qualified plumber",
  "Heat pump specialist",
  "Public-sector experience",
  "Independent advice",
  "Performance focused",
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="ÚrHeat home">
      <img src="/urheat-mark.jpg" alt="" className="brand-mark" />
      <span className="brand-name">ÚrHeat</span>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#why">Why ÚrHeat</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-primary desktop-cta" href="#contact">
            Book a service
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#why" onClick={() => setMenuOpen(false)}>Why ÚrHeat</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="button button-primary" href="#contact" onClick={() => setMenuOpen(false)}>
              Book a service
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="intro section-pad">
          <div className="intro-copy">
            <p className="eyebrow">Heating engineering</p>
            <h1>Heating problems, solved properly.</h1>
            <p className="intro-text">
              Heat pump specialists combining practical experience with mechanical engineering.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">
                Book a service <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#services">
                View services
              </a>
            </div>
          </div>

          <div className="intro-panel" aria-label="ÚrHeat approach">
            <div className="flow-line" />
            <p>Design</p>
            <p>Diagnose</p>
            <p>Optimise</p>
            <p>Support</p>
          </div>
        </section>

        <section className="help-section section-pad" aria-labelledby="help-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Start here</p>
            <h2 id="help-title">How can we help?</h2>
          </div>

          <div className="help-grid">
            {helpOptions.map(({ icon: Icon, title, text, href }) => (
              <a className="help-card" href={href} key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowRight className="card-arrow" size={18} />
              </a>
            ))}
          </div>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our services</p>
              <h2>Practical expertise. Clear advice.</h2>
            </div>
            <p>
              From a single service visit to a full technical review, every job starts with understanding how the system should perform.
            </p>
          </div>

          <div className="service-list">
            {services.map(([title, text], index) => (
              <article className="service-row" key={title}>
                <span className="service-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowRight size={20} />
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="why-section section-pad">
          <div className="why-copy">
            <p className="eyebrow light">Why ÚrHeat</p>
            <h2>Engineering knowledge with hands-on experience.</h2>
            <p>
              One point of contact for practical heating expertise, independent advice and real-world system performance.
            </p>
          </div>

          <div className="credential-grid">
            {credentials.map((item) => (
              <div className="credential" key={item}>
                <span><Check size={17} /></span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="about-visual">
            <div className="about-symbol">
              <img src="/urheat-mark.jpg" alt="ÚrHeat symbol" />
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">About ÚrHeat</p>
            <h2>Built around better heating.</h2>
            <p>
              ÚrHeat was founded to bring engineering thinking and practical experience together. The aim is simple: make heating systems work reliably, efficiently and as intended.
            </p>
            <div className="about-points">
              <div><Settings2 size={20} /> System-first thinking</div>
              <div><Gauge size={20} /> Performance-led decisions</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Ready to get your heating system working properly?</h2>
          </div>

          <div className="contact-actions">
            <a href="tel:0851327413" className="contact-link">
              <Phone size={20} />
              <span>
                <small>Call</small>
                085 132 7413
              </span>
            </a>
            <a href="mailto:info@urheat.ie" className="contact-link">
              <Mail size={20} />
              <span>
                <small>Email</small>
                info@urheat.ie
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Brand />
        <p>Heating engineering, servicing and consultancy.</p>
        <span>© {new Date().getFullYear()} ÚrHeat</span>
      </footer>
    </div>
  );
}
