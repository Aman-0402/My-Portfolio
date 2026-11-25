import React from 'react';
import { Link } from 'react-router-dom';
import { profile, projects } from '../data';
import { ProjectCard, More, Label } from '../components';
import { useScrollVar, Reveal } from '../fx';

const ROLL = ['Django', 'React', 'Python', 'Next.js', 'PostgreSQL', 'Teaching', 'LLM apps', 'Node.js'];
const STATEMENT = "I teach people to build software, and I build it too. Right now that means AI classes at Allenhouse and client products in Django and React.".split(' ');

function Globe() {
  return (
    <div className="globe" aria-hidden="true">
      <div className="globe-spin">
        {[0, 1, 2, 3, 4, 5].map(k => <i key={k} className="ring" style={{ '--k': k }} />)}
        {[-0.62, -0.31, 0, 0.31, 0.62].map(y => <i key={y} className="lat" style={{ '--y': y }} />)}
      </div>
    </div>
  );
}

export default function Home() {
  const roll = useScrollVar('sticky');
  const say = useScrollVar('pass');
  const stack = useScrollVar('pass');
  const feat = projects.slice(0, 4);

  const move = e => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--gx', `${(((e.clientY - r.top) / r.height - 0.5) * -18).toFixed(1)}deg`);
    e.currentTarget.style.setProperty('--gy', `${(((e.clientX - r.left) / r.width - 0.5) * 24).toFixed(1)}deg`);
  };

  return (
    <>
      <section className="hero wrap" onPointerMove={move}>
        <Globe />
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}<span>.</span></h1>
          <p className="role">{profile.role}</p>
          <p className="lede">{profile.intro}</p>
          <div className="actions">
            <Link className="btn" to="/projects">See my work</Link>
            <Link className="btn ghost" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>

      <section className="rollwrap" ref={roll} aria-label="Things I work with">
        <div className="rollstick">
          <p className="roll-lead">Most days I'm in</p>
          <div className="roll" aria-hidden="true">
            <div className="cyl">
              {ROLL.map((w, i) => <span key={w} className="roll-item" style={{ '--i': i }}>{w}</span>)}
            </div>
          </div>
          <p className="sr-only">{ROLL.join(', ')}</p>
        </div>
      </section>

      <section className="say" ref={say}>
        <p className="say-text wrap">
          {STATEMENT.map((w, i) => (
            <span key={i} style={{ '--i': i, '--n': STATEMENT.length }}>{w} </span>
          ))}
        </p>
      </section>

      <section className="wrap">
        <Label n="01">Work</Label>
        <div className="stack" ref={stack}>
          {feat.map((p, i) => (
            <div key={p.title} className="stack-item" style={{ '--i': i, '--r': feat.length - 1 - i }}>
              <ProjectCard p={p} big />
            </div>
          ))}
        </div>
        <More to="/projects">All {projects.length} projects</More>
      </section>

      <section className="wrap closer">
        <Reveal className="rise">
          <p className="closer-lead">Got something to build, or a batch to teach?</p>
          <a className="closer-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </Reveal>
      </section>
    </>
  );
}
