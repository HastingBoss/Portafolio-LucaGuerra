import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import Github from './icons/Github';
import ImageCarousel from './ImageCarousel';

import chat1Img from '../assets/chat-1.png';
import chat2Img from '../assets/chat-2.png';
import nave1Img from '../assets/nave-1.png';
import nave2Img from '../assets/nave-2.png';
import dashboardImg from '../assets/dashboard.png';

const ProjectCard = ({ title, description, stack, images, github, demo, featured, keyFeatures, architecture, whyBuiltThis }) => (
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
    <div style={{ height: featured ? '400px' : '200px', overflow: 'hidden', position: 'relative' }}>
      <ImageCarousel images={images} title={title} />
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
          <Sparkles size={14} /> FEATURED PROJECT
        </div>
      )}
    </div>
    <div className="padded-card">
      <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{title}</h3>
      <p style={{ color: 'var(--text-dim)', marginBottom: '24px', lineHeight: '1.6' }}>{description}</p>
      
      {featured && keyFeatures && (
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)' }}>Key Features</h4>
          <ul style={{ color: 'var(--text-dim)', paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.95rem' }}>
            {keyFeatures.map((feat, i) => <li key={i} style={{ marginBottom: '6px' }}>{feat}</li>)}
          </ul>
        </div>
      )}

      {featured && architecture && (
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-main)' }}>Architecture</h4>
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
        <div style={{ marginBottom: '32px', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-main)' }}>Why I Built This</h4>
          <p style={{ color: 'var(--text-dim)', lineHeight: '1.6', fontStyle: 'italic', fontSize: '0.95rem' }}>"{whyBuiltThis}"</p>
        </div>
      )}

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
          <ExternalLink size={16} /> Live Demo
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
          <Github size={16} /> GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featuredProject = {
    title: "MinimalChat",
    description: "Slack-inspired chat application with a minimalist design and AI integration. A robust and modern system designed to streamline team communications.",
    stack: ["React", "Gemini API", "JavaScript", "Vercel"],
    images: [chat1Img, chat2Img],
    github: "https://github.com/HastingBoss/MinimalChat",
    demo: "https://minimalchat.vercel.app/",
    featured: true,
    keyFeatures: [
      "Slack-inspired chat interface",
      "Channel-based messaging",
      "Gemini AI integration for automatic conversation summaries",
      "Modern responsive UI",
      "Deployed seamlessly on Vercel"
    ],
    architecture: {
      "Frontend": "React",
      "AI Integration": "Gemini API",
      "Deployment": "Vercel",
      "Version Control": "GitHub"
    },
    whyBuiltThis: "I wanted to explore how AI could improve communication tools, so I built a Slack-style chat application that integrates Gemini AI to automatically summarize conversations."
  };

  const otherProjects = [
    {
      title: "Nave – Banking Landing Page",
      description: "Responsive fintech landing page focused on modern UI and conversion.",
      stack: ["HTML", "CSS", "JavaScript", "Vercel"],
      images: [nave1Img, nave2Img],
      github: "https://github.com/HastingBoss/LaNave",
      demo: "https://la-nave-beta.vercel.app/"
    },
    {
      title: "Dashboard UI",
      description: "Interactive dashboard with analytics charts and custom components.",
      stack: ["React", "Charts", "LocalStorage"],
      images: [dashboardImg],
      github: "https://github.com/HastingBoss/",
      demo: "#"
    },
    {
      title: "Task Manager",
      description: "Simple CRUD productivity application with local state management.",
      stack: ["React", "CSS", "JavaScript"],
      images: [dashboardImg],
      github: "https://github.com/HastingBoss/",
      demo: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="projects-grid" style={{ marginBottom: '64px' }}>
        <ProjectCard {...featuredProject} />
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '32px', textAlign: 'center' }}>Other Projects</h2>
      
      <div className="projects-grid">
        {otherProjects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;
