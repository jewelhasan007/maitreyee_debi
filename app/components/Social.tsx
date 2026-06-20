'use client';

import { useState } from 'react';

export default function Social() {
  const [igUrl, setIgUrl] = useState('');
  const [fbUrl, setFbUrl] = useState('');
  const [igEmbeds, setIgEmbeds] = useState<string[]>([]);
  const [fbEmbeds, setFbEmbeds] = useState<string[]>([]);

  const embedIG = () => {
    if (!igUrl.includes('instagram.com')) {
      alert('সঠিক Instagram URL দিন');
      return;
    }
    setIgEmbeds([...igEmbeds, igUrl]);
    setIgUrl('');
  };

  const embedFB = () => {
    if (!fbUrl.includes('facebook.com')) {
      alert('সঠিক Facebook URL দিন');
      return;
    }
    setFbEmbeds([...fbEmbeds, fbUrl]);
    setFbUrl('');
  };

  return (
    <section id="social">
      <div className="section-label">সোশ্যাল · SOCIAL</div>
      <h2 className="section-title">সংযোগ স্থাপন করুন</h2>
      <p className="section-subtitle">Follow my journey across social platforms</p>

      <div className="social-intro">
        <p>
          আমার সাথে সোশ্যাল মিডিয়ায় যুক্ত থাকুন এবং সাংস্কৃতিক আন্দোলনের অংশ হন।
          আমরা একসাথে ঐতিহ্যকে ভবিষ্যতের দিকে এগিয়ে নিয়ে যাচ্ছি।
        </p>
      </div>

      <div className="social-two-col">
        <div>
          <h3 className="section-label" style={{ marginBottom: '1rem' }}>
            📱 Instagram
          </h3>
          <div className="social-input-group">
            <input
              type="text"
              className="social-input"
              placeholder="Instagram Post URL..."
              value={igUrl}
              onChange={(e) => setIgUrl(e.target.value)}
            />
            <button className="btn-embed" onClick={embedIG}>
              এম্বেড করুন
            </button>
          </div>
          <div className="embeds-container" id="igEmbeds">
            {igEmbeds.map((url, idx) => (
              <div key={idx} style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                  }}
                >
                  📱 View on Instagram
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="section-label" style={{ marginBottom: '1rem' }}>
            👍 Facebook
          </h3>
          <div className="social-input-group">
            <input
              type="text"
              className="social-input"
              placeholder="Facebook Post URL..."
              value={fbUrl}
              onChange={(e) => setFbUrl(e.target.value)}
            />
            <button className="btn-embed" onClick={embedFB}>
              এম্বেড করুন
            </button>
          </div>
          <div className="embeds-container" id="fbEmbeds">
            {fbEmbeds.map((url, idx) => (
              <div key={idx} style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.8rem',
                    textDecoration: 'none',
                  }}
                >
                  👍 View on Facebook
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
