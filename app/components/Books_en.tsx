'use client';

import Image from 'next/image';
import Link from 'next/link';
import { booksAll } from '../lib/bookData';

export default function Books_en() {


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
          {booksAll.map((book) => (
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

                <Link
              href={`/book/${book.slug}`}
                 className="book-link"
                >
                  Read → Explore
                </Link>
       
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