export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-title">
          মৈত্রেয়ী <span>দেবী</span>
        </div>
        <div className="footer-subtitle">
          Preserving heritage, inspiring futures. Join our cultural movement and
          celebrate the timeless beauty of Bengali traditions.
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#books" className="footer-link">
            Books
          </a>
          <a href="#music" className="footer-link">
            Music
          </a>
          <a href="#gallery" className="footer-link">
            Gallery
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Maitreyee Debi. All rights reserved. |
            Built with passion for culture preservation.
          </p>
        </div>
      </div>
    </footer>
  );
}
