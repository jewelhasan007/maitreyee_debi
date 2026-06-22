'use client';

export default function Timeline_en6() {
  const events = [
    {
      year: '2020',
      title: 'Project Started',
      description:
        'Began the journey with a vision and solid foundation.',
    },
    {
      year: '2021',
      title: 'First Milestone',
      description:
        'Achieved our first major goals and expanded the team.',
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description:
        'Scaled operations and reached new markets worldwide.',
    },
    {
      year: '2023',
      title: 'Market Leader',
      description:
        'Became industry leader with innovative solutions.',
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description:
        'Established presence in 50+ countries worldwide.',
    },
    {
      year: '2025',
      title: 'New Era',
      description:
        'Leading the industry with cutting-edge technology.',
    },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <div className="timeline-label">
          Timeline
        </div>

        <h2 className="timeline-heading">
          Our Journey
        </h2>

        <p className="timeline-subtitle">
          A timeline of our milestones and achievements
        </p>
      </div>

      {/* ============================= */}
      {/* Desktop Timeline */}
      {/* ============================= */}
      <div className="timeline-desktop">
        <div className="timeline-line" />

        {events.map((event, index) => {
          const isTop = index % 2 === 0;

          return (
            <div
              key={index}
              className={`timeline-node ${
                isTop
                  ? 'timeline-node-top'
                  : 'timeline-node-bottom'
              }`}
            >
              {isTop && (
                <div className="timeline-card">
                  <span className="timeline-year">
                    {event.year}
                  </span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>
                </div>
              )}

              <div className="timeline-circle">
                {index + 1}
              </div>

              {!isTop && (
                <div className="timeline-card">
                  <span className="timeline-year">
                    {event.year}
                  </span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ============================= */}
      {/* Mobile Timeline */}
      {/* ============================= */}
      <div className="timeline-mobile">
        {events.map((event, index) => (
          <div
            key={index}
            className="mobile-item"
          >
            <div className="mobile-dot">
              {index + 1}
            </div>

            <div className="mobile-card">
              <span className="mobile-year">
                {event.year}
              </span>

              <h3>{event.title}</h3>

              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}