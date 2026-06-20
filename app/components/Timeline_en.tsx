export default function Timeline_en() {
  const timelineEvents = [
    {
      year: '1950',
      event: 'Birth',
      description:
        'Maitreyi Devi was born in Bangladesh.',
    },
    {
      year: '1970',
      event: 'Beginning of Artistic Journey',
      description:
        'First exhibitions and publications began.',
    },
    {
      year: '1985',
      event: 'International Recognition',
      description:
        'Received recognition in the global art community.',
    },
    {
      year: '2000',
      event: 'Cultural Preservation Center Established',
      description:
        'Established a center for preserving traditional arts.',
    },
    {
      year: '2015',
      event: 'National Award',
      description:
        'Received a national award for cultural contribution.',
    },
    {
      year: '2020',
      event: 'Digital Movement',
      description:
        'Started spreading heritage through online platforms.',
    },
  ];

  return (
    <section id="timeline">
      <div className="section-label">TIMELINE</div>
      <h2 className="section-title">Life Journey</h2>
      <p className="section-subtitle">
        Milestones and moments that shaped a legacy
      </p>

      <div className="timeline-container">
        {timelineEvents.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-event">{item.event}</div>
            <div className="timeline-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}