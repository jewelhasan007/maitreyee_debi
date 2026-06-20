export default function Timeline() {
  const timelineEvents = [
    {
      year: '১৯৫০',
      event: 'জন্ম',
      description:
        'মৈত্রেয়ী দেবী বাংলাদেশে জন্মগ্রহণ করেন।',
    },
    {
      year: '১৯৭০',
      event: 'শিল্প যাত্রা শুরু',
      description:
        'প্রথম প্রদর্শনী এবং লেখা প্রকাশনা শুরু হয়।',
    },
    {
      year: '১৯৮৫',
      event: 'আন্তর্জাতিক স্বীকৃতি',
      description:
        'বিশ্বব্যাপী শিল্প সম্প্রদায়ে স্বীকৃতি লাভ।',
    },
    {
      year: '২০০০',
      event: 'সাংস্কৃতিক সংরক্ষণ কেন্দ্র প্রতিষ্ঠা',
      description: 'ঐতিহ্যবাহী শিল্পকলা সংরক্ষণের জন্য কেন্দ্র স্থাপন।',
    },
    {
      year: '২০১৫',
      event: 'জাতীয় পুরস্কার',
      description:
        'সাংস্কৃতিক অবদানের জন্য জাতীয় পুরস্কার প্রাপ্ত।',
    },
    {
      year: '২০২০',
      event: 'ডিজিটাল আন্দোলন',
      description:
        'অনলাইন প্ল্যাটফর্মে ঐতিহ্য ছড়িয়ে দেওয়া শুরু।',
    },
  ];

  return (
    <section id="timeline">
      <div className="section-label">জীবনী · TIMELINE</div>
      <h2 className="section-title">জীবনের যাত্রা</h2>
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
