import React, { useEffect, useState } from 'react';
import { profile, experience, projects, skills } from './data';

const NAV = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['work', 'Work'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

const FORM_ENDPOINT = process.env.REACT_APP_FORM_ENDPOINT; // e.g. https://formspree.io/f/xxxx

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))];
}

function Contact() {
  const [status, setStatus] = useState('idle');

  const submit = async e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    if (!FORM_ENDPOINT) {
      const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')}`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry')}&body=${body}`;
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Message<textarea name="message" rows="5" required /></label>
      <button className="btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="form-note" role="status">
        {status === 'sent' && 'Thanks, your message is on its way.'}
        {status === 'error' && `Something went wrong. Please email ${profile.email} directly.`}
      </p>
    </form>
  );
}

export default function App() {
  const [theme, toggle] = useTheme();
  const base = process.env.PUBLIC_URL;

  return (
    <>
      <header className="bar">
        <a className="mark" href="#top">AR</a>
        <nav aria-label="Primary">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <button className="toggle" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}<span>.</span></h1>
          <p className="role">{profile.role}</p>
          <p className="lede">{profile.intro}</p>
          <div className="actions">
            <a className="btn" href="#work">See my work</a>
            <a className="btn ghost" href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="about" className="wrap split">
          <h2>About</h2>
          <div>
            {profile.about.map((p, i) => <p key={i}>{p}</p>)}
            <dl className="facts">
              {profile.facts.map(([n, l]) => (
                <div key={l}><dt>{n}</dt><dd>{l}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section id="experience" className="wrap split">
          <h2>Experience</h2>
          <ol className="list">
            {experience.map(e => (
              <li key={e.org + e.period}>
                <div className="meta">{e.period}</div>
                <div>
                  <h3>{e.role}, {e.org}</h3>
                  <p className="sub">{e.place}</p>
                  <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="wrap">
          <h2>Selected work</h2>
          <div className="grid">
            {projects.map(p => (
              <article key={p.title} className="card">
                <div className="card-top"><span>{p.kind}</span><span>{p.year}</span></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <p className="stack">{p.stack.join(' · ')}</p>
                <div className="card-links">
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Visit ↗</a>}
                  {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer">Code ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap split">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map(g => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map(i => (
                    <li key={i.name}>
                      <img src={`${base}/images/skills/${i.image}`} alt="" width="20" height="20" loading="lazy" />
                      {i.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="wrap split">
          <h2>Contact</h2>
          <div>
            <p className="lede">Have a project, a course or a role in mind? I'd like to hear about it.</p>
            <p className="reach">
              <a href={`mailto:${profile.email}`}>{profile.email}</a><br />
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </p>
            <Contact />
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.links.twitter} target="_blank" rel="noopener noreferrer">X</a>
        </span>
      </footer>
    </>
  );
}
