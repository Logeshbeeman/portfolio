import React from 'react';
import { Code, Download, Mail, Github, Linkedin, Twitter, Sparkles, Zap } from 'lucide-react';
import CodeBits from './CodeBits';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-gradient-1">
      {/* Animated Background Particles */}
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* React Code Bits */}
      <CodeBits sectionType="hero" />

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden md:block">
        <div className="text-violet-400 text-6xl font-mono floating">&lt;&gt;</div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden md:block">
        <div className="text-purple-400 text-4xl font-mono floating" style={{ animationDelay: '2s' }}>{ }</div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-20 hidden lg:block">
        <Sparkles size={40} className="text-violet-300 floating" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-1/3 left-20 opacity-20 hidden lg:block">
        <Zap size={35} className="text-purple-300 floating" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Section */}
          <div className="mb-8 sm:mb-12 fade-in">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8 relative">
              <div className="w-full h-full animated-gradient rounded-full flex items-center justify-center glow pulse">
                <Code size={48} className="text-white sm:w-[60px] sm:h-[60px]" />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-10 h-10 sm:w-12 sm:h-12 bg-violet-500 rounded-full border-4 border-black flex items-center justify-center floating">
                <Sparkles size={16} className="text-white sm:w-[20px] sm:h-[20px]" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4 sm:mb-6 text-glow leading-tight">
                LOGESH
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light text-center">
                  UI Developer & Designer
                </p>
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"></div>
              </div>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                Crafting exceptional digital experiences with modern technologies and creative design. 
                I transform ideas into beautiful, functional interfaces that users love to interact with.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8 sm:mb-12 stats-grid">
                <div className="text-center glass-effect rounded-2xl p-4 sm:p-6 hover-lift">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">5+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="text-center glass-effect rounded-2xl p-4 sm:p-6 hover-lift">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">100+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Projects Done</div>
                </div>
                <div className="text-center glass-effect rounded-2xl p-4 sm:p-6 hover-lift">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">50+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="fade-in flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4" style={{ animationDelay: '0.6s' }}>
              <button className="group px-8 sm:px-10 py-3 sm:py-4 animated-gradient rounded-full font-semibold transition-all duration-300 glow flex items-center justify-center space-x-3 hover-lift text-base sm:text-lg">
                <Mail size={20} className="sm:w-[24px] sm:h-[24px]" />
                <span>Get In Touch</span>
                <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 sm:px-10 py-3 sm:py-4 glass-effect border-2 border-violet-500 rounded-full font-semibold hover:bg-violet-500 transition-all duration-300 flex items-center justify-center space-x-3 hover-lift text-base sm:text-lg">
                <Download size={20} className="sm:w-[24px] sm:h-[24px]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="fade-in flex justify-center space-x-6 sm:space-x-8" style={{ animationDelay: '0.8s' }}>
              {[
                { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-700' },
                { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-500' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 sm:w-16 sm:h-16 glass-effect border border-violet-500/30 rounded-2xl flex items-center justify-center ${social.color} transition-all duration-300 hover-lift group`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-violet-300 group-hover:text-white transition-colors duration-300 sm:w-[24px] sm:h-[24px]" />
                </a>
              ))}
            </div>

            {/* Specialties */}
            <div className="fade-in mt-12 sm:mt-16" style={{ animationDelay: '1s' }}>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto px-4">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'UI/UX Design'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 sm:px-6 py-2 sm:py-3 glass-effect border border-violet-500/30 rounded-full text-violet-300 hover:border-violet-500 hover:bg-violet-500/20 transition-all duration-300 hover-lift text-sm sm:text-base"
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 fade-in scroll-indicator" style={{ animationDelay: '1.2s' }}>
        <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-violet-400 rounded-full flex justify-center glow">
          <div className="w-1.5 sm:w-2 h-3 sm:h-4 bg-violet-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-violet-300 text-xs sm:text-sm mt-2 text-center">Scroll Down</p>
      </div> */}

      {/* Section Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 section-divider"></div> */}
    </section>
  );
};

export default Hero;