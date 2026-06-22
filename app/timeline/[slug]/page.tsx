import Link from 'next/link';
import { notFound } from 'next/navigation';
import { timelineEvents } from '@/app/lib/timelineData';

export default async function TimelineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = timelineEvents.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <section className="timeline-detail">
      <div className="timeline-detail-container">
        <Link
          href="/"
          className="timeline-back"
        >
          ← Back to Timeline
        </Link>

        <span className="timeline-detail-year">
          {event.year}
        </span>

        <h1>{event.title}</h1>

        <p className="timeline-detail-desc">
          {event.description}
        </p>

        <div className="timeline-detail-content">
          {event.content}
        </div>
      </div>
    </section>
  );
}