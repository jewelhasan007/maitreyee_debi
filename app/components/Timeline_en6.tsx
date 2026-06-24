'use client';

import Link from 'next/link';
import { timelineEvents } from '../lib/timelineData';

export default function Timeline_en6() {
  return (
    <section 
      id="timeline" 
      className="timeline-section relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Subtle Watermark - Same as other sections */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('/images/watermark/watermark3.jpg')`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: '260px',
          opacity: 0.08,
          filter: 'grayscale(100%) brightness(1.5)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="timeline-header">
          {/* <div className="timeline-label">
            সাংস্কৃতিক ও সামাজিক কার্যক্রম
          </div> */}
          <h2 className="timeline-heading">
            Cultural & Community Work
          </h2>
          <p className="timeline-subtitle"></p>
        </div>

        {/* Desktop Timeline */}
        <div className="timeline-desktop">
          <div className="timeline-line" />

          {timelineEvents.map((event, index) => {
            const isTop = index % 2 === 0;

            return (
              <div
                key={event.slug}
                className={`timeline-node ${
                  isTop ? 'timeline-node-top' : 'timeline-node-bottom'
                }`}
              >
                <div className="timeline-circle">{index + 1}</div>

                <Link
                  href={`/timeline/${event.slug}`}
                  className="timeline-card"
                >
                  <span className="timeline-year">{event.year}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="timeline-mobile">
          {timelineEvents.map((event, index) => (
            <div key={event.slug} className="mobile-item">
              <div className="mobile-dot">{index + 1}</div>

              <Link
                href={`/timeline/${event.slug}`}
                className="mobile-card"
              >
                <span className="mobile-year">{event.year}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}