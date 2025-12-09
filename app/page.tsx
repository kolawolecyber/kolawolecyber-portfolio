'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Database, Palette } from 'lucide-react';

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: Palette },
    { category: 'Backend', items: ['Node.js', 'NestJS', 'Express'], icon: Code2 },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Prisma'], icon: Database },
  ];

  const projects = [
    {
      id: 1,
      title: 'Construction Estimation',
      description: 'A comprehensive platform for contractors to generate detailed project estimates and manage construction workflows efficiently.',
      tech: ['React.js', 'JavaScript'],
      link: 'https://constructionestimation.vercel.app',
      image: '/estimate.jpeg',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'Budgenix',
      description: 'A smart finance application for budgeting and expense tracking with real-time analytics and financial insights.',
      tech: ['Vite', 'React', 'Prisma', 'JavaScript', 'Chart.js',"Cloudinary", "PostgreSQL" ],
      link: 'https://budgenix.vercel.app',
      image: '/financewise.png',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Novae E-commerce',
      description: 'A full-featured e-commerce platform with product management, shopping cart, and secure payment integration.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Flutterwave', "Mongodb", "Cloudinary"],
      link: 'https://denovae.vercel.app',
      image: '/novae.jpg',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const about = {
    name: 'Full Stack Developer',
    tagline: 'Crafting digital experiences with clean code and modern design',
    description: 'Passionate developer with expertise in building scalable web applications. I love learning new technologies and pushing the boundaries of what\'s possible on the web. Specialized in full-stack development with a focus on performance and user experience.',
    image: 'owner3.jpg',
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      {/* Header/Hero */}
      <header className="relative">
        <nav className="flex justify-between items-center px-6 md:px-16 py-6 backdrop-blur-md border-b border-slate-800">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Dev</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm hover:text-blue-400 transition">About</a>
            <a href="#projects" className="text-sm hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="text-sm hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="text-sm hover:text-blue-400 transition">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center justify-center px-6 md:px-16 py-20">
          <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Building the{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Future Web
                  </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-xl">{about.tagline}</p>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                {about.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-slate-500 rounded-lg font-semibold hover:border-white hover:bg-white/5 transition"
                >
                  Get in Touch
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/kolawolecyber" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/abdulafeez-abdulakeem-133901146" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:abdulakeemabdulafeez@gmail.com" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
              <Image
                src={"/owner3.jpg"}
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </section>
      </header>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Projects Completed', value: '3+' },
              { label: 'Years Learning', value: '2+' },
              { label: 'Technologies', value: '10+' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 hover:border-slate-500 transition">
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl -z-10"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                />
                <div className="relative h-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-500 transition">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-800 text-xs rounded-full text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-semibold"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-slate-500 transition group">
                  <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                  <div className="space-y-2">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 md:px-16 mb-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-slate-400 text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:abdulakeemabdulafez@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Send Email
            </a>
            <a
              href="https://github.com/kolawolecyber"
              className="px-8 py-3 border border-slate-500 rounded-lg font-semibold hover:border-white hover:bg-white/5 transition flex items-center justify-center gap-2"
            >
              <Github size={20} /> Visit GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-8 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <div>© 2024 All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;