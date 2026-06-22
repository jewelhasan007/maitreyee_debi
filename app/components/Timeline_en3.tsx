
'use client';
import React, { useState } from 'react';

export default function Timeline_en3() {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Timeline
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Journey through our milestones and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-8 md:space-y-12">
            {events.map((event, idx) => (
              <div
                key={idx}
                className={`relative pl-20 md:pl-0 ${
                  idx % 2 === 0 ? "md:mr-auto md:w-1/2 md:pr-20" : "md:ml-auto md:w-1/2 md:pl-20"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-white rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 transition-all duration-300 cursor-pointer hover:scale-125 ${
                    activeIndex === idx ? "scale-125 shadow-lg shadow-blue-500" : ""
                  }`}
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                />

                {/* Card */}
                <div
                  className={`bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-opacity-10 hover:border-opacity-20 cursor-pointer ${
                    activeIndex === idx ? "ring-2 ring-blue-500 bg-opacity-10" : ""
                  }`}
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                >
                  {/* Year */}
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                    {event.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {event.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 text-blue-400 text-sm font-semibold">
                    {activeIndex === idx ? "← Click to collapse" : "Click to expand →"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm">
            Scroll down to see all milestones
          </p>
        </div>
      </div>
    </div>
  );
}