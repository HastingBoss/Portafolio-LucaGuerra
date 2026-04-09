import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent'
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: '700', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
          LG
        </div>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#projects" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            {t('nav.projects')}
          </a>
          <a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            {t('nav.about')}
          </a>
          <a href="#contact" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
            {t('nav.contact')}
          </a>
          
          <button 
            onClick={toggleLanguage}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text-main)',
              borderRadius: '20px',
              padding: '6px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              transition: 'background 0.2s'
            }}
          >
            <Globe size={16} />
            {lang.toUpperCase()}
          </button>
          
          <a 
            href="https://wa.me/5491126487393"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Contact"
            style={{
              background: '#25D366',
              color: 'white',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)'
            }}
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
