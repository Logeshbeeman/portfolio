import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Calendar, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import CodeBits from './CodeBits';
import BookingModal from './BookingModal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("✅ Message sent! I'll be in touch soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('❌ Submission failed. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

    const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'asd.com',
      href: 'mailto:asd.com?subject=Let\'s Work Together&body=Hi Logesh, I\'d like to discuss a project with you.',
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
      value: 'The Nilgiris, TamilNadu, India',
      href: '#',
      description: 'Available for local meetings',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      username: '@logeshBeemaa',
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
      username: '@logeshBeemaa',
      color: 'hover:bg-blue-500',
    },
  ];

  const handleGetInTouch = () => {
    const email = 'beemaalogesh@gmail.com';
    const subject = 'Project Collaboration';
    const body = "Hi Logesh,\n\nI'd like to discuss a project with you.\n\nThanks,\n[your name]";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Schedule a 15‑minute call',
      action: () => setIsBookingModalOpen(true),
      buttonText: 'Schedule Call',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Calendar,
      title: 'Project Discussion',
      description: 'Book a detailed consultation',
      action: () => setIsBookingModalOpen(true),
      buttonText: 'Book Meeting',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      title: 'Urgent Request',
      description: 'Need immediate assistance?',
      action: handleGetInTouch,
      buttonText: 'Contact Now',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 relative overflow-hidden section-gradient-5">
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <CodeBits sectionType="contact" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
            <Send size={24} className="text-violet-400" />
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Let's Work Together</h2>
          <p className="text-lg sm:text-xl text-[#f5f5f5] max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new challenges 
            and collaborate with amazing people. Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 fade-in">
          {quickActions.map((a, i) => (
            <div
              key={i}
              className="text-center p-6 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl border border-violet-500/20 hover:scale-105 transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${a.color} rounded-xl flex items-center justify-center`}>
                <a.icon size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">{a.title}</h3>
              <p className="text-[#f5f5f5] mb-4 text-sm">{a.description}</p>
              <button
                onClick={a.action}
                className="px-4 py-2 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full hover:bg-violet-500/30 transition-colors duration-300"
              >
                {a.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 p-8 rounded-2xl border border-violet-500/20 space-y-6 slide-in-left shadow-lg">
            <h3 className="text-2xl font-bold text-white flex items-center mb-4">
              <Send size={20} className="mr-2 text-violet-400" />
              Send me a message
            </h3>
            {['name','email','subject'].map((field,i) => (
              <input
                key={i}
                name={field}
                type={field==='email'?'email':'text'}
                required
                placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
                value={formData[field as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/30 text-white rounded-xl border border-violet-500/30 focus:border-violet-500"
              />
            ))}
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black/30 text-white rounded-xl border border-violet-500/30 focus:border-violet-500 resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
              ) : <Send size={18} />}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
            
           <div className="slide-in-right flex flex-col gap-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20 shadow-md">
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
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20 shadow-md">
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
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-violet-500/20 shadow-md">
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

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
         <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-violet-500/20 text-center fade-in">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
            © 2024 Logesh. All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-xs sm:text-sm">
            Built with React, TypeScript & Tailwind CSS • Designed with ❤️ in San Francisco
          </p> */}
        </div>
      </footer>
    </section>
  );
};

export default Contact;
