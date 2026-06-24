'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      className="relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Background Watermark */}
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

      {/* Original Content - Unchanged */}
      <div className="relative z-10">
        <div className="timeline-header">
          <h2 className="timeline-heading">
            Get in Touch
          </h2>

          <p className="timeline-subtitle">
            Let&apos;s collaborate, create, and preserve culture together
          </p>
        </div>

        <div className="contact-wrapper">
          {/* LEFT — INFO PANEL */}
          <div className="contact-info-panel">
            <div className="info-blob blob-1" />
            <div className="info-blob blob-2" />

            <div className="info-content">
              <h3>Let&apos;s start a conversation</h3>
              <p>
                Whether it&apos;s a collaboration, an exhibition, or simply a
                conversation about culture — I&apos;d love to hear from you.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 6 10-6" />
                    </svg>
                  </span>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">hello@maitreyidevi.com</div>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <div className="info-label">Phone</div>
                    <div className="info-value">+16 47XXX XXXXX</div>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-value">New York, USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM CARD */}
          <form className="contact-form-card" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-banner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent successfully!
              </div>
            )}

            <div className="form-group">
              <span className="field-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                </svg>
              </span>
              <input
                type="text"
                className="form-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="form-label">Name</label>
            </div>

            <div className="form-group">
              <span className="field-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </span>
              <input
                type="email"
                className="form-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="form-label">Email</label>
            </div>

            <div className="form-group">
              <span className="field-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-input"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="form-label">Subject</label>
            </div>

            <div className="form-group">
              <span className="field-icon textarea-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <textarea
                className="form-textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
              ></textarea>
              <label className="form-label">Message</label>
            </div>

            <button type="submit" className={`btn-send ${submitted ? 'sent' : ''}`}>
              <span>{submitted ? '✓ Sent!' : 'Send Message'}</span>
              {!submitted && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 0;
          max-width: 1000px;
          margin: 3rem auto 0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px -15px rgba(45, 27, 78, 0.25);
        }

        @media (max-width: 800px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }

        /* LEFT PANEL */
        .contact-info-panel {
          position: relative;
          background: linear-gradient(
            160deg,
            var(--ink, #2d1b4e) 0%,
            #4a2456 55%,
            var(--maroon, #6b2737) 100%
          );
          color: #fff;
          padding: 3rem 2.5rem;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .info-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.35;
          pointer-events: none;
        }
        .blob-1 {
          width: 220px;
          height: 220px;
          background: var(--saffron, #d18b2c);
          top: -60px;
          right: -60px;
        }
        .blob-2 {
          width: 180px;
          height: 180px;
          background: var(--teal, #2a7f7f);
          bottom: -50px;
          left: -50px;
        }

        .info-content {
          position: relative;
          z-index: 1;
        }

        .info-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.75rem;
          line-height: 1.3;
        }

        .info-content > p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 2.25rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }

        .info-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-icon svg {
          width: 18px;
          height: 18px;
        }

        .info-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 2px;
        }

        .info-value {
          font-size: 0.92rem;
          font-weight: 500;
        }

        /* RIGHT FORM CARD */
        .contact-form-card {
          background: #fff;
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .success-banner {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(42, 127, 127, 0.1);
          color: var(--teal, #2a7f7f);
          border: 1px solid rgba(42, 127, 127, 0.3);
          padding: 0.8rem 1rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          animation: slideIn 0.3s ease;
        }

        .success-banner svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-group {
          position: relative;
        }

        .field-icon {
          position: absolute;
          left: 14px;
          top: 17px;
          width: 18px;
          height: 18px;
          color: #a89a8c;
          pointer-events: none;
          z-index: 2;
          transition: color 0.2s ease;
        }

        .field-icon svg {
          width: 100%;
          height: 100%;
        }

        .textarea-icon {
          top: 17px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1.15rem 1rem 0.6rem 2.6rem;
          border: 1.5px solid #e4dcd0;
          border-radius: 12px;
          background: #faf7f1;
          font-size: 0.95rem;
          color: var(--ink, #2d1b4e);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-sizing: border-box;
        }

        .form-textarea {
          min-height: 110px;
          resize: vertical;
          padding-top: 1.6rem;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--saffron, #d18b2c);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(209, 139, 44, 0.12);
        }

        .form-input:focus ~ .field-icon,
        .form-textarea:focus ~ .field-icon {
          color: var(--saffron, #d18b2c);
        }

        .form-label {
          position: absolute;
          left: 2.6rem;
          top: 17px;
          font-size: 0.95rem;
          color: #998a7c;
          pointer-events: none;
          transition: all 0.18s ease;
        }

        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label,
        .form-textarea:focus + .form-label,
        .form-textarea:not(:placeholder-shown) + .form-label {
          top: 7px;
          left: 2.6rem;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--saffron, #d18b2c);
        }

        .btn-send {
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--saffron, #d18b2c), #b5701b);
          color: #fff;
          font-size: 0.98rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
          box-shadow: 0 8px 20px -6px rgba(209, 139, 44, 0.55);
        }

        .btn-send:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -6px rgba(209, 139, 44, 0.65);
        }

        .btn-send:active {
          transform: translateY(0);
        }

        .btn-send svg {
          width: 18px;
          height: 18px;
          transition: transform 0.2s ease;
        }

        .btn-send:hover svg {
          transform: translateX(4px);
        }

        .btn-send.sent {
          background: linear-gradient(135deg, var(--teal, #2a7f7f), #1f5f5f);
          box-shadow: 0 8px 20px -6px rgba(42, 127, 127, 0.5);
        }
      `}</style>
    </section>
  );
}