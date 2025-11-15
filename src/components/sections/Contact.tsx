import { useState } from "react";
import { Mail, Building2, User, MessageSquare } from "lucide-react";
import { supabase } from "../../lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            company: formData.company || null,
            message: formData.message,
            user_id: null, // Anonymous submission
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900 leading-[1.1]">
            Book a <span className="gradient-text">Live Demo</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how an AI voice agent can transform your customer experience in just 15 minutes
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl shadow-lg p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border-2 border-[#d4c4a8] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-gray-900 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border-2 border-[#d4c4a8] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-gray-900 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                Company Name <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className="w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border-2 border-[#d4c4a8] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-gray-900 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-700" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  required
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-[#f5f0e8] border-2 border-[#d4c4a8] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-gray-900 placeholder:text-gray-600 resize-none"
                />
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-green-800 font-medium text-center">
                Thank you! We will contact you within 24 hours to schedule your demo.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-800 font-medium text-center">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </button>

            <p className="text-center text-sm text-gray-700 font-medium">
              We'll get back to you within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
