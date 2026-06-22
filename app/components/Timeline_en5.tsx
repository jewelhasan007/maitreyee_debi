
'use client';
import React, { useState } from 'react';

export default function Timeline_en5() {
  const [activeIndex, setActiveIndex] = useState(0);

  const events = [
    {
      year: "2020",
      title: "Project Started",
      description: "Began the journey with a vision and solid foundation",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      year: "2021",
      title: "First Milestone",
      description: "Achieved our first major goals and expanded the team",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Scaled operations and reached new markets worldwide",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      year: "2023",
      title: "Market Leader",
      description: "Became industry leader with innovative solutions",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Established presence in 50+ countries worldwide",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      year: "2025",
      title: "New Era",
      description: "Leading the industry with cutting-edge technology",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Timeline
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our milestones and achievements
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex gap-6 cursor-pointer group"
              onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
            >
              {/* Left side - Year and dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Dot */}
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.gradient} flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${
                    activeIndex === idx ? "scale-125 ring-4 ring-gray-700" : "group-hover:scale-110"
                  }`}
                >
                  {idx + 1}
                </div>

                {/* Vertical line (except last) */}
                {idx !== events.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-gray-600 to-gray-700 mt-2" />
                )}
              </div>

              {/* Right side - Content */}
              <div
                className={`flex-1 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-gray-800 bg-opacity-80 border-gray-600 shadow-lg shadow-gray-700/20"
                    : "hover:bg-gray-800 hover:bg-opacity-60"
                }`}
              >
                {/* Year */}
                <div className={`text-sm font-bold mb-2 transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-gradient-to-r " + event.gradient + " bg-clip-text text-transparent"
                    : "text-gray-400"
                }`}>
                  {event.year}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {event.title}
                </h3>

                {/* Description */}
                <p className={`text-gray-400 leading-relaxed transition-all duration-300 ${
                  activeIndex === idx ? "text-gray-300" : ""
                }`}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            Click on any milestone to see more details
          </p>
        </div>
      </div>
    </div>
  );
}