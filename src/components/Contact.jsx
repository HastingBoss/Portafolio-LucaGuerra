import React from 'react';
import { Mail, FileText } from 'lucide-react';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Let's build something together</h2>
      <p style={{ color: 'var(--text-dim)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px auto' }}>
        Interested in my profile? Don't hesitate to reach out to collaborate on projects or talk about tech.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <a href="mailto:lukguz99@gmail.com" className="contact-link" style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div className="glass-card" style={{ width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Mail size={32} />
          </div>
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/luca-guerra-a71432272/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div className="glass-card" style={{ width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Linkedin size={32} />
          </div>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/HastingBoss/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div className="glass-card" style={{ width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Github size={32} />
          </div>
          <span>GitHub</span>
        </a>
      </div>

      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '14px 28px' }}>
        <FileText size={20} /> Download Resume
      </a>
    </section>
  );
};

export default Contact;
