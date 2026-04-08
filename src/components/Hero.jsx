import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';

const Hero = () => {
  return (
    <section id="hero" style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={{ 
          color: 'var(--primary)', 
          fontWeight: '600', 
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontSize: '0.9rem',
          marginBottom: '16px',
          display: 'block'
        }}>
          Frontend Developer | React | JavaScript
        </span>
        
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: '1.1', marginBottom: '24px' }}>
          Luca <span style={{ 
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Guerra</span>
        </h1>
        
        <p style={{ 
          maxWidth: '650px', 
          fontSize: '1.2rem', 
          color: 'var(--text-dim)',
          margin: '0 auto 40px auto',
          lineHeight: '1.6'
        }}>
          Full Stack Web Development student at UTN with a Frontend certification. As an enthusiastic <strong>React Developer</strong> and <strong>JavaScript Developer</strong>, I focus on building modern web applications, interactive interfaces, and efficient API integrations.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://github.com/HastingBoss/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/luca-guerra-a71432272/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="/CV_Luca_Guerra_FrontEnd_Developer.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" title="Download CV">
              <FileText size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
