import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will VoiceShine work with my current booking system/EMR/CRM?",
      answer: "We integrate with most major calendar and CRM platforms. During our initial consultation we will confirm exact compatibility and list any required connectors.",
    },
    {
      question: "Is patient/client data safe?",
      answer: "We implement industry best practices for data protection. For healthcare customers we offer HIPAA-ready deployment options and will document the controls required for your compliance team.",
    },
    {
      question: "How natural does the voice sound?",
      answer: "Our voices are tuned for natural conversation and tested against real-call flows. We iterate until the tone matches your brand.",
    },
    {
      question: "What if callers need a human?",
      answer: "The agent transfers calls with full context and a short summary so your staff can pick up where the bot left off.",
    },
    {
      question: "You don't have clients yet — is that a risk?",
      answer: "You will get hands-on attention as an early partner, with preferential pricing, rapid customizations, and direct access to our product team. The pilot is designed to prove value before you commit.",
    },
  ];

  return (
    <section id="faqs" className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold tracking-tight text-foreground flex-1">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#72b9bb] transition-transform duration-300 flex-shrink-0 ${
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
