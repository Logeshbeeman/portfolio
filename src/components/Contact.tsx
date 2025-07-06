import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Calendar, Clock } from 'lucide-react';
import CodeBits from './CodeBits';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'beemaalogesh@gmail.com',
      href: 'mailto:beemaalogesh@gmail.com',
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Call me during business hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'The Nilgiris, INDIA',
      href: '#',
      description: 'Available for local meetings',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      username: '@logeshbeeman',
      color: 'hover:bg-gray-700',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      username: 'Logesh',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      username: '@logesh_dev',
      color: 'hover:bg-blue-500',
    },
  ];


  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Schedule a 15-minute call',
      action: 'Schedule Call',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Calendar,
      title: 'Project Discussion',
      description: 'Book a detailed consultation',
      action: 'Book Meeting',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Urgent Request',
      description: 'Need immediate assistance?',
      action: 'Contact Now',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 relative overflow-hidden section-gradient-5">
      {/* Background Particles */}
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* React Code Bits */}
      <CodeBits sectionType="contact" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
            <Send size={24} className="text-violet-400 sm:w-[30px] sm:h-[30px]" />
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? I'm always excited to work on new challenges 
            and collaborate with amazing people. Let's create something extraordinary together.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-xl sm:rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:scale-105 scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${action.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 glow`}>
                <action.icon size={24} className="text-white sm:w-[32px] sm:h-[32px]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{action.title}</h3>
              <p className="text-gray-300 text-sm mb-3 sm:mb-4">{action.description}</p>
              <button className="px-3 sm:px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm hover:bg-violet-500/30 transition-colors duration-300">
                {action.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact Form */}
          <div className="slide-in-left">
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20 contact-form">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center space-x-2">
                <Send size={20} className="text-violet-400 sm:w-[24px] sm:h-[24px]" />
                <span>Send me a message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 glow disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-[20px] sm:h-[20px]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={20} className="text-white sm:w-[24px] sm:h-[24px]" />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">{item.title}</div>
                      <div className="text-white font-semibold mb-1 text-sm sm:text-base">{item.value}</div>
                      <div className="text-gray-400 text-xs">{item.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Connect With Me</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-colors duration-300 group"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${social.color}`}>
                      <social.icon size={20} className="text-white sm:w-[24px] sm:h-[24px]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{social.label}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Availability</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm sm:text-base">Available for new projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={14} className="text-violet-400 sm:w-[16px] sm:h-[16px]" />
                  <span className="text-gray-300 text-sm sm:text-base">Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={14} className="text-violet-400 sm:w-[16px] sm:h-[16px]" />
                  <span className="text-gray-300 text-sm sm:text-base">Timezone: PST (UTC-8)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-violet-500/20 text-center fade-in">
        {/* <div className="container mx-auto px-4 sm:px-6"> */}
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
            © 2024 Logesh. All rights reserved.
          </p>
        {/* </div> */}
      </footer>
    </section>
  );
};

export default Contact;