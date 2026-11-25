import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from './data';
import { Reveal, tilt, untilt } from './fx';

const FORM_ENDPOINT = process.env.REACT_APP_FORM_ENDPOINT;

export function ProjectCard({ p, big = false, delay = 0 }) {
  const body = (
    <article className={`card tilt${big ? ' big' : ''}`} onPointerMove={tilt} onPointerLeave={untilt}>
      <div className="card-top"><span>{p.kind}</span><span>{p.year}</span></div>
      <h3>{p.title}</h3>
      <p>{p.text}</p>
      <p className="stack-line">{p.stack.join(', ')}</p>
      <div className="card-links">
        {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Visit ↗</a>}
        {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer">Code ↗</a>}
      </div>
    </article>
  );
  return big ? body : <Reveal className="rise" delay={delay}>{body}</Reveal>;
}

export function Label({ n, children }) {
  return <h2 className="label"><span>{n}</span>{children}</h2>;
}

export function PageHead({ title, children }) {
  return (
    <header className="page-head">
      <h1>{title}</h1>
      {children && <p className="lede">{children}</p>}
    </header>
  );
}

export function ContactForm() {
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
      <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
      <p className="form-note" role="status">
        {status === 'sent' && 'Thanks, your message is on its way.'}
        {status === 'error' && `Something went wrong. Please email ${profile.email} directly.`}
      </p>
    </form>
  );
}

export function More({ to, children }) {
  return <p className="more"><Link to={to}>{children} →</Link></p>;
}
