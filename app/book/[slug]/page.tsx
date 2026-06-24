import Link from 'next/link';
import { notFound } from 'next/navigation';
import { booksAll } from '@/app/lib/bookData';
import Image from 'next/image';

export default async function BookDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = booksAll.find((item) => item.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <>
      <style>{`
        .book-detail-page {
          min-height: 100vh;
          padding-top: 68px;
          background: var(--ivory);
          font-family: 'Hind Siliguri', system-ui, sans-serif;
        }
        .book-detail-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 5vw 80px;
        }
        .book-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--saffron);
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 36px;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.3px;
          transition: color 0.2s;
        }
        .book-back-link:hover {
          color: var(--warm-bronze);
        }
        .book-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(212,168,67,0.22);
          box-shadow: 0 12px 48px rgba(26,43,28,0.11);
          background: #fff;
        }
        @media (max-width: 768px) {
          .book-card {
            grid-template-columns: 1fr;
          }
          .book-cover-panel {
            border-right: none !important;
            border-bottom: 1px solid rgba(212,168,67,0.15);
            min-height: 320px !important;
          }
        }
        .book-cover-panel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 56px 48px;
          min-height: 480px;
          background: linear-gradient(145deg, rgba(212,168,67,0.12) 0%, rgba(74,124,89,0.09) 100%);
          border-right: 1px solid rgba(212,168,67,0.15);
          overflow: hidden;
        }
        .cover-ring-outer {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(212,168,67,0.07);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }
        .cover-ring-inner {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(212,168,67,0.2);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }
        .cover-img-wrap {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 20px 40px rgba(26,43,28,0.28));
        }
        .cover-img-wrap img {
          border-radius: 10px;
          display: block;
          width: 260px !important;
          height: 370px !important;
          object-fit: cover !important;
          object-position: center !important;
        }
        .book-content-panel {
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
        }
        .book-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 14px;
        }
        .book-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 400;
          color: var(--indigo-deep);
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .book-subtitle {
          font-family: 'Hind Siliguri', system-ui, sans-serif;
          font-size: 1rem;
          color: var(--text-mid);
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .book-rule {
          width: 48px;
          height: 3px;
          background: var(--saffron);
          border-radius: 99px;
          margin-bottom: 20px;
        }
        .book-desc {
          font-family: 'Hind Siliguri', system-ui, sans-serif;
          font-size: 0.95rem;
          color: var(--text-mid);
          line-height: 1.8;
          margin-bottom: 22px;
        }
        .book-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        .book-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3px;
          color: var(--warm-bronze);
          background: rgba(212,168,67,0.10);
          border: 1px solid rgba(212,168,67,0.28);
          border-radius: 99px;
          padding: 4px 12px;
        }
        .book-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 28px;
        }
        .book-meta-item {
          background: rgba(212,168,67,0.06);
          border: 1px solid rgba(212,168,67,0.18);
          border-radius: 12px;
          padding: 12px 8px;
          text-align: center;
        }
        .book-meta-label {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-mid);
          margin-bottom: 4px;
        }
        .book-meta-value {
          font-family: 'Hind Siliguri', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--indigo-deep);
        }
        .book-buy-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 15px 28px;
          background: var(--saffron);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Hind Siliguri', system-ui, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(212,168,67,0.38);
          transition: background 0.2s, box-shadow 0.2s;
          margin-bottom: 10px;
        }
        .book-buy-btn:hover {
          background: var(--warm-bronze);
          box-shadow: 0 6px 24px rgba(184,144,58,0.45);
        }
        .book-trust {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          text-align: center;
          color: var(--text-light);
          letter-spacing: 0.3px;
        }
        .book-kantha {
          width: 100%;
          height: 32px;
          margin-top: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <main className="book-detail-page">
        <div className="book-detail-inner">

          {/* Back link */}
          <Link href="/" className="book-back-link">
            ← Back to Publications
          </Link>

          {/* Card */}
          <div className="book-card">

            {/* Left: cover */}
            <div className="book-cover-panel">
              <div className="cover-ring-outer" />
              <div className="cover-ring-inner" />
              <div className="cover-img-wrap">
                <Image
                  src={book.img}
                  alt={book.title}
                  width={260}
                  height={370}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>

            {/* Right: content */}
            <div className="book-content-panel">

              <p className="book-eyebrow">Books</p>

              <h1 className="book-title">{book.title}</h1>

              {book.desc && (
                <p className="book-subtitle">{book.desc}</p>
              )}

              <div className="book-rule" />

              <div className="book-tags">
                <span className="book-tag">Bengali Literature</span>
                <span className="book-tag">Classic Edition</span>
              </div>

              <div className="book-meta">
                <div className="book-meta-item">
                  <p className="book-meta-label">Format</p>
                  <p className="book-meta-value">Print & Digital</p>
                </div>
                <div className="book-meta-item">
                  <p className="book-meta-label">Delivery</p>
                  <p className="book-meta-value">Worldwide</p>
                </div>
                <div className="book-meta-item">
                  <p className="book-meta-label">Rating</p>
                  <p className="book-meta-value">★ 4.5 / 5</p>
                </div>
              </div>

              <a
                href={book.amazonUrl || 'https://www.amazon.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="book-buy-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                Buy on Amazon
              </a>

              <p className="book-trust">Secure checkout · Ships worldwide via Amazon</p>

            </div>
          </div>

          {/* Kantha divider */}
          <div className="book-kantha">
            <svg viewBox="0 0 800 32" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '32px' }}>
              <line x1="0" y1="16" x2="800" y2="16" stroke="rgba(212,168,67,0.25)" strokeWidth="1"/>
              {[80,160,240,320,400,480,560,640,720].map((x) => (
                <g key={x}>
                  <circle cx={x} cy="16" r="3" fill="none" stroke="rgba(212,168,67,0.45)" strokeWidth="1"/>
                  <circle cx={x} cy="16" r="1.2" fill="rgba(212,168,67,0.45)"/>
                </g>
              ))}
            </svg>
          </div>

        </div>
      </main>
    </>
  );
}