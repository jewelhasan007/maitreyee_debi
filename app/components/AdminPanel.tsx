'use client';

import { useState } from 'react';

export default function AdminPanel() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [pwError, setPwError] = useState(false);
  const [adminMsg, setAdminMsg] = useState('');

  const ADMIN_PW = 'maitreyee2026';

  const openAdmin = () => {
    setAdminOpen(true);
  };

  const closeAdmin = () => {
    setAdminOpen(false);
    setIsLoggedIn(false);
    setPassword('');
    setPwError(false);
    setAdminMsg('');
  };

  const checkPw = () => {
    if (password === ADMIN_PW) {
      setIsLoggedIn(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  const showAdminMsg = (msg: string) => {
    setAdminMsg('✓ ' + msg);
    setTimeout(() => setAdminMsg(''), 3000);
  };

  const handleAddBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showAdminMsg('বই যোগ করা হয়েছে · Book added!');
  };

  const handleAddMusic = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showAdminMsg('সংগীত যোগ হয়েছে · Music added!');
  };

  const handleUploadPhoto = () => {
    showAdminMsg('ছবি আপলোড হয়েছে · Photo uploaded!');
  };

  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showAdminMsg('ইভেন্ট যোগ হয়েছে · Event added!');
  };

  return (
    <>
      <button className="admin-btn" onClick={openAdmin}>
        ⚙️
      </button>

      <div
        id="adminPanel"
        className={`admin-panel ${adminOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeAdmin();
        }}
      >
        <div className="admin-content">
          <button className="admin-close" onClick={closeAdmin}>
            ✕
          </button>

          {/* Login Section */}
          {!isLoggedIn ? (
            <div className="admin-login">
              <h2 className="admin-login-title">প্রশাসক · Admin</h2>
              <input
                type="password"
                className="admin-input"
                placeholder="পাসওয়ার্ড"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn-admin-login"
                onClick={checkPw}
              >
                লগইন
              </button>
              {pwError && (
                <div className="admin-error" style={{ display: 'block' }}>
                  ❌ ভুল পাসওয়ার্ড
                </div>
              )}
            </div>
          ) : (
            <div className="admin-dashboard">
              <h2
                className="admin-login-title"
                style={{ textAlign: 'left', fontSize: '1.4rem' }}
              >
                ড্যাশবোর্ড
              </h2>

              {/* Books Section */}
              <div className="admin-section-title">📚 বই যোগ করুন · Add Book</div>
              <form onSubmit={handleAddBook}>
                <input
                  className="admin-input"
                  placeholder="বইয়ের নাম / Book Title"
                />
                <input
                  className="admin-input"
                  placeholder="বিবরণ / Description"
                />
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <input
                    className="admin-input"
                    placeholder="ক্রয়ের লিঙ্ক / Buy Link"
                  />
                  <button className="btn-admin-add" type="submit">
                    বই যোগ
                  </button>
                </div>
              </form>

              {/* Music Section */}
              <div className="admin-section-title">
                🎵 YouTube সংগীত যোগ · Add Music Video
              </div>
              <form onSubmit={handleAddMusic}>
                <input
                  className="admin-input"
                  placeholder="YouTube URL…"
                />
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <input
                    className="admin-input"
                    placeholder="শিরোনাম / Title"
                  />
                  <button className="btn-admin-add" type="submit">
                    যোগ
                  </button>
                </div>
              </form>

              {/* Photo Upload */}
              <div className="admin-section-title">
                🖼️ গ্যালারিতে ছবি আপলোড · Upload to Gallery
              </div>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <input
                  className="admin-input"
                  type="file"
                  accept="image/*"
                  style={{ flex: 1 }}
                />
                <button
                  className="btn-admin-add"
                  onClick={handleUploadPhoto}
                >
                  আপলোড
                </button>
              </div>

              {/* Event Section */}
              <div className="admin-section-title">
                📅 ইভেন্ট যোগ করুন · Add Event
              </div>
              <form onSubmit={handleAddEvent}>
                <input
                  className="admin-input"
                  placeholder="ইভেন্টের নাম"
                />
                <input className="admin-input" type="date" />
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <input
                    className="admin-input"
                    placeholder="বিবরণ"
                  />
                  <button className="btn-admin-add" type="submit">
                    যোগ
                  </button>
                </div>
              </form>

              {adminMsg && (
                <div
                  style={{
                    marginTop: '1rem',
                    fontFamily: '"Hind Siliguri", sans-serif',
                    fontSize: '0.85rem',
                    color: 'var(--teal)',
                  }}
                >
                  {adminMsg}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
