import React from 'react';
import { ExternalLink, Github, Eye, Star, Zap, Layers, Globe } from 'lucide-react';
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

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden section-gradient-3">
      {/* Background Particles */}
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* React Code Bits */}
      <CodeBits sectionType="projects" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 opacity-10">
        <Layers size={70} className="text-red-400 floating" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <Globe size={60} className="text-pink-400 floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"></div>
            <Zap size={30} className="text-red-400" />
            <div className="h-1 w-20 bg-gradient-to-r from-pink-600 to-red-500 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8 text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring diverse projects that demonstrate 
            my expertise in modern web development and creative problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-12 slide-in-left flex items-center space-x-3">
            <Star className="text-yellow-400" size={32} />
            <span className="gradient-text">Featured Work</span>
          </h3>
          <div className="grid lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative gradient-border hover-lift scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Project Actions */}
                  <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300 glow"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300 glow"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>

                  {/* Stars */}
                  <div className="absolute top-6 left-6 flex items-center space-x-2 glass-effect rounded-full px-4 py-2">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{project.stars}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-6 right-6">
                    <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-white font-semibold text-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 glass-effect">
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{project.title}</h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 glass-effect border border-red-500/30 rounded-full text-red-300 text-sm hover:border-red-500 hover:bg-red-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300 font-semibold group">
                    <Eye size={18} />
                    <span>View Project Details</span>
                    <div className="w-0 group-hover:w-4 h-0.5 bg-red-400 transition-all duration-300"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 slide-in-left flex items-center space-x-3">
            <Layers className="text-red-400" size={32} />
            <span className="gradient-text">More Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group relative gradient-border hover-lift scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </div>

                  <div className="absolute top-4 left-4 flex items-center space-x-1 glass-effect rounded-full px-3 py-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">{project.stars}</span>
                  </div>
                </div>

                <div className="p-6 glass-effect">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white gradient-text">{project.title}</h4>
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-semibold`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 glass-effect border border-red-500/30 rounded text-red-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 glass-effect border border-red-500/30 rounded text-red-300 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 fade-in">
          <button className="px-12 py-4 animated-gradient rounded-full font-semibold transition-all duration-300 glow hover-lift text-lg">
            View All Projects on GitHub
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider"></div>
    </section>
  );
};

export default Projects;