export function Stats() {
  const stats = [
    { number: "70%", label: "Cost Reduction" },
    { number: "24/7", label: "Always Available" },
    { number: "2s", label: "Response Time" },
    { number: "0", label: "Missed Calls" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent mb-3">
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
