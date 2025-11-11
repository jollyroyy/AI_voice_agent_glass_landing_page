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
    <section id="roi" className="py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-black leading-[1.1]">
            Calculate Your <span className="gradient-text">ROI</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            See how much revenue you could recover with AI voice automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200/50">
            <h3 className="text-2xl font-bold text-black mb-6">Your Business Metrics</h3>

            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm font-bold text-black mb-3">
                  <span className="flex items-center gap-2">
                    <Users className="size-5 text-black" />
                    Missed Calls Per Week
                  </span>
                  <span className="text-2xl text-black">{missedCalls}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm font-bold text-black mb-3">
                  <span className="flex items-center gap-2">
                    <DollarSign className="size-5 text-black" />
                    Average Deal Value
                  </span>
                  <span className="text-2xl text-black">${avgDealValue}</span>
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
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$100</span>
                  <span>$5,000</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-sm font-bold text-black mb-3">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="size-5 text-black" />
                    Conversion Rate (%)
                  </span>
                  <span className="text-2xl text-black">{conversionRate}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-3 bg-amber-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl shadow-xl p-8 border-2 border-amber-300/70">
              <h3 className="text-2xl font-bold text-black mb-6">Your Potential Results</h3>

              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b-2 border-amber-200">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-full">
                      <Users className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Calls Recovered</div>
                      <div className="text-xs text-gray-700 font-semibold">Per week</div>
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-black">{roi.recoveredCalls}</div>
                </div>

                <div className="flex items-center justify-between pb-4 border-b-2 border-amber-200">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-full">
                      <TrendingUp className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">New Deals</div>
                      <div className="text-xs text-gray-700 font-semibold">Per week</div>
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-black">{roi.newDeals}</div>
                </div>

                <div className="flex items-center justify-between pb-4 border-b-2 border-amber-200">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-full">
                      <Clock className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Time Saved</div>
                      <div className="text-xs text-gray-700 font-semibold">Minutes per week</div>
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-black">{roi.timeSaved}</div>
                </div>

                <div className="flex items-center justify-between pb-4 border-b-2 border-amber-200">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-full">
                      <DollarSign className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">Monthly Revenue</div>
                      <div className="text-xs text-gray-700 font-semibold">Additional income</div>
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-black">${roi.monthlyRevenue.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl shadow-xl p-8 text-white">
              <div className="text-center">
                <div className="text-sm font-bold mb-2 text-amber-100">Projected Yearly Revenue</div>
                <div className="text-5xl font-extrabold mb-2">${roi.yearlyRevenue.toLocaleString()}</div>
                <div className="text-amber-200 text-sm font-semibold">From recovered missed calls alone</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Recovering Revenue Today
            <TrendingUp className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
