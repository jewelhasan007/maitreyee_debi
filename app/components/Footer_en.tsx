"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer_en() {
  const social = [
    { icon: FaFacebookF, color: "#1877F2", link: "https://facebook.com" },
    { icon: FaInstagram, color: "#E1306C", link: "https://instagram.com" },
    { icon: FaYoutube, color: "#FF0000", link: "https://youtube.com" },
    { icon: FaXTwitter, color: "#000000", link: "https://x.com" },
    { icon: FaLinkedinIn, color: "#0A66C2", link: "https://linkedin.com" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0f0f0f",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
   
          inset: 0,
          backgroundImage: "url('/images/footer/footer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1rem",
          fontFamily: "var(--font-ubuntu)",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
<div
  className="title-container"
  style={{
    display: 'flex',
    flexDirection: 'column',        // mobile default
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    fontFamily: "var(--font-ubuntu)",
    fontSize: "2rem",
    fontWeight: 600,
    color: "#F0EBD6",
    marginBottom: "1rem",
    textAlign: 'center',
  }}
>
<Image
    src="/images/logo/logo2.jpg"
    alt="Maitreyee Devi"
    width={72}
    height={72}
    style={{
      borderRadius: '8px',
      objectFit: 'contain',
    }}
    priority
  />
  <div>
    Maitreyee{" "}
    <span style={{ color: "#D4A843", fontStyle: "italic" }}>
      Devi
    </span>
  </div>
</div>

        {/* SUBTITLE */}
        <div
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.8",
            color: "rgba(240,235,214,0.78)",
            marginBottom: "2rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Preserving heritage, inspiring futures. Join our cultural movement
          and celebrate the timeless beauty of Bengali traditions.
        </div>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            gap: "1.8rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {["About", "Books", "Music", "Gallery", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(240,235,214,0.9)",
                  textDecoration: "none",
                  transition: "0.25s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "#D4A843")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color =
                    "rgba(240,235,214,0.9)")
                }
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* BOTTOM TEXT */}
        <div
          style={{
            borderTop: "1px solid rgba(212,168,67,0.2)",
            paddingTop: "1.5rem",
            fontSize: "0.8rem",
            color: "rgba(240,235,214,0.65)",
          }}
        >
          © {new Date().getFullYear()} Maitreyee Devi. All rights reserved. |
          Built with passion for cultural preservation.
        </div>
      </div>

      {/* ✅ SOCIAL ICONS (BOTTOM RIGHT - FIXED HORIZONTAL) */}
      <div
        style={{
          position: "absolute",
          right: "25px",
          bottom: "25px",
          display: "flex",
          flexDirection: "row", // ✅ FIXED
          gap: "10px",
          zIndex: 5,
        }}
      >
        {social.map((s, i) => {
          const Icon = s.icon;

          return (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: s.color,
                fontSize: 16,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = s.color;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = `0 0 18px ${s.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = s.color;
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </footer>
  );
}