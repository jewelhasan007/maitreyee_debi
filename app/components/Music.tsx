'use client';

import { useState } from 'react';

interface MusicVideo {
  id: number;
  ytId: string;
  title: string;
}

export default function Music() {
  const [ytUrl, setYtUrl] = useState('');
  const [musicVideos, setMusicVideos] = useState<MusicVideo[]>([
    {
      id: 1,
      ytId: 'dQw4w9WgXcQ',
      title: 'ঐতিহ্যবাহী সঙ্গীত',
    },
  ]);

  const getYTId = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
    );
    return match ? match[1] : null;
  };

  const addMusic = () => {
    const id = getYTId(ytUrl.trim());
    if (!id) {
      alert('সঠিক YouTube লিঙ্ক দিন');
      return;
    }

    const newVideo: MusicVideo = {
      id: Date.now(),
      ytId: id,
      title: 'নতুন ভিডিও · New Video',
    };

    setMusicVideos([...musicVideos, newVideo]);
    setYtUrl('');
  };

  return (
    <section id="music">
      <div className="section-label">সংগীত · MUSIC</div>
      <h2 className="section-title">সুরের জগৎ</h2>
      <p className="section-subtitle">
        Classical meets contemporary in melodic expression
      </p>

      <div className="music-controls">
        <input
          type="text"
          className="music-input"
          id="ytInput"
          placeholder="YouTube URL..."
          value={ytUrl}
          onChange={(e) => setYtUrl(e.target.value)}
        />
        <button className="btn-add" onClick={addMusic}>
          যোগ করুন
        </button>
      </div>

      <div className="music-grid" id="musicGrid">
        {musicVideos.map((video) => (
          <div key={video.id} className="music-video-card">
            <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.ytId}`}
                frameBorder="0"
                allow="accelerometer;autoplay;encrypted-media;gyroscope"
                allowFullScreen
                style={{ border: 'none' }}
              ></iframe>
            </div>
            <div className="music-video-info">
              <div className="music-video-title">{video.title}</div>
              <div className="music-video-sub">YouTube · Added</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
