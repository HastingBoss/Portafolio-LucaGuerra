import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about">
      <motion.div 
        className="glass-card padded-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ padding: '28px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', textAlign: 'center' }}>{t('about.title')}</h2>
        <div style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.7', textAlign: 'center', margin: '0 auto' }}>
          <p style={{ marginBottom: '16px' }}>
            {t('about.p1')}
          </p>
          <p style={{ marginBottom: '16px' }}>
            {t('about.p2')}
          </p>
          <p>
            {t('about.p3')}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
