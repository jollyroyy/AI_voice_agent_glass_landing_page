import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does VoiceShine handle complex conversations?",
      answer: "Our AI uses advanced natural language processing to understand intent, context, and nuance. It can handle interruptions mid-sentence, understand accents, recognize urgency, ask clarifying questions, and remember context throughout the entire conversation. This is not a phone tree—it is actual conversation.",
    },
    {
      question: "What integrations does VoiceShine support?",
      answer: "VoiceShine integrates with Google Calendar, Microsoft Outlook, Salesforce, HubSpot, Zoho CRM, practice management systems, Twilio, RingCentral, Stripe, Square, and 1000+ apps via Zapier. We also build custom integrations for specialized tools your business uses.",
    },
    {
      question: "How secure is my data with VoiceShine?",
      answer: "Enterprise-grade security with 256-bit AES encryption, SOC 2 Type II certification, HIPAA compliance for healthcare, and GDPR compliance. We maintain [X]% uptime SLA with redundant systems, automatic failover, and 24/7 monitoring.",
    },
    {
      question: "Can the AI learn my specific business processes?",
      answer: "Yes. During setup, we train your AI agent on your services, pricing, scheduling preferences, common questions, and brand voice. The system continuously learns from every call, adapting to seasonal patterns and improving accuracy over time.",
    },
    {
      question: "What happens when the AI needs to transfer a call?",
      answer: "Your AI agent recognizes when human attention is needed (emergencies, complex situations, angry callers, high-value opportunities). It provides a warm handoff, briefing you on context before connection, and ensuring no repetition for the caller.",
    },
    {
      question: "How quickly can I get started?",
      answer: "Most clients launch in 7 days. Day 1-2: Discovery and configuration. Day 3-4: AI training and integration setup. Day 5-6: Testing and staff training. Day 7: Go live with ongoing monitoring and optimization.",
    },
    {
      question: "What kind of analytics and reporting do I get?",
      answer: "Comprehensive dashboard showing total calls handled, response times, call duration, appointment booking rates, peak call patterns, common questions, caller insights, revenue tracking, ROI calculations, call recordings, transcripts, and quality scores.",
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
