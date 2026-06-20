export default function Footer_en() {
  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f0f0f',
      }}
    >
      {/* Full background image */}
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

      {/* Dark overlay for readability (optional but recommended) */}
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
        style={{ position: 'relative', zIndex: 2 }}
        className="footer-content"
      >
        <div className="footer-title">
          Maitreyee <span>Devi</span>
        </div>

        <div className="footer-subtitle">
          Preserving heritage, inspiring futures. Join our cultural movement and
          celebrate the timeless beauty of Bengali traditions.
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#books" className="footer-link">Books</a>
          <a href="#music" className="footer-link">Music</a>
          <a href="#gallery" className="footer-link">Gallery</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Maitreyee Devi. All rights reserved. |
            Built with passion for cultural preservation.
          </p>
        </div>
      </div>
    </footer>
  );
}