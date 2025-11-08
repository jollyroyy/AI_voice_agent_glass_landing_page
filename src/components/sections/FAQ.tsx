import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to set up?",
      answer: "Just 15 minutes. You get a unique phone number, forward your business line to it, customize your AI agent's personality and knowledge base, and you're live. No technical skills or complex integrations required.",
    },
    {
      question: "What if the AI can't answer a question?",
      answer: "Your AI agent is trained on your specific business information and can handle 95% of common questions. For complex cases, it smoothly transfers to you or takes a detailed message with contact info, ensuring no lead is lost.",
    },
    {
      question: "Can it integrate with my existing software?",
      answer: "Yes! We integrate with popular scheduling systems, CRMs, and practice management software used by dental clinics and real estate agencies. Your bookings sync automatically, and all lead data flows directly into your existing tools.",
    },
    {
      question: "How much does it cost?",
      answer: "Plans start at $99/month for unlimited calls and bookings—that's less than $3 per day. Compare that to a receptionist's salary of $35,000+ per year plus benefits. Most clients see ROI within the first week.",
    },
    {
      question: "What makes your AI different from others?",
      answer: "We're built specifically for dental and real estate businesses. Our AI understands industry terminology, handles appointment scheduling natively, and sounds natural—not robotic. Plus, we answer in under 2 seconds, while most competitors take 5-10 seconds.",
    },
    {
      question: "Can I try it before committing?",
      answer: "Absolutely! Start with a 14-day free trial. No credit card required. Test it with real calls, see the bookings roll in, and only pay if you love it. Most customers decide to keep it within the first 3 days.",
    },
  ];

  return (
    <section id="faqs" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-gray-900">
            Questions? <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">We've Got Answers</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about VoiceFlow AI
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-pink-100 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/30"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-pink-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
