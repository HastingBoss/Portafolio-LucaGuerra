import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const techList = [
  { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "HTML", src: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", src: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "Git", src: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "REST APIs", src: "https://cdn.simpleicons.org/nodedotjs/339933" }
];

const Technologies = () => {
  const { t } = useLanguage();

  return (
    <section id="technologies">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>{t('tech.title')}</h2>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '12px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {techList.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '12px 24px',
              borderRadius: '24px',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontWeight: '500',
              color: 'var(--text-main)',
              fontSize: '1rem'
            }}
          >
            <img src={tech.src} alt={tech.name} width="24" height="24" />
            {tech.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
