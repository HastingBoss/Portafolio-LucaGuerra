import React from 'react';
import { motion } from 'framer-motion';

const learningList = [
  "Backend APIs", 
  "Authentication systems", 
  "Database integration", 
  "Full Stack Development (UTN)"
];

const CurrentlyLearning = () => {
  return (
    <section id="currently-learning">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', textAlign: 'center' }}>Currently Learning</h2>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '12px',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        {learningList.map((item, i) => (
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
              color: 'var(--text-dim)',
              fontSize: '0.95rem'
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;
