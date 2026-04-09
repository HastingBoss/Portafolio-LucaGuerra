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

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // ms
      let start = null;

      // Easing function for smooth deceleration
      const easeOutQuart = (time) => 1 - (--time) * time * time * time;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeOutQuart(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

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
          <motion.a 
            href="#about" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'about')}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.about')}
          </motion.a>
          <motion.a 
            href="#projects" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'projects')}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.projects')}
          </motion.a>
          <motion.a 
            href="#contact" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'contact')}
            whileTap={{ scale: 0.95 }}
          >
            {t('nav.contact')}
          </motion.a>
          
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
