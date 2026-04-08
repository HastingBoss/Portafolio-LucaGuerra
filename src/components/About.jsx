import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <motion.div 
        className="glass-card padded-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>About Me</h2>
        <div style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '16px' }}>
            I am an advanced <strong>Full Stack Web Development student at UTN</strong>, and I hold a formal certification as a <strong>Frontend Developer</strong>.
          </p>
          <p style={{ marginBottom: '16px' }}>
            I have solid experience building modern web applications from scratch, covering everything from technical architecture to the final polish of the user experience and UI.
          </p>
          <p>
            My constant goal is to perfect my skills in modern web technologies, robust API integrations, and creating digital products that truly deliver value.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
