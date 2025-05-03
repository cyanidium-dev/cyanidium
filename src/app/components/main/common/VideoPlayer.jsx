'use client'; // если ты используешь app router

import { useEffect } from 'react';

const VideoPlayer = ({videoUrl}) => {
  useEffect(() => {
    // Подключаем Vimeo API один раз при монтировании
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
				className='rounded-[7px]'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        title="Відгук Алеко"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
