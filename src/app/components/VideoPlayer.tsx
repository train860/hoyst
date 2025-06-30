'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  playButtonText: string;
}

// Check if device is mobile
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
         ('ontouchstart' in window) || 
         (window.innerWidth <= 768);
};

export default function VideoPlayer({ 
  src, 
  poster, 
  className = '', 
  ariaLabel, 
  playButtonText 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on client side
    setIsMobile(isMobileDevice());
    setShowPlayButton(isMobileDevice());
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setShowPlayButton(false);
    };

    const handlePause = () => {
      if (isMobile) {
        setShowPlayButton(true);
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [isMobile]);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setShowPlayButton(false);
    } catch (error) {
      console.error('Failed to play video:', error);
    }
  };

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        autoPlay={!isMobile}
        loop
        muted
        playsInline
        className={className}
        poster={poster}
        aria-label={ariaLabel}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {showPlayButton && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl cursor-pointer group-hover:bg-black/30 transition-colors z-10"
          onClick={handlePlayClick}
        >
          <div className="bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors">
            <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full">
            {playButtonText}
          </div>
        </div>
      )}
    </div>
  );
} 