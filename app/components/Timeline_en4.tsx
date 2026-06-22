
'use client';

import React, { useState } from 'react';

export default function Timeline_en4() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    {
      year: "2020",
      title: "Project Started",
      description: "Began the journey with a vision and solid foundation"
    },
    {
      year: "2021",
      title: "First Milestone",
      description: "Achieved our first major goals and expanded the team"
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Scaled operations and reached new markets worldwide"
    },
    {
      year: "2023",
      title: "Market Leader",
      description: "Became industry leader with innovative solutions"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Established presence in 50+ countries worldwide"
    },
    {
      year: "2025",
      title: "New Era",
      description: "Leading the industry with cutting-edge technology"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of our growth and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-16">
            {events.map((event, idx) => (
              <div
                key={idx}
                className={`relative pl-20 md:pl-0 ${
                  idx % 2 === 0 ? "md:mr-auto md:w-1/2 md:pr-16" : "md:ml-auto md:w-1/2 md:pl-16"
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full border-4 border-white transform md:-translate-x-1/2 transition-all duration-300 ${
                    hoveredIndex === idx ? "scale-125 shadow-lg shadow-blue-400" : ""
                  }`}
                />

                {/* Content */}
                <div
                  className={`transition-all duration-300 ${
                    hoveredIndex === idx ? "-translate-y-2" : ""
                  }`}
                >
                  {/* Year badge */}
                  <div className="inline-block text-sm font-bold text-blue-600 mb-2">
                    {event.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}