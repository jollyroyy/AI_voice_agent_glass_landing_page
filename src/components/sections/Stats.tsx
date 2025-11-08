export function Stats() {
  const stats = [
    { number: "70%", label: "Cost Reduction" },
    { number: "24/7", label: "Always Available" },
    { number: "2s", label: "Response Time" },
    { number: "0", label: "Missed Calls" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div className="gradient-text text-5xl font-extrabold mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
