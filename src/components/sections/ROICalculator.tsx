import { useState } from "react";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(20);
  const [avgDealValue, setAvgDealValue] = useState(500);
  const [conversionRate, setConversionRate] = useState(30);

  const calculateROI = () => {
    const recoveredCalls = missedCalls * 0.95;
    const newDeals = (recoveredCalls * conversionRate) / 100;
    const monthlyRevenue = newDeals * avgDealValue;
    const yearlyRevenue = monthlyRevenue * 12;
    const timeSaved = missedCalls * 5;

    return {
      recoveredCalls: Math.round(recoveredCalls),
      newDeals: Math.round(newDeals),
      monthlyRevenue: Math.round(monthlyRevenue),
      yearlyRevenue: Math.round(yearlyRevenue),
      timeSaved: Math.round(timeSaved),
    };
  };

  const roi = calculateROI();

  return (
    <section id="roi" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 leading-[1.1]">
            Calculate Your <span className="text-amber-700">ROI</span>
          </h2>
          <p className="text-2xl text-gray-900 max-w-3xl mx-auto font-bold">
            See how much revenue you could recover with AI voice automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-2xl p-10 border-4 border-gray-300">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Your Business Metrics</h3>

            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between text-base font-extrabold text-gray-900 mb-4">
                  <span className="flex items-center gap-3">
                    <Users className="size-6 text-gray-900" />
                    Missed Calls Per Week
                  </span>
                  <span className="text-3xl font-black text-gray-900">{missedCalls}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-sm font-bold text-gray-700 mt-2">
                  <span>5</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-base font-extrabold text-gray-900 mb-4">
                  <span className="flex items-center gap-3">
                    <DollarSign className="size-6 text-gray-900" />
                    Average Deal Value
                  </span>
                  <span className="text-3xl font-black text-gray-900">${avgDealValue}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-sm font-bold text-gray-700 mt-2">
                  <span>$100</span>
                  <span>$5,000</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-base font-extrabold text-gray-900 mb-4">
                  <span className="flex items-center gap-3">
                    <TrendingUp className="size-6 text-gray-900" />
                    Conversion Rate (%)
                  </span>
                  <span className="text-3xl font-black text-gray-900">{conversionRate}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-sm font-bold text-gray-700 mt-2">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-200 to-amber-100 rounded-2xl shadow-2xl p-10 border-4 border-amber-400">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Your Potential Results</h3>

              <div className="space-y-5">
                <div className="flex items-center justify-between pb-5 border-b-4 border-amber-300">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-white rounded-full shadow-lg">
                      <Users className="size-7 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-gray-900">Calls Recovered</div>
                      <div className="text-sm text-gray-800 font-bold">Per week</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-gray-900">{roi.recoveredCalls}</div>
                </div>

                <div className="flex items-center justify-between pb-5 border-b-4 border-amber-300">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-white rounded-full shadow-lg">
                      <TrendingUp className="size-7 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-gray-900">New Deals</div>
                      <div className="text-sm text-gray-800 font-bold">Per week</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-gray-900">{roi.newDeals}</div>
                </div>

                <div className="flex items-center justify-between pb-5 border-b-4 border-amber-300">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-white rounded-full shadow-lg">
                      <Clock className="size-7 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-gray-900">Time Saved</div>
                      <div className="text-sm text-gray-800 font-bold">Minutes per week</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-gray-900">{roi.timeSaved}</div>
                </div>

                <div className="flex items-center justify-between pb-5 border-b-4 border-amber-300">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-white rounded-full shadow-lg">
                      <DollarSign className="size-7 text-gray-900" />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-gray-900">Monthly Revenue</div>
                      <div className="text-sm text-gray-800 font-bold">Additional income</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-gray-900">${roi.monthlyRevenue.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-10 text-white border-4 border-gray-700">
              <div className="text-center">
                <div className="text-lg font-extrabold mb-3 text-gray-100">Projected Yearly Revenue</div>
                <div className="text-6xl font-black mb-3">${roi.yearlyRevenue.toLocaleString()}</div>
                <div className="text-gray-200 text-base font-bold">From recovered missed calls alone</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xl font-extrabold rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 border-4 border-amber-800"
          >
            Start Recovering Revenue Today
            <TrendingUp className="size-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
