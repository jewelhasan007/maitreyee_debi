'use client';

import React, { useState } from 'react';

export default function Timeline_en({
  title = "Life journey",
  subtitle = "Seven decades of artistic vision and cultural preservation",
  primaryColor = "#8b6f47",
  secondaryColor = "#a8845c",
  accentColor = "#d4a574",
  bgGradientFrom = "#f9f5f0",
  bgGradientTo = "#f4ede6",
  events = []
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Default events if none provided
  const defaultEvents = [
    {
      year: "1950",
      event: "Birth",
      description: "Maitreyi Devi was born in Bangladesh, into a landscape of artistic tradition.",
    },
    {
      year: "1970",
      event: "Beginning of Artistic Journey",
      description: "First exhibitions and publications began, establishing her voice in the art world.",
    },
    {
      year: "1985",
      event: "International Recognition",
      description: "Her work reached global audiences, bridging cultural boundaries through art.",
    },
    {
      year: "2000",
      event: "Cultural Preservation Center",
      description: "Founded a center dedicated to preserving and celebrating traditional Bengali arts.",
    },
    {
      year: "2015",
      event: "National Award",
      description: "Honored for lifetime contributions to cultural heritage and artistic innovation.",
    },
    {
      year: "2020",
      event: "Digital Movement",
      description: "Extended Bengali heritage to online platforms, reaching new generations globally.",
    }
  ];

  const timelineEvents = events.length > 0 ? events : defaultEvents;
  const totalYears = parseInt(timelineEvents[timelineEvents.length - 1].year) - parseInt(timelineEvents[0].year);

  return (
    <section 
      style={{
        background: `linear-gradient(135deg, ${bgGradientFrom} 0%, ${bgGradientTo} 100%)`,
        padding: '4rem 1.5rem'
      }}
      className="min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 style={{ color: '#1a1a1a' }} className="text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
            {title}
          </h2>
          <div 
            style={{ background: primaryColor, width: '64px', height: '3px', margin: '1.5rem auto' }}
            className="rounded-sm"
          />
          <p style={{ color: '#666' }} className="text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div 
            style={{
              background: `linear-gradient(180deg, ${accentColor} 0%, ${primaryColor} 50%, ${accentColor} 100%)`
            }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
          />

          {/* Mobile Line */}
          <div 
            style={{
              background: `linear-gradient(180deg, ${accentColor} 0%, ${primaryColor} 50%, ${accentColor} 100%)`
            }}
            className="lg:hidden absolute left-7 top-0 bottom-0 w-0.5"
          />

          {/* Events */}
          <div className="space-y-10 lg:space-y-16">
            {timelineEvents.map((event, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Desktop Layout - Alternating */}
                <div className="hidden lg:flex gap-12 items-start">
                  {/* Left side */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'flex justify-end' : 'invisible'}`}>
                    {idx % 2 === 0 && (
                      <div 
                        style={{
                          boxShadow: hoveredIndex === idx 
                            ? '0 20px 40px rgba(0,0,0,0.15)' 
                            : '0 4px 12px rgba(0,0,0,0.08)',
                          transform: hoveredIndex === idx ? 'translateY(-8px)' : 'translateY(0)'
                        }}
                        className="w-72 bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300"
                      >
                        <span 
                          style={{ 
                            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                            color: 'white'
                          }}
                          className="inline-block text-xs font-semibold px-4 py-2 rounded-full tracking-widest mb-6"
                        >
                          {event.year}
                        </span>
                        <h3 style={{ color: '#1a1a1a' }} className="text-xl font-medium mb-4 leading-snug serif">
                          {event.event}
                        </h3>
                        <p style={{ color: '#666' }} className="text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="flex-shrink-0 py-1">
                    <div 
                      style={{
                        borderColor: primaryColor,
                        boxShadow: `0 0 0 4px ${bgGradientFrom}, 0 0 12px rgba(0,0,0,0.12)`
                      }}
                      className="w-7 h-7 bg-white border-4 rounded-full flex items-center justify-center relative z-20"
                    >
                      <div 
                        style={{ background: primaryColor }}
                        className="w-2 h-2 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Right side */}
                  <div className={`flex-1 ${idx % 2 === 1 ? 'flex justify-start' : 'invisible'}`}>
                    {idx % 2 === 1 && (
                      <div 
                        style={{
                          boxShadow: hoveredIndex === idx 
                            ? '0 20px 40px rgba(0,0,0,0.15)' 
                            : '0 4px 12px rgba(0,0,0,0.08)',
                          transform: hoveredIndex === idx ? 'translateY(-8px)' : 'translateY(0)'
                        }}
                        className="w-72 bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300"
                      >
                        <span 
                          style={{ 
                            background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                            color: 'white'
                          }}
                          className="inline-block text-xs font-semibold px-4 py-2 rounded-full tracking-widest mb-6"
                        >
                          {event.year}
                        </span>
                        <h3 style={{ color: '#1a1a1a' }} className="text-xl font-medium mb-4 leading-snug serif">
                          {event.event}
                        </h3>
                        <p style={{ color: '#666' }} className="text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex gap-5 items-start pl-3">
                  {/* Dot */}
                  <div 
                    style={{
                      borderColor: primaryColor,
                      boxShadow: `0 0 0 3px ${bgGradientFrom}`
                    }}
                    className="flex-shrink-0 mt-1 w-6 h-6 bg-white border-3 rounded-full flex items-center justify-center relative z-20"
                  >
                    <div 
                      style={{ background: primaryColor }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                  </div>

                  {/* Card */}
                  <div 
                    style={{
                      boxShadow: hoveredIndex === idx 
                        ? '0 12px 28px rgba(0,0,0,0.12)' 
                        : '0 2px 8px rgba(0,0,0,0.06)',
                      transform: hoveredIndex === idx ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                    className="flex-1 bg-white rounded-xl p-5 border border-slate-200 transition-all duration-300"
                  >
                    <span 
                      style={{ 
                        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                        color: 'white'
                      }}
                      className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide mb-4"
                    >
                      {event.year}
                    </span>
                    <h3 style={{ color: '#1a1a1a' }} className="text-base font-medium mb-3 leading-snug serif">
                      {event.event}
                    </h3>
                    <p style={{ color: '#666' }} className="text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Summary */}
        <div className="mt-20 text-center">
          <div 
            style={{
              borderTopColor: accentColor,
              borderBottomColor: accentColor,
              color: primaryColor
            }}
            className="inline-block border-t border-b py-5 px-10 text-sm opacity-70 font-medium"
          >
            {totalYears} years of heritage and artistic vision
          </div>
        </div>
      </div>
    </section>
  );
}

// Alternative export with preset themes
export function TimelineWithTheme({ theme = 'warm', ...props }) {
  const themes = {
    warm: {
      primaryColor: '#8b6f47',
      secondaryColor: '#a8845c',
      accentColor: '#d4a574',
      bgGradientFrom: '#f9f5f0',
      bgGradientTo: '#f4ede6'
    },
    cool: {
      primaryColor: '#2c5282',
      secondaryColor: '#2d3748',
      accentColor: '#4299e1',
      bgGradientFrom: '#edf2f7',
      bgGradientTo: '#e2e8f0'
    },
    minimal: {
      primaryColor: '#1a202c',
      secondaryColor: '#2d3748',
      accentColor: '#718096',
      bgGradientFrom: '#f7fafc',
      bgGradientTo: '#edf2f7'
    }
  };

  return <AdvancedTimeline {...themes[theme]} {...props} />;
}