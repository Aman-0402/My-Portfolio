import React from 'react';
import { profile } from '../data';
import { PageHead, ContactForm } from '../components';

export default function Contact() {
  return (
    <div className="wrap">
      <PageHead title="Contact">Have a project, a course or a role in mind? I'd like to hear about it.</PageHead>
      <p className="reach">
        <a href={`mailto:${profile.email}`}>{profile.email}</a><br />
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
      </p>
      <ContactForm />
    </div>
  );
}
