import React, { useState } from 'react';
import { projects } from '../data';
import { PageHead, ProjectCard } from '../components';

export default function Projects() {
  const kinds = ['All', ...new Set(projects.map(p => p.kind))];
  const [kind, setKind] = useState('All');
  const shown = kind === 'All' ? projects : projects.filter(p => p.kind === kind);
  return (
    <div className="wrap">
      <PageHead title="Projects">Products, client sites and open-source work.</PageHead>
      <div className="chips" role="group" aria-label="Filter projects">
        {kinds.map(k => (
          <button key={k} className={k === kind ? 'chip on' : 'chip'} aria-pressed={k === kind} onClick={() => setKind(k)}>{k}</button>
        ))}
      </div>
      <div className="grid">{shown.map(p => <ProjectCard key={p.title} p={p} />)}</div>
    </div>
  );
}
