import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development Consultation',
    'UI/UX Design Review',
    'Project Planning Session',
    'Technical Architecture Discussion',
    'Code Review & Optimization',
    'Other (Please specify in message)',
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use environment variables for EmailJS config (set these in your .env file)
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error('EmailJS environment variables are not set.');
      }

      const templateParams = {
        to_name: 'Logesh',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email notification
      await emailjs.send(serviceId, templateId, templateParams, userId);

      // Send confirmation email to client
      const clientTemplateParams = {
        to_name: formData.name,
        to_email: formData.email,
        date: formData.date,
        time: formData.time,
        service: formData.service,
      };

      await emailjs.send(serviceId, 'client_confirmation_template', clientTemplateParams, userId);

      toast.success('Booking request sent successfully! You will receive a confirmation email shortly.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: '',
      });
      
      onClose();
    } catch (error) {
      console.error('Error sending booking request:', error);
      toast.error('Failed to send booking request. Please try again or contact directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl border border-violet-500/20 backdrop-blur-md flex flex-col top-8">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-violet-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Calendar size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Book a Meeting</h2>
              <p className="text-white-300 text-sm">Schedule a consultation with Logesh</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-500/20 transition-colors duration-300"
          >
            <X size={20} className="text-white-400" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white-300 mb-2">
                <User size={16} className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-white-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                placeholder="Your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white-300 mb-2">
                <Mail size={16} className="inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-white-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white-300 mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-white-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-white-300 mb-2">
                <Calendar size={16} className="inline mr-2" />
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={getTomorrowDate()}
                className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-white-300 mb-2">
                <Clock size={16} className="inline mr-2" />
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                required
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time} className="bg-black">
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white-300 mb-2">
              Service Type *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-black">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white-300 mb-2">
              <MessageCircle size={16} className="inline mr-2" />
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-black/30 border border-violet-500/30 rounded-xl text-white placeholder-white-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
              placeholder="Tell me about your project or any specific requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-violet-500/30 rounded-xl font-semibold text-violet-300 hover:bg-violet-500/10 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Calendar size={16} />
                  <span>Book Meeting</span>
                </>
              )}
            </button>
          </div>
          </form>
          {/* Footer */}
          <div className="px-6 pb-6">
          <div className="bg-violet-500/10 rounded-xl p-4 border border-violet-500/20">
            <p className="text-sm text-white-300 mb-2">
              <strong className="text-violet-300">Note:</strong> This is a booking request. You will receive a confirmation email within 24 hours.
            </p>
            <p className="text-xs text-white-400">
              For urgent matters, please contact directly at{' '}
              <a href="mailto:" className="text-violet-300 hover:text-violet-200">
                
              </a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;  