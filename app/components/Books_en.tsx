'use client';

import Image from 'next/image';

export default function Books_en() {
  const books = [
    {
      id: 1,
      title: 'জন্মভূমি ও প্রিয়জন',
      desc: 'মৈত্রেয়ী দেবী-র লেখা — একুশে বইমেলা ২০২৪',
      colorClass: 'book-cover-1',
      img: '/images/books/jonmovhumi.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'কুম্কুম',
      desc: 'মৈত্রেয়ী দেবী-র অনবদ্য সৃষ্টি',
      colorClass: 'book-cover-2',
      img: '/images/books/jhumura.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'ফুল পাখিদের কিচির মিচির',
      desc: 'মৈত্রেয়ী দেবী-র শিশুতোষ গল্প',
      colorClass: 'book-cover-3',
      img: '/images/books/kichirmichir.jpg',
      link: '#',
    },
  ];

  return (
    <section 
      id="books" 
      className="relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Subtle Watermark - Same as About section */}
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
          <h2 className="timeline-heading">My Publications</h2>
          <p className="timeline-subtitle">
            Words that resonate, stories that inspire
          </p>
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className={`book-cover ${book.colorClass}`}>
                <Image
                  src={book.img}
                  alt={book.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="book-info">
                <div className="book-title-bn">{book.title}</div>
                <div className="book-desc">{book.desc}</div>
                <a href={book.link} className="book-link">
                  Read → Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .book-cover {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}