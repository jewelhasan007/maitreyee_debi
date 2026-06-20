'use client';

export default function Books_en() {
 const books = [
    {
      id: 1,
      title: 'নক্শী কাঁথার মাঠ',
      desc: 'বাংলা লোকশিল্পের এক অনন্য অন্বেষণ',
      colorClass: 'book-cover-1',
      link: '#',
    },
    {
      id: 2,
      title: 'রঙিন কাহিনী',
      desc: 'ঐতিহ্য এবং আধুনিকতার মিলন',
      colorClass: 'book-cover-2',
      link: '#',
    },
    {
      id: 3,
      title: 'সুরের সন্ধানে',
      desc: 'বাংলা শাস্ত্রীয় সঙ্গীতের ভ্রমণ',
      colorClass: 'book-cover-3',
      link: '#',
    },
  ];
  return (
    <section id="books">
      <div className="section-label">BOOKS</div>
      <h2 className="section-title">My Publications</h2>
      <p className="section-subtitle">
        Words that resonate, stories that inspire
      </p>

      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <div className={`book-cover ${book.colorClass}`}>
              {book.title}
            </div>
            <div className="book-info">
              <div className="book-title-bn">{book.title}</div>
              <div className="book-desc">{book.desc}</div>
              <a href={book.link} className="book-link">
                Read → Explore
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}