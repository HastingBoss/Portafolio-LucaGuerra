import React from 'react';
import { motion } from 'framer-motion';

const techList = [
  "React", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Vercel", "REST APIs"
];

const Technologies = () => {
  return (
    <section id="technologies">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Tech Stack</h2>
      
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
              textAlign: 'center',
              fontWeight: '500',
              color: 'var(--text-main)',
              fontSize: '1rem'
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
