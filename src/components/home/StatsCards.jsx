import React from "react";

const StatsCards = () => {
  const stats = [
    {
      title: "Racha Actual",
      value: "5",
      unit: "Días",
      icon: "🔥",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Módulos",
      value: "2",
      unit: "/ 8",
      icon: "✅",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "XP Total",
      value: "1250",
      unit: "XP",
      icon: "🏆",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-xl p-6 border border-slate-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-xl`}
            >
              {stat.icon}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-gray-400 text-lg">{stat.unit}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
