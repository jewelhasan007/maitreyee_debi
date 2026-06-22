// 'use client';

// export default function Timeline_en6() {
//   const events = [
//     {
//       year: 'বর্তমান',
//       title: 'শিশু সাক্ষরতা কার্যক্রম',
//       description:
//         'টরন্টোর বাঙালি শিশুদের বাংলা ভাষা ও সাহিত্যের সাথে পরিচয় করিয়ে দেওয়ার উদ্যোগ — পাঠশালা, গল্পবলা এবং বই উপহারের আয়োজন।',
//     },
//     {
//       year: '2023',
//       title: 'বৈশাখী উৎসব আয়োজন',
//       description:
//         'টরন্টো বাংলাদেশি কমিউনিটির সাথে বাংলা নববর্ষ উদযাপনে সক্রিয় ভূমিকা — সাংস্কৃতিক পরিবেশনা ও শিশু অনুষ্ঠান।',
//     },
//     {
//       year: '2022',
//       title: 'নারী অধিকার সচেতনতা',
//       description:
//         'প্রবাসী বাঙালি নারীদের আইনি অধিকার সম্পর্কে সচেতন করতে বিনামূল্যে আইনি পরামর্শ শিবির আয়োজন।',
//     },
  
//   ];

//   return (
//     <section className="timeline-section">
//       <div className="timeline-header">
//               <h2 className="timeline-heading">
//          Cultural & Community Work
//         </h2>
//       </div>

//       {/* ============================= */}
//       {/* Desktop Timeline */}
//       {/* ============================= */}
//       <div className="timeline-desktop">
//         <div className="timeline-line" />

//         {events.map((event, index) => {
//           const isTop = index % 2 === 0;

//           return (
//             <div
//               key={index}
//               className={`timeline-node text-center ${
//                 isTop
//                   ? 'timeline-node-top'
//                   : 'timeline-node-bottom'
//               }`}
//             >
//               {isTop && (
//                 <div className="timeline-card">
//                   <span className="timeline-year">
//                     {event.year}
//                   </span>

//                   <h3>{event.title}</h3>

//                   <p>{event.description}</p>
//                 </div>
//               )}

//               <div className="timeline-circle">
//                 {index + 1}
//               </div>

//               {!isTop && (
//                 <div className="timeline-card">
//                   <span className="timeline-year">
//                     {event.year}
//                   </span>

//                   <h3>{event.title}</h3>

//                   <p>{event.description}</p>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* ============================= */}
//       {/* Mobile Timeline */}
//       {/* ============================= */}
//       <div className="timeline-mobile">
//         {events.map((event, index) => (
//           <div
//             key={index}
//             className="mobile-item"
//           >
//             <div className="mobile-dot">
//               {index + 1}
//             </div>

//             <div className="mobile-card">
//               <span className="mobile-year">
//                 {event.year}
//               </span>

//               <h3>{event.title}</h3>

//               <p>{event.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';

import Link from 'next/link';
import { timelineEvents } from '../lib/timelineData';

export default function Timeline_en6() {
  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <div className="timeline-label">
          সাংস্কৃতিক ও সামাজিক কার্যক্রম
        </div>
        <h2 className="timeline-heading">
       Cultural & Community Work
        </h2>
        <p className="timeline-subtitle">
        </p>
      </div>

      {/* Desktop Timeline */}

      <div className="timeline-desktop">
        <div className="timeline-line" />

        {timelineEvents.map((event, index) => {
          const isTop = index % 2 === 0;

          return (
            <div
              key={event.slug}
              className={`timeline-node ${
                isTop
                  ? 'timeline-node-top'
                  : 'timeline-node-bottom'
              }`}
            >
              <div className="timeline-circle">
                {index + 1}
              </div>

              <Link
                href={`/timeline/${event.slug}`}
                className="timeline-card"
              >
                <span className="timeline-year">
                  {event.year}
                </span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Mobile Timeline */}

      <div className="timeline-mobile">
        {timelineEvents.map((event, index) => (
          <div
            key={event.slug}
            className="mobile-item"
          >
            <div className="mobile-dot">
              {index + 1}
            </div>

            <Link
              href={`/timeline/${event.slug}`}
              className="mobile-card"
            >
              <span className="mobile-year">
                {event.year}
              </span>

              <h3>{event.title}</h3>

              <p>{event.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}