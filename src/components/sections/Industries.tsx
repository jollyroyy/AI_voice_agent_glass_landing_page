const industries = [
  {
    title: 'E-commerce',
    description: 'Share order updates, answer questions instantly and reduce cart abandonment rates.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Banking & Financial Services',
    description: 'Secure, compliant voice automation for account inquiries, transactions, and customer support.',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Healthcare',
    description: 'Automated appointment booking, patient reminders, and HIPAA-compliant call handling.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Real Estate',
    description: 'Instant lead qualification, showing scheduling, and follow-ups for property inquiries.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Travel & Hospitality',
    description: 'Handle bookings, cancellations, and customer queries across multiple time zones 24/7.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Logistics & Delivery',
    description: 'Real-time delivery updates, route optimization support, and customer tracking assistance.',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Insurance',
    description: 'Claims processing assistance, policy inquiries, and automated quote generation.',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Education',
    description: 'Streamline admissions, answer course inquiries, and support student services efficiently.',
    image: 'https://images.pexels.com/photos/1152500/pexels-photo-1152500.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Industry-Specific <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI voice agents tailored for your industry's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
