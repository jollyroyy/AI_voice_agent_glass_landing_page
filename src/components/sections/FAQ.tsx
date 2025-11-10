import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Does it really sound human?",
      answer: "Yes. Our AI voice agents use advanced conversational AI that handles interruptions, understands context, and speaks naturally. Most callers never realize they're speaking with AI.",
    },
    {
      question: "What if the AI can't answer a question?",
      answer: "Your AI agent is smart enough to recognize when a call needs human attention. It will gracefully transfer the caller to your team or take a detailed message with callback information.",
    },
    {
      question: "How long does setup take?",
      answer: "Most clients are fully operational within [X] business days. We handle the technical setup—you just provide information about your business.",
    },
    {
      question: "Can it integrate with my existing systems?",
      answer: "Yes. VoiceShine integrates with major calendar platforms (Google Calendar, Outlook, Apple Calendar), practice management software, and CRM systems. If you have a special system, we'll work with you to make it happen.",
    },
    {
      question: "What if I already have a receptionist?",
      answer: "Perfect! Your AI agent complements your human team by handling overflow calls, after-hours inquiries, and routine questions. Your staff can focus on complex issues and in-person patients/clients.",
    },
    {
      question: "What happens to calls after business hours?",
      answer: "Your AI agent works 24/7. Late-night and weekend callers can still book appointments, get information, and leave detailed messages—converting opportunities that would otherwise be lost.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're [COMPLIANCE_STANDARD] compliant and use enterprise-grade encryption. All call data is stored securely and never shared with third parties.",
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
