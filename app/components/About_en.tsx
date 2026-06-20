'use client';
export default function About_en() {
  const images1 = [
    '/images/about/image001.jpg',
    '/images/about/image002.jpg',
    '/images/about/image003.jpg',
    '/images/about/image004.jpg',
    '/images/about/image005.jpg',
  ];
  const images2 = [
    '/images/about/image010.jpg',
    '/images/about/image011.jpg',
    '/images/about/image012.jpg',
    '/images/about/image013.jpg',
    '/images/about/image014.jpg',
  ];

  return (
    <section id="about">
      <div className="section-label">INTRODUCTION · ABOUT</div>
      <h2 className="section-title">My Story</h2>
      <p className="section-subtitle">
        Traditional art, modern voice, timeless stories
      </p>

      <div className="about-grid">

        {/* TEXT */}
        <div className="about-text">
          <p>
            Maitreyi Devi is a renowned writer, artist, and cultural preservationist
            dedicated to preserving and promoting the heritage of Bengali culture.
          </p>

          <p>
            <span className="about-highlight">Traditional art forms</span> hold deep
            cultural significance. Through my work, I explore the intersection of
            heritage and contemporary expression.
          </p>

          <p>
            My writing, artwork, and music strive to connect past and present.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-label">Published Books</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-label">Exhibitions</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Followers</div>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="about-photo-marquee">

          {/* ROW 1 → LEFT */}
          <div className="marquee">
            <div className="track left">
              {[...images1, ...images1].map((img, i) => (
                <img key={`l-${i}`} src={img} alt="about" />
              ))}
            </div>
          </div>

          {/* ROW 2 → RIGHT */}
          <div className="marquee">
            <div className="track right">
              {[...images2, ...images2].map((img, i) => (
                <img key={`r-${i}`} src={img} alt="about" />
              ))}
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .about-photo-marquee {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow: hidden;
          width: 100%;
        }

        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .track {
          display: flex;
          width: max-content;
          gap: 1rem;
          will-change: transform;
        }

        .track :global(img) {
          height: 160px;
          width: auto;
          object-fit: cover;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .track.left {
          animation: scroll-left 25s linear infinite;
        }

        .track.right {
          animation: scroll-right 25s linear infinite;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .marquee:hover .track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}