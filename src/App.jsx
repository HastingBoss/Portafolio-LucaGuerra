import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();

  return (
    <div className="app-container">
      <Navbar />
      <header>
        <Hero />
      </header>
      
      <main>
        <About />
        <Technologies />
        <Projects />
        <CurrentlyLearning />
      </main>
      
      <footer>
        <Contact />
        <div style={{ 
          padding: '40px 20px', 
          textAlign: 'center', 
          color: 'var(--text-dim)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--border)'
        }}>
          © {new Date().getFullYear()} {t('footer.builtBy')}
        </div>
      </footer>
    </div>
  );
}

export default App;
