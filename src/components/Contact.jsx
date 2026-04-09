import React from 'react';
import { Mail, FileText, MessageCircle } from 'lucide-react';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t('contact.title')}</h2>
      <p style={{ color: 'var(--text-dim)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px auto' }}>
        {t('contact.description')}
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
        <a href="https://wa.me/5491126487393" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div className="glass-card" style={{ width: '72px', height: '72px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageCircle size={32} />
          </div>
          <span>WhatsApp</span>
        </a>
      </div>

      <a href="/CV_Luca_Guerra_FrontEnd_Developer.pdf" download="CV_Luca_Guerra_FrontEnd_Developer.pdf" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '14px 28px' }}>
        <FileText size={20} /> {t('contact.downloadCV')}
      </a>
    </section>
  );
};

export default Contact;
