import React from 'react';
import { Link } from 'react-router-dom';
import { profile, projects, experience } from '../data';
import { ProjectCard, More } from '../components';

export default function Home() {
  const now = experience[0];
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.name}<span>.</span></h1>
        <p className="role">{profile.role}</p>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <Link className="btn" to="/projects">See my work</Link>
          <Link className="btn ghost" to="/contact">Get in touch</Link>
        </div>
      </section>
      <section className="wrap">
        <h2 className="label">Now</h2>
        <p className="now"><strong>{now.role}</strong> at {now.org}, {now.place}. {now.period}.</p>
        <More to="/experience">Full experience</More>
      </section>
      <section className="wrap">
        <h2 className="label">Selected work</h2>
        <div className="grid">{projects.slice(0, 3).map(p => <ProjectCard key={p.title} p={p} />)}</div>
        <More to="/projects">All projects</More>
      </section>
    </>
  );
}
