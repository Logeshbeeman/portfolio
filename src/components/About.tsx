import React from 'react';
import { User, Target, Award, Coffee, Code, Palette, Zap, Heart, Star, Rocket } from 'lucide-react';
import CodeBits from './CodeBits';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience', color: 'from-yellow-500 to-orange-500' },
    { icon: Target, value: '100+', label: 'Projects Completed', color: 'from-green-500 to-emerald-500' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee', color: 'from-amber-500 to-yellow-500' },
    { icon: User, value: '50+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices and modern standards.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Combining aesthetics with functionality to create memorable and engaging user experiences.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless cross-platform compatibility.',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden section-gradient-2">
      {/* Background Particles */}
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* React Code Bits */}
      <CodeBits sectionType="about" />

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <Heart size={60} className="text-green-400 floating" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Star size={50} className="text-emerald-400 floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
            <Rocket size={30} className="text-green-400" />
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8 text-glow">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference. 
            Here's my story and what drives me every day to push the boundaries of web development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-8 slide-in-left">
            <h3 className="text-4xl font-bold text-white mb-8 gradient-text">My Journey</h3>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg glass-effect p-6 rounded-2xl">
                I started my journey as a curious developer fascinated by the intersection of technology and creativity. 
                Over the years, I've evolved into a UI specialist who believes that great design should not only look 
                beautiful but also solve real problems and enhance user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg glass-effect p-6 rounded-2xl">
                My expertise spans across modern frontend technologies, with a particular focus on React, TypeScript, 
                and creating design systems that scale. I'm passionate about performance optimization, accessibility, 
                and crafting interfaces that feel intuitive and delightful to use.
              </p>
            </div>
            
            {/* Skills Tags */}
            <div className="flex flex-wrap gap-4 mt-8">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Design Systems'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-6 py-3 animated-gradient rounded-full text-white font-semibold hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Profile */}
          <div className="slide-in-right">
            <div className="relative">
              <div className="w-96 h-96 mx-auto gradient-border glow hover-lift">
                <div className="w-full h-full bg-gradient-to-br from-green-600/20 to-emerald-700/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="w-80 h-80 animated-gradient rounded-2xl flex items-center justify-center">
                    <User size={120} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 animated-gradient rounded-full flex items-center justify-center floating glow">
                <Award className="text-white" size={32} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center floating glow" style={{ animationDelay: '1s' }}>
                <Target className="text-white" size={32} />
              </div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center floating glow" style={{ animationDelay: '2s' }}>
                <Heart className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 glass-effect rounded-3xl border border-green-500/20 glow hover-lift scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 glow`}>
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-3">{stat.value}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Highlights */}
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-10 gradient-border hover-lift scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-3xl flex items-center justify-center mx-auto mb-8 glow pulse`}>
                <highlight.icon size={40} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-6 gradient-text">{highlight.title}</h4>
              <p className="text-gray-300 leading-relaxed text-lg">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider"></div>
    </section>
  );
};

export default About;