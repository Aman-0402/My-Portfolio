import React, { useState } from 'react';
import { projects } from '../data';
import { PageHead, ProjectCard } from '../components';
import { useScrollVar } from '../fx';

export default function Projects() {
  const kinds = ['All', ...new Set(projects.map(p => p.kind))];
  const [kind, setKind] = useState('All');
  const grid = useScrollVar('pass');
  const shown = kind === 'All' ? projects : projects.filter(p => p.kind === kind);
  const cols = [0, 1, 2].map(c => shown.filter((_, i) => i % 3 === c));
  return (
    <div className="wrap">
      <PageHead title="Projects">{projects.length} things I've built or taught with. Descriptions come from each repository's README.</PageHead>
      <div className="chips" role="group" aria-label="Filter projects">
        {kinds.map(k => (
          <button key={k} className={k === kind ? 'chip on' : 'chip'} aria-pressed={k === kind} onClick={() => setKind(k)}>{k}</button>
        ))}
      </div>
      <div className="cols" ref={grid}>
        {cols.map((col, c) => (
          <div key={c + kind} className="col">
            {col.map((p, i) => <ProjectCard key={p.title} p={p} delay={i * 60} />)}
          </div>
        ))}
      </div>
    </div>
  );
}
