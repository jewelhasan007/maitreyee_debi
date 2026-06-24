'use client';

export default function About_en() {
  const images1 = [
    '/images/about/image001.jpg', '/images/about/image002.jpg', '/images/about/image003.jpg',
    '/images/about/image004.jpg', '/images/about/image005.jpg', '/images/about/image010.jpg',
    '/images/about/image011.jpg', '/images/about/image012.jpg', '/images/about/image013.jpg',
    '/images/about/image014.jpg', '/images/about/image015.jpg',
  ];

  const images2 = [
    '/images/about/image016.jpg', '/images/about/image017.jpg', '/images/about/image018.jpg',
    '/images/about/image019.jpg', '/images/about/image020.jpg', '/images/about/image021.jpg',
    '/images/about/image022.jpg', '/images/about/image023.jpg', '/images/about/image024.jpg',
    '/images/about/image025.jpg', '/images/about/image026.jpg', '/images/about/image027.jpg',
    '/images/about/image028.jpg', '/images/about/image029.jpg', '/images/about/image030.jpg',
    '/images/about/image031.jpg', '/images/about/image032.jpg', '/images/about/image033.jpg',
  ];

  return (
    <section 
      id="about" 
      className="w-full px-6 md:px-12 lg:px-24 py-16 relative overflow-hidden "
      style={{
        background: 'transparent',           // Override global.css background
      }}
    >
      {/* Subtle Watermark Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('/images/watermark/watermark3.jpg')`, // ← Change this path to your watermark image
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: '220px',        // Adjust size (larger = less dense)
          opacity: 0.07,                  // Very light watermark
          filter: 'grayscale(100%) brightness(1.3)', // Makes it softer
        }}
      />

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="timeline-header">
          <h2 className="timeline-heading">My Story</h2>
          <p className="timeline-subtitle">
            <span className="text-amber-600 font-medium font-bold">Maitreyi Devi</span> - a lawyer by profession and an artist by soul, Maitreyee bridges the courtroom and the cultural stage with equal grace. Her four published books explore the tender landscapes of Bengali emotion, while her renditions of Rabindra Sangeet carry the warmth of her roots across continents.        
          </p>
          <h6 className="timeline-subtitle-h6">
            Culture is my roots, children are my future—the meaning of my life lies between the two.
          </h6>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* MARQUEE - First on mobile, Right on lg */}
          <div className="lg:col-span-9 order-1 lg:order-2 overflow-hidden">
            <div className="space-y-6">
              {/* Row 1 - Scroll Left */}
              <div className="overflow-hidden marquee">
                <div className="flex gap-4 w-max animate-scroll-left">
                  {[...images1, ...images1].map((img, i) => (
                    <img
                      key={`row1-${i}`}
                      src={img}
                      alt="Maitreyi Devi"
                      className="h-48 md:h-56 w-auto rounded-2xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>

              {/* Row 2 - Scroll Right */}
              <div className="overflow-hidden marquee">
                <div className="flex gap-4 w-max animate-scroll-right">
                  {[...images2, ...images2].map((img, i) => (
                    <img
                      key={`row2-${i}`}
                      src={img}
                      alt="Maitreyi Devi"
                      className="h-48 md:h-56 w-auto rounded-2xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STATS - Bottom on mobile, Left on lg */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-8">
              <div className="text-4xl p-4">
                <div className="flex flex-row flex-wrap gap-6 lg:flex-col lg:gap-3">
                  {[
                    { num: '4+', label: 'Published Books' },
                    { num: '20+', label: 'Years Experience' },
                    { num: '100+', label: 'Exhibitions' },
                    { num: '5K+', label: 'Followers' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`stat-box flex-1 flex flex-col md:flex-row md:items-center justify-between 
                                 py-5 lg:py-6 border-b border-black/10 lg:border-r lg:last:border-r-0 lg:border-b-0`}
                    >
                      <div className="stat-number text-4xl md:text-5xl font-bold text-amber-700 text-center md:text-left">
                        {item.num}
                      </div>

                      <div className="text-center md:text-right mt-2 md:mt-0">
                        <div className="stat-label text-[#5c5048] text-lg font-medium">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 42s linear infinite;
        }

        .marquee:hover .animate-scroll-left,
        .marquee:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}