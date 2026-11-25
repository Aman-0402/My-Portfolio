import React from 'react';
import { experience } from '../data';
import { PageHead } from '../components';
import { useScrollVar, Reveal } from '../fx';

export default function Experience() {
  const list = useScrollVar('pass');
  return (
    <div className="wrap">
      <PageHead title="Experience">Teaching and development roles, newest first.</PageHead>
      <ol className="list" ref={list}>
        {experience.map(e => (
          <Reveal key={e.org + e.period} className="rise soft">
            <li>
              <div className="meta">{e.period}</div>
              <div>
                <h3>{e.role}, {e.org}</h3>
                <p className="sub">{e.place}</p>
                <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
