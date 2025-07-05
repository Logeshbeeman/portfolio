import React from 'react';
import { Code, Download, Mail, Github, Linkedin, Twitter, Sparkles, Zap } from 'lucide-react';
import CodeBits from './CodeBits';
import myimg from './image.png';

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
      <div className="absolute top-20 left-10 opacity-20">
        <div className="text-violet-400 text-6xl font-mono floating">&lt;/&gt;</div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <div className="text-purple-400 text-4xl font-mono floating" style={{ animationDelay: '2s' }}>{ }</div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-20">
        <Sparkles size={40} className="text-violet-300 floating" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-1/3 left-20 opacity-20">
        <Zap size={35} className="text-purple-300 floating" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Section */}
          <div className="mb-2 fade-in">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="w-full h-full animated-gradient rounded-full flex items-center justify-center glow pulse">
                {/* <Code size={60} className="text-white" /> */}
                <img src={myimg} alt='img'/>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-violet-500 rounded-full border-4 border-black flex items-center justify-center floating">
                <Sparkles size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-2">
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-6 text-glow" style={{lineHeight:2}}>
                Logesh
              </h1>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
                <p className="text-3xl md:text-4xl text-gray-300 font-light">
                  UI Developer & Designer
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"></div>
              </div>
            </div>

            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Crafting exceptional digital experiences with modern technologies and creative design. 
                I transform ideas into beautiful, functional interfaces that users love to interact with.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
                <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
                  <div className="text-3xl font-bold gradient-text">100+</div>
                  <div className="text-gray-400 text-sm">Projects Done</div>
                </div>
                <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="fade-in flex flex-wrap justify-center gap-6 mb-12" style={{ animationDelay: '0.6s' }}>
              <button className="group px-10 py-4 animated-gradient rounded-full font-semibold transition-all duration-300 glow flex items-center space-x-3 hover-lift">
                <Mail size={24} />
                <span className="text-lg">Get In Touch</span>
                <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-10 py-4 glass-effect border-2 border-violet-500 rounded-full font-semibold hover:bg-violet-500 transition-all duration-300 flex items-center space-x-3 hover-lift">
                <Download size={24} />
                <span className="text-lg">Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="fade-in flex justify-center space-x-8" style={{ animationDelay: '0.8s' }}>
              {[
                { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-700' },
                { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-500' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-16 h-16 glass-effect border border-violet-500/30 rounded-2xl flex items-center justify-center ${social.color} transition-all duration-300 hover-lift group`}
                  aria-label={social.label}
                >
                  <social.icon size={24} className="text-violet-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Specialties */}
            <div className="fade-in mt-16" style={{ animationDelay: '1s' }}>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'UI/UX Design'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-6 py-3 glass-effect border border-violet-500/30 rounded-full text-violet-300 hover:border-violet-500 hover:bg-violet-500/20 transition-all duration-300 hover-lift"
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
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="w-8 h-12 border-2 border-violet-400 rounded-full flex justify-center glow">
          <div className="w-2 h-4 bg-violet-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-violet-300 text-sm mt-2 text-center">Scroll Down</p>
      </div> */}

      {/* Section Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 section-divider"></div> */}
    </section>
  );
};

export default Hero;