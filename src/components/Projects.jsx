import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import Github from './icons/Github';
import ImageCarousel from './ImageCarousel';
import { useLanguage } from '../context/LanguageContext';

import chat1Img from '../assets/chat-1.png';
import chat2Img from '../assets/chat-2.png';
import nave1Img from '../assets/nave-1.png';
import nave2Img from '../assets/nave-2.png';
import dashboardImg from '../assets/dashboard.png';

const ProjectCard = ({ project, t }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, description, stack, images, github, demo, featured, keyFeatures, architecture, whyBuiltThis } = project;

  return (
    <motion.div 
      className={`glass-card ${featured ? 'featured-project' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gridColumn: featured ? '1 / -1' : 'auto',
        border: featured ? '1px solid var(--primary)' : '1px solid var(--border)'
      }}
    >
      <div style={{ position: 'relative', borderBottom: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)' }}>
        {/* Aspect ratio makes images responsive and focal point */}
        <div style={{ aspectRatio: featured ? '16/9' : '4/3' }}>
          <ImageCarousel images={images} title={title} />
        </div>
        {featured && (
          <div style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            background: 'var(--primary)', 
            padding: '6px 12px', 
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 20
          }}>
            <Sparkles size={14} /> {t('projects.featured')}
          </div>
        )}
      </div>

      <div className="padded-card" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '16px' }}>
          <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{title}</h3>
          {(keyFeatures || architecture || whyBuiltThis) && (
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className="btn btn-outline"
              style={{ padding: '6px 16px', fontSize: '0.85rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {showInfo ? t('projects.hideInfo') : t('projects.showInfo')}
              {showInfo ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>
        
        <p style={{ color: 'var(--text-dim)', marginBottom: '24px', lineHeight: '1.6' }}>{description}</p>
        
        <AnimatePresence>
          {showInfo && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '8px', paddingBottom: '24px' }}>
                {featured && keyFeatures && (
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)' }}>{t('projects.keyFeatures')}</h4>
                    <ul style={{ color: 'var(--text-dim)', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      {keyFeatures.map((feat, i) => <li key={i} style={{ marginBottom: '6px' }}>{feat}</li>)}
                    </ul>
                  </div>
                )}

                {featured && architecture && (
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)' }}>{t('projects.architecture')}</h4>
                    <ul style={{ color: 'var(--text-dim)', listStyle: 'none', paddingLeft: '0', fontSize: '0.95rem' }}>
                      {Object.entries(architecture).map(([key, val], i) => (
                        <li key={i} style={{ marginBottom: '6px' }}>
                          <strong style={{ color: 'var(--text-main)' }}>{key}:</strong> {val}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {featured && whyBuiltThis && (
                  <div style={{ marginBottom: '16px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-main)' }}>{t('projects.whyBuiltThis')}</h4>
                    <p style={{ color: 'var(--text-dim)', lineHeight: '1.6', fontStyle: 'italic', fontSize: '0.95rem' }}>"{whyBuiltThis}"</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {stack.map((tech, i) => (
              <span key={i} style={{ 
                fontSize: '0.75rem', 
                background: 'rgba(255,255,255,0.05)', 
                padding: '4px 10px', 
                borderRadius: '6px',
                border: '1px solid var(--border)',
                color: 'var(--text-main)'
              }}>
                {tech}
              </span>
            ))}
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              <ExternalLink size={16} /> {t('projects.liveDemo')}
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              <Github size={16} /> {t('projects.github')}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  
  const projectsDataList = t('projects.list') || [];
  
  const featuredProject = {
    ...projectsDataList.find(p => p.id === 'minimalchat') || {},
    stack: ["React", "Gemini API", "JavaScript", "Vercel"],
    images: [chat1Img, chat2Img],
    github: "https://github.com/HastingBoss/MinimalChat",
    demo: "https://minimalchat.vercel.app/",
    featured: true,
    architecture: {
      "Frontend": "React",
      "AI Integration": "Gemini API",
      "Deployment": "Vercel",
      "Version Control": "GitHub"
    }
  };

  const otherProjects = [
    {
      ...projectsDataList.find(p => p.id === 'nave') || {},
      stack: ["HTML", "CSS", "JavaScript", "Vercel"],
      images: [nave1Img, nave2Img],
      github: "https://github.com/HastingBoss/LaNave",
      demo: "https://la-nave-beta.vercel.app/"
    },
    {
      ...projectsDataList.find(p => p.id === 'dashboard') || {},
      stack: ["React", "Charts", "LocalStorage"],
      images: [dashboardImg],
      github: "https://github.com/HastingBoss/",
      demo: "#"
    },
    {
      ...projectsDataList.find(p => p.id === 'taskmanager') || {},
      stack: ["React", "CSS", "JavaScript"],
      images: [dashboardImg],
      github: "https://github.com/HastingBoss/",
      demo: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="projects-grid" style={{ marginBottom: '64px' }}>
        <ProjectCard project={featuredProject} t={t} />
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '32px', textAlign: 'center' }}>{t('projects.title')}</h2>
      
      <div className="projects-grid">
        {otherProjects.map((p, i) => <ProjectCard key={i} project={p} t={t} />)}
      </div>
    </section>
  );
};

export default Projects;
