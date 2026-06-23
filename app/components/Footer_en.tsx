"use client";
export default function Footer_en() {
  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f0f0f', // ❗ kept same base background
      }}
    >
      {/* Background image (UNCHANGED) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/footer/footer.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Overlay (UNCHANGED) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          fontFamily: "'Hind Siliguri', sans-serif",
        }}
        className="footer-content"
      >
        {/* TITLE */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '2rem',
            fontWeight: 600,
            color: '#F0EBD6',
            marginBottom: '1rem',
            letterSpacing: '0.5px',
          }}
        >
          Maitreyee <span style={{ color: '#D4A843', fontStyle: 'italic' }}>Devi</span>
        </div>

        {/* SUBTITLE */}
        <div
          style={{
            fontSize: '0.95rem',
            lineHeight: '1.8',
            color: 'rgba(240,235,214,0.78)',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Preserving heritage, inspiring futures. Join our cultural movement and
          celebrate the timeless beauty of Bengali traditions.
        </div>

        {/* LINKS */}
        <div
          style={{
            display: 'flex',
            gap: '1.8rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          {['About', 'Books', 'Music', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '0.9rem',
                color: 'rgba(240,235,214,0.9)',
                textDecoration: 'none',
                transition: '0.25s ease',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = '#D4A843')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = 'rgba(240,235,214,0.9)')
              }
            >
              {item}
            </a>
          ))}
        </div>

        {/* BOTTOM */}
        <div
          style={{
            borderTop: '1px solid rgba(212,168,67,0.2)',
            paddingTop: '1.5rem',
            fontSize: '0.8rem',
            color: 'rgba(240,235,214,0.65)',
          }}
        >
          © {new Date().getFullYear()} Maitreyee Devi. All rights reserved. | Built with passion for cultural preservation.
        </div>
      </div>
    </footer>
  );
}