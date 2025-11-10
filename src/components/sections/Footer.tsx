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
            <div className="text-2xl font-bold gradient-text mb-6">
              VoiceShine
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Your Business Never Sleeps. Neither Should Your Phone.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold tracking-tight gradient-text mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm transition-colors duration-300 hover:text-[#72b9bb]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-foreground mb-4">Still Have Questions?</h4>
            <p className="text-gray-600 text-sm mb-2">Email us: hello@voiceshine.com</p>
            <p className="text-gray-600 text-sm mb-2">Call us: [PHONE_NUMBER]</p>
            <p className="text-gray-500 text-xs">Available Monday-Friday, 9 AM - 6 PM [TIMEZONE]</p>
          </div>
          <div className="text-center pt-6 border-t border-gray-200">
            <h4 className="text-base font-bold text-foreground mb-3">Built for Businesses Who Can't Afford to Miss Calls</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
              <span>✓ Enterprise-grade reliability with [X]% uptime</span>
              <span>✓ HIPAA-compliant for healthcare practices</span>
              <span>✓ Continuous learning and improvement</span>
              <span>✓ Dedicated support team</span>
              <span>✓ Money-back satisfaction guarantee</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © 2025 VoiceShine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
