import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const company = (formData.get('company') as string) || null;
    const message = formData.get('message') as string;

    console.log('Submitting form with:', { fullName, email, company, message });

    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert({
          user_id: user?.id || null,
          full_name: fullName,
          email: email,
          company: company,
          message: message,
        })
        .select();

      if (error) {
        console.error('Supabase error:', error);
        alert(`Error: ${error.message}. Please try again or contact us directly.`);
      } else {
        console.log('Form submitted successfully:', data);
        alert('Thank you for reaching out! Our strategy team will contact you shortly.');
        e.currentTarget.reset();
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('There was an unexpected error. Please try again or contact us directly at contact@voiceshine.ai');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="bg-[#f9f5ef]/95 border border-[#d4c4a8] shadow-2xl rounded-3xl p-10 space-y-6 max-w-3xl mx-auto backdrop-blur-lg relative z-10"
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          required
          autoComplete="name"
          disabled={isSubmitting}
          className="w-full p-4 bg-white text-[#3b2e1a] placeholder-[#8a7960] border-2 border-[#d4c4a8] rounded-xl focus:ring-2 focus:ring-[#815a2b] focus:outline-none font-['Inter'] cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ pointerEvents: 'auto', zIndex: 1 }}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Business Email"
          required
          autoComplete="email"
          disabled={isSubmitting}
          className="w-full p-4 bg-white text-[#3b2e1a] placeholder-[#8a7960] border-2 border-[#d4c4a8] rounded-xl focus:ring-2 focus:ring-[#815a2b] focus:outline-none font-['Inter'] cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ pointerEvents: 'auto', zIndex: 1 }}
        />
      </div>

      <input
        type="text"
        name="company"
        id="company"
        placeholder="Company / Organization"
        autoComplete="organization"
        disabled={isSubmitting}
        className="w-full p-4 bg-white text-[#3b2e1a] placeholder-[#8a7960] border-2 border-[#d4c4a8] rounded-xl focus:ring-2 focus:ring-[#815a2b] focus:outline-none font-['Inter'] cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ pointerEvents: 'auto', zIndex: 1 }}
      />

      <textarea
        name="message"
        id="message"
        placeholder="Tell us about your goals or challenges"
        rows={5}
        required
        disabled={isSubmitting}
        className="w-full p-4 bg-white text-[#3b2e1a] placeholder-[#8a7960] border-2 border-[#d4c4a8] rounded-xl focus:ring-2 focus:ring-[#815a2b] focus:outline-none font-['Inter'] resize-none cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ pointerEvents: 'auto', zIndex: 1 }}
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#815a2b] to-[#5e3f1d] text-[#fffaf3] font-semibold text-lg rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-['Inter'] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer relative z-20"
        style={{ pointerEvents: 'auto' }}
      >
        {isSubmitting ? 'Submitting...' : 'Get My Free Strategy Call'}
      </button>
    </form>
  );
}
