export default function About_en() {
  return (
    <section id="about">
      <div className="section-label">INTRODUCTION · ABOUT</div>
      <h2 className="section-title">My Story</h2>
      <p className="section-subtitle">
        Traditional art, modern voice, timeless stories
      </p>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Maitreyi Devi is a renowned writer, artist, and cultural preservationist
            dedicated to preserving and promoting the heritage of Bengali culture.
          </p>
          <p>
            <span className="about-highlight">Traditional art forms</span> hold deep
            cultural significance. Through my work, I explore the intersection of
            heritage and contemporary expression, creating bridges between the past
            and the present.
          </p>
          <p>
            My writing, artwork, and music—all strive to find a place in people’s hearts.
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

        <div className="about-photo">
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              opacity: 0.3,
            }}
          >
            📸
          </div>
        </div>
      </div>
    </section>
  );
}