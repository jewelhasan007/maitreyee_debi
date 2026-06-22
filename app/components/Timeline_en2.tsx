'use client';


import React, { useState } from 'react';

export default function Timeline_en2({
  title = "Website design R&D process weekly timeline",
  description = "Following slide covers website research and development phases that can be used by businesses to increase customer reach and engagement. It includes stages such gather data, planning, web designing, web development, testing and maintenance.",
  
  phases = [
    {
      id: 1,
      week: "Week 1",
      phase: "Gather data",
      position: "top",
      color: "bg-cyan-500",
      icon: "📊",
      items: [
        "Identify target audience for site",
        "Determine suitable content type",
        "Add text here"
      ]
    },
    {
      id: 2,
      week: "Week 2",
      phase: "Planning",
      position: "bottom",
      color: "bg-red-500",
      icon: "📋",
      items: [
        "Develop site map for navigation",
        "Decide technologies to operate website",
        "Add text here"
      ]
    },
    {
      id: 3,
      week: "Week 3",
      phase: "Web designing",
      position: "top",
      color: "bg-cyan-500",
      icon: "🎨",
      items: [
        "Decide colour and layouts",
        "Develop final design and get approval",
        "Add text here"
      ]
    },
    {
      id: 4,
      week: "Week 4",
      phase: "Web development",
      position: "bottom",
      color: "bg-red-500",
      icon: "💻",
      items: [
        "Create functional site",
        "Use elements: Wordpress, newsletter",
        "Add text here"
      ]
    },
    {
      id: 5,
      week: "Week 5",
      phase: "Testing",
      position: "top",
      color: "bg-cyan-500",
      icon: "✓",
      items: [
        "Conduct quality assurance testing",
        "Use libraries,Js code for final effects",
        "Add text here"
      ]
    },
    {
      id: 6,
      week: "Week 6",
      phase: "Maintenance",
      position: "bottom",
      color: "bg-red-500",
      icon: "⚙️",
      items: [
        "Revise and update site content",
        "Update site as per latest technology",
        "Add text here"
      ]
    }
  ]
}) {
  const [hoveredPhase, setHoveredPhase] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Top phase boxes */}
          <div className="mb-32 space-y-8">
            {phases
              .filter(p => p.position === "top")
              .map((phase) => (
                <div key={phase.id} className="flex items-start group">
                  {/* Phase box */}
                  <div
                    className={`relative ${phase.color} text-white rounded-full px-8 py-4 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 flex-shrink-0`}
                    onMouseEnter={() => setHoveredPhase(phase.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                  >
                    {/* Icon */}
                    <div className="text-4xl">{phase.icon}</div>
                    
                    {/* Text */}
                    <div className="whitespace-nowrap">
                      <p className="font-bold text-lg">{phase.phase}</p>
                    </div>

                    {/* Connection line to timeline */}
                    <div className="absolute -right-12 top-1/2 w-12 h-1 bg-gray-400 transform -translate-y-1/2" />
                  </div>

                  {/* Description box (appears on hover or always visible) */}
                  <div
                    className={`ml-12 flex-1 bg-white border-2 border-gray-200 rounded-lg p-6 transition-all duration-300 ${
                      hoveredPhase === phase.id
                        ? "border-gray-400 shadow-lg"
                        : "border-gray-200"
                    }`}
                  >
                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-gray-400 mt-1">○</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>

          {/* Main horizontal timeline line */}
          <div className="relative my-16">
            {/* The line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300" />

            {/* Timeline markers */}
            <div className="flex justify-between relative py-8">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className="flex flex-col items-center relative"
                  style={{ flex: 1 }}
                >
                  {/* Circular marker */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div
                      className={`${
                        phase.position === "top"
                          ? "bg-cyan-500"
                          : "bg-red-500"
                      } text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl border-4 border-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-110`}
                      onMouseEnter={() => setHoveredPhase(phase.id)}
                      onMouseLeave={() => setHoveredPhase(null)}
                    >
                      {String(phase.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Week label */}
                  <p className="text-center font-bold text-gray-800 mt-4 whitespace-nowrap">
                    {phase.week}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom phase boxes */}
          <div className="mt-32 space-y-8">
            {phases
              .filter(p => p.position === "bottom")
              .map((phase) => (
                <div key={phase.id} className="flex items-start group">
                  {/* Description box (appears on hover or always visible) */}
                  <div
                    className={`flex-1 bg-white border-2 border-gray-200 rounded-lg p-6 transition-all duration-300 ${
                      hoveredPhase === phase.id
                        ? "border-gray-400 shadow-lg"
                        : "border-gray-200"
                    }`}
                  >
                    <ul className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-gray-400 mt-1">○</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase box */}
                  <div
                    className={`relative ${phase.color} text-white rounded-full px-8 py-4 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 flex-shrink-0 ml-12`}
                    onMouseEnter={() => setHoveredPhase(phase.id)}
                    onMouseLeave={() => setHoveredPhase(null)}
                  >
                    {/* Connection line from timeline */}
                    <div className="absolute -left-12 top-1/2 w-12 h-1 bg-gray-400 transform -translate-y-1/2" />

                    {/* Icon */}
                    <div className="text-4xl">{phase.icon}</div>
                    
                    {/* Text */}
                    <div className="whitespace-nowrap">
                      <p className="font-bold text-lg">{phase.phase}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            This slide is 100% editable. Adapt it to your need and capture your audience's attention.
          </p>
        </div>
      </div>
    </section>
  );
}