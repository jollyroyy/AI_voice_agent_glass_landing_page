import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: ["Dental Clinics", "Real Estate", "Property Developers", "Healthcare", "Legal Services"],
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Help Center", "API Documentation", "Integrations"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Press Kit", "Partners"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Security", "GDPR Compliance", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-6">
              VoiceFlow AI
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              The smartest AI voice agent for dental clinics and real estate professionals. Never miss a call again.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-600 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-pink-600 mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm transition-colors duration-300 hover:text-pink-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 VoiceFlow AI. All rights reserved. Built with 💗 for businesses that never stop growing.
          </p>
        </div>
      </div>
    </footer>
  );
}
