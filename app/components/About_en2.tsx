'use client';

export default function About_en() {
  const images1 = [
    '/images/about/image001.jpg',
    '/images/about/image002.jpg',
    '/images/about/image003.jpg',
    '/images/about/image004.jpg',
    '/images/about/image005.jpg',
    '/images/about/image010.jpg',
    '/images/about/image011.jpg',
    '/images/about/image012.jpg',
    '/images/about/image013.jpg',
    '/images/about/image014.jpg',
    '/images/about/image015.jpg',
  ];

  const images2 = [
    '/images/about/image016.jpg',
    '/images/about/image017.jpg',
    '/images/about/image018.jpg',
    '/images/about/image019.jpg',
    '/images/about/image020.jpg',
    '/images/about/image021.jpg',
    '/images/about/image022.jpg',
    '/images/about/image023.jpg',
    '/images/about/image024.jpg',
    '/images/about/image025.jpg',
    '/images/about/image026.jpg',
    '/images/about/image027.jpg',
    '/images/about/image028.jpg',
    '/images/about/image029.jpg',
    '/images/about/image030.jpg',
    '/images/about/image031.jpg',
    '/images/about/image032.jpg',
    '/images/about/image033.jpg',
  ];

  return (
    <section
      id="about"
      className="w-full px-6 md:px-12 lg:px-24 bg-white/50 text-[#5c52ba]"
    >
      {/* HEADER */}
         <div className="timeline-header">
               <h2 className="timeline-heading">
       My Story
        </h2>
        <p className="timeline-subtitle ">
           <span className="text-amber-600 font-medium font-bold"> Maitreyi Devi</span> - a lawyer by profession and an artist by soul, Maitreyee bridges the courtroom and the cultural stage with equal grace. Her four published books explore the tender landscapes of Bengali emotion, while her renditions of Rabindra Sangeet carry the warmth of her roots across continents.        
        </p>
        <h6 className="timeline-subtitle-h6 ">
          Culture is my roots, children are my future—the meaning of my life lies between the two.
        </h6>
      </div>

      {/* GRID */}
        {/* MARQUEE SIDE */}
        <div className="lg:col-span-6 overflow-hidden">

          {/* ROW 1 */}
          <div className="overflow-hidden marquee about-marquee">
            <div className="flex gap-4 w-max animate-scroll-left">
              {[...images1, ...images1].map((img, i) => (
                <img
                  key={`l-${i}`}
                  src={img}
                  alt="about"
                  className="h-44 md:h-52 w-auto rounded-xl object-cover hover:scale-105 transition-transform duration-600"
                />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="overflow-hidden marquee about-marquee">
            <div className="flex gap-4 w-max animate-scroll-right">
              {[...images2, ...images2].map((img, i) => (
                <img
                  key={`r-${i}`}
                  src={img}
                  alt="about"
                  className="h-44 md:h-52 w-auto rounded-xl object-cover hover:scale-105 transition-transform duration-600"
                />
              ))}
            </div>
          </div>
      
      </div>

                {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-10">

            {[
              { num: '50+', label: 'Published Books' },
              { num: '30+', label: 'Years Experience' },
              { num: '100+', label: 'Exhibitions' },
              { num: '100K+', label: 'Followers' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl text-center text-black bg-white/5 border border-black/10 backdrop-blur-md hover:bg-white/10 transition"
              >
                <div className="text-3xl font-bold text-amber-200">
                  {item.num}
                </div>
                <div className="text-black/70 text-sm mt-1">
                  {item.label}
                </div>
              </div>
            ))}

          </div>

      {/* ANIMATION */}
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
          animation: scroll-left 28s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 28s linear infinite;
        }

        .marquee:hover .animate-scroll-left,
        .marquee:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}