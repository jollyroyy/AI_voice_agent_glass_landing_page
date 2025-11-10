import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Industry",
      links: [
        { name: "BPO", url: "#industries" },
        { name: "Real Estate", url: "#industries" },
        { name: "Edtech", url: "#industries" },
        { name: "Restaurant", url: "#industries" },
        { name: "Dental Clinics", url: "#industries" },
        { name: "Realtors & Broker Teams", url: "#industries" }
      ],
    },
    {
      title: "Case Studies",
      links: [
        { name: "Healthcare Success Stories", url: "#case-studies" },
        { name: "Real Estate ROI", url: "#case-studies" },
        { name: "Restaurant Solutions", url: "#case-studies" },
        { name: "Dental Practice Growth", url: "#case-studies" }
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#about" },
        { name: "Contact Us", url: "#contact" }
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold gradient-text mb-4">
              VoiceShine
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Your Business Never Sleeps. Neither Should Your Phone.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1 hover:shadow-lg"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1 hover:shadow-lg"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1 hover:shadow-lg"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#72b9bb] hover:via-[#8cc5b8] hover:to-[#ffd1bd] hover:text-white hover:-translate-y-1 hover:shadow-lg"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-base font-bold tracking-tight text-gray-900 mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-gray-600 text-sm transition-colors duration-300 hover:text-[#72b9bb] hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2025 VoiceShine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
