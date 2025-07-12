import React from 'react';
import { ExternalLink, Github, Star, Zap, Layers, Globe } from 'lucide-react';
import CodeBits from './CodeBits';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'Full Stack',
      featured: true,
      githubUrl: '#',
      liveUrl: '#',
      stars: 124,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      category: 'Frontend',
      featured: true,
      githubUrl: '#',
      liveUrl: '#',
      stars: 89,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      category: 'Frontend',
      featured: false,
      githubUrl: '#',
      liveUrl: '#',
      stars: 67,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Weather Analytics App',
      description: 'Real-time weather monitoring dashboard with interactive maps, detailed forecasts, and historical data analysis.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      category: 'Frontend',
      featured: false,
      githubUrl: '#',
      liveUrl: '#',
      stars: 45,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Social Media Platform',
      description: 'Full-featured social media application with real-time messaging, content sharing, and advanced user engagement features.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      category: 'Full Stack',
      featured: true,
      githubUrl: '#',
      liveUrl: '#',
      stars: 156,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with interactive charts, real-time data visualization, and comprehensive reporting tools.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      featured: false,
      githubUrl: '#',
      liveUrl: '#',
      stars: 78,
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-12 sm:py-20 relative section-gradient-3">
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <CodeBits sectionType="projects" />

      <div className="absolute top-20 left-20 opacity-10 hidden lg:block">
        <Layers size={70} className="text-red-400 floating" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10 hidden lg:block">
        <Globe size={60} className="text-pink-400 floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"></div>
            <Zap size={24} className="text-red-400 sm:w-[30px] sm:h-[30px]" />
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-pink-600 to-red-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 sm:mb-8 text-glow">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            A showcase of my recent work, featuring diverse projects that demonstrate 
            my expertise in modern web development and creative problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 sm:mb-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 slide-in-left flex items-center space-x-3">
            <Star className="text-yellow-400" size={24} />
            <span className="gradient-text">Featured Work</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover-lift transition-all duration-300 border border-white/20 hover:border-white"
              >
                <div className="relative w-full h-56 sm:h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center space-x-2 glass-effect rounded-full px-3 py-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-white font-semibold text-sm">{project.stars}</span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.githubUrl} className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300">
                      <Github size={18} className="text-white" />
                    </a>
                    <a href={project.liveUrl} className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300">
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-semibold`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-black/40 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white mb-2 gradient-text">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs text-red-300 border border-red-500/30 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 slide-in-left flex items-center space-x-3">
            <Layers className="text-red-400" size={24} />
            <span className="gradient-text">More Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover-lift transition-all duration-300 border border-white/20 hover:border-white"
              >
                <div className="relative w-full h-48 sm:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 flex items-center space-x-1 glass-effect rounded-full px-2 py-1">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span className="text-white text-xs">{project.stars}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.githubUrl} className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-red-500">
                      <Github size={14} className="text-white" />
                    </a>
                    <a href={project.liveUrl} className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-red-500">
                      <ExternalLink size={14} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-4 bg-black/40 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold text-lg gradient-text">{project.title}</h4>
                    <span className={`px-2 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs border border-red-500/30 text-red-300 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs border border-red-500/30 text-red-300 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-20 fade-in">
          <button
            className="px-8 sm:px-12 py-3 sm:py-4 animated-gradient rounded-full font-semibold transition-all duration-300 glow hover-lift text-base sm:text-lg"
            onClick={() => window.open('https://github.com/Logeshbeeman')}
          >
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
