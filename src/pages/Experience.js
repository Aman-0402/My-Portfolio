import React from 'react';
import { experience } from '../data';
import { PageHead } from '../components';

export default function Experience() {
  return (
    <div className="wrap">
      <PageHead title="Experience">Training and development roles, most recent first.</PageHead>
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
    </div>
  );
}
