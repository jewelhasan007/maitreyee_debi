'use client';

import { useState } from 'react';

interface MusicVideo {
  id: number;
  title: string;
  url: string;
  ytId?: string;
  platform: 'youtube' | 'instagram' | 'facebook';
}

export default function Music_en() {
  const [url, setUrl] = useState('');

  const [videos, setVideos] = useState<MusicVideo[]>([
    {
      id: 1,
      title: 'Traditional Music',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      ytId: 'dQw4w9WgXcQ',
      platform: 'youtube',
    },
    {
      id: 2,
      title: 'Instagram Performance',
      url: 'https://www.instagram.com/p/DWIv_I3Dvpu/',
      platform: 'instagram',
    },
    {
      id: 3,
      title: 'Facebook Performance',
      url: 'https://www.facebook.com/',
      platform: 'facebook',
    },
  ]);

  // ---------- Extract YouTube ID ----------
  const getYouTubeId = (link: string): string | null => {
    const match = link.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/
    );
    return match ? match[1] : null;
  };

  // ---------- Detect Platform ----------
  const detectPlatform = (
    link: string
  ): 'youtube' | 'instagram' | 'facebook' | null => {
    if (link.includes('youtube.com') || link.includes('youtu.be')) return 'youtube';
    if (link.includes('instagram.com')) return 'instagram';
    if (link.includes('facebook.com') || link.includes('fb.watch')) return 'facebook';
    return null;
  };

  // ---------- Add Video ----------
  const addVideo = () => {
    const trimmed = url.trim();
    const platform = detectPlatform(trimmed);

    if (!platform) {
      alert('Please enter a valid YouTube, Instagram or Facebook link');
      return;
    }

    const newVideo: MusicVideo = {
      id: Date.now(),
      title:
        platform === 'youtube'
          ? 'YouTube Video'
          : platform === 'instagram'
          ? 'Instagram Post'
          : 'Facebook Post',
      url: trimmed,
      platform,
      ytId: platform === 'youtube' ? getYouTubeId(trimmed) || undefined : undefined,
    };

    setVideos([newVideo, ...videos]);
    setUrl('');
  };

  // ---------- Thumbnail ----------
  const getThumbnail = (video: MusicVideo) => {
    if (video.platform === 'youtube' && video.ytId) {
      return `https://img.youtube.com/vi/${video.ytId}/hqdefault.jpg`;
    }

    if (video.platform === 'instagram') {
      return 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0';
    }

    if (video.platform === 'facebook') {
      return 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd';
    }

    return 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e';
  };

  // ---------- Open ----------
  const openVideo = (video: MusicVideo) => {
    window.open(video.url, '_blank');
  };

  return (
    <section id="music" style={{ padding: '40px 20px' }}>
      {/* Header */}
      <div className="timeline-header" style={{ textAlign: 'center', marginBottom: 30 }}>
        <h2 className="timeline-heading" style={{ fontSize: 32, fontWeight: 700 }}>
          Music & Performances
        </h2>
        <p className="timeline-subtitle" style={{ opacity: 0.7 }}>
          Classical meets contemporary in melodic expression
        </p>
      </div>

      {/* Input */}
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <input
          type="text"
          value={url}
          placeholder="Paste YouTube, Instagram or Facebook link..."
          onChange={(e) => setUrl(e.target.value)}
          style={{
            padding: '12px',
            width: '60%',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />

        <button
          onClick={addVideo}
          style={{
            marginLeft: 10,
            padding: '12px 18px',
            background: '#D4A843',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Add
        </button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => openVideo(video)}
            style={{
              cursor: 'pointer',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              background: '#fff',
              transition: '0.3s',
            }}
          >
            {/* Thumbnail */}
            <div style={{ position: 'relative' }}>
              <img
                src={getThumbnail(video)}
                alt={video.title}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />

              {/* Play Button */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  padding: '10px 14px',
                  borderRadius: '50%',
                  fontSize: '18px',
                }}
              >
                ▶
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: '12px' }}>
              <div style={{ fontWeight: 600 }}>{video.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>
                {video.platform.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}