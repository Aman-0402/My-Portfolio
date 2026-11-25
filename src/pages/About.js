import React from 'react';
import { profile, skills } from '../data';
import { PageHead } from '../components';
import { Reveal } from '../fx';

export default function About() {
  const base = process.env.PUBLIC_URL;
  return (
    <div className="wrap">
      <PageHead title="About" />
      <div className="prose">
        {profile.about.map((p, i) => <Reveal key={i} className="rise" delay={i * 80}><p>{p}</p></Reveal>)}
      </div>
      <dl className="facts">
        {profile.facts.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}
      </dl>
      <h2 className="label sk"><span>—</span>Tools I use</h2>
      <div className="skills">
        {skills.map((g, gi) => (
          <Reveal key={g.group} className="rise" delay={gi * 70}>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map(i => (
                <li key={i.name}>
                  <img src={`${base}/images/skills/${i.image}`} alt="" width="20" height="20" loading="lazy" />{i.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
