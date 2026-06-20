export default function About() {
  return (
    <section id="about">
      <div className="section-label">পরিচয় · ABOUT</div>
      <h2 className="section-title">আমার গল্প</h2>
      <p className="section-subtitle">
        Traditional art, modern voice, timeless stories
      </p>

      <div className="about-grid">
        <div className="about-text">
          <p>
            মৈত্রেয়ী দেবী একজন প্রখ্যাত লেখক, শিল্পী এবং সাংস্কৃতিক সংরক্ষণশীল যিনি
            বাংলা সংস্কৃতির ঐতিহ্য সংরক্ষণ এবং প্রচারে নিবেদিত।
          </p>
          <p>
            <span className="about-highlight">Traditional art forms</span> hold
            deep cultural significance. Through my work, I explore the intersection
            of heritage and contemporary expression, creating bridges between past
            and present.
          </p>
          <p>
            আমার লেখা, শিল্পকর্ম এবং সংগীত—সবকিছুই মানুষের হৃদয়ে স্থান করে নেওয়ার চেষ্টা
            করে।
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-number">৫০+</div>
              <div className="stat-label">বই প্রকাশিত</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">৩০+</div>
              <div className="stat-label">বছর অভিজ্ঞতা</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">১০০+</div>
              <div className="stat-label">প্রদর্শনী</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">১০০K+</div>
              <div className="stat-label">অনুসরণকারী</div>
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
