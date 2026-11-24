import React from 'react';
import { profile, skills } from '../data';
import { PageHead } from '../components';

export default function About() {
  const base = process.env.PUBLIC_URL;
  return (
    <div className="wrap">
      <PageHead title="About" />
      <div className="prose">{profile.about.map((p, i) => <p key={i}>{p}</p>)}</div>
      <dl className="facts">
        {profile.facts.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}
      </dl>
      <h2 className="label sk">Skills</h2>
      <div className="skills">
        {skills.map(g => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map(i => (
                <li key={i.name}>
                  <img src={`${base}/images/skills/${i.image}`} alt="" width="20" height="20" loading="lazy" />{i.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
