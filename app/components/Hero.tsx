export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-pattern"></div>

      <div className="hero-photo-wrap">
        <div className="hero-photo-placeholder">
          <svg
            className="portrait-svg"
            viewBox="0 0 200 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="80" r="40" fill="#E8A82A" opacity="0.8" />
            <path
              d="M 60 140 Q 60 160 80 170 L 120 170 Q 140 160 140 140 Z"
              fill="#F5EDD8"
              opacity="0.7"
            />
            <ellipse cx="100" cy="200" rx="50" ry="70" fill="#E8A82A" opacity="0.6" />
          </svg>
        </div>
        <div className="hero-photo-mask"></div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">WELCOME TO</div>
        <h1 className="hero-name-bn">মৈত্রেয়ী দেবী</h1>
        <p className="hero-name-en">Maitreyee Debi</p>

        <div className="hero-tagline">
          <p className="hero-tagline-bn">
            গল্পকার, শিল্পী এবং সাংস্কৃতিক সংরক্ষণশীল
          </p>
          <p className="hero-tagline-en">
            Storyteller, Artist & Cultural Preservationist
          </p>
        </div>

        <div className="hero-roles">
          <span className="hero-role-pill">লেখক · Author</span>
          <span className="hero-role-pill">শিল্পী · Artist</span>
          <span className="hero-role-pill">সংগীতজ্ঞ · Musician</span>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-wheel"></div>
      </div>
    </section>
  );
}
