import { useRef, useState, useCallback } from "react";

interface VideoPreviewProps {
  videoSrc: string;
  posterSrc: string;
  alt: string;
}

export function VideoPreview({ videoSrc, posterSrc, alt }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleMouseEnter = useCallback(() => {
    // Skip video on touch-only devices (no fine pointer)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    setIsHovering(true);

    const video = videoRef.current;
    if (video) {
      video.src = videoSrc;
      video.play().catch(() => {
        // Browser blocked autoplay or video failed — fall back silently
        setHasError(true);
        setIsHovering(false);
      });
    }
  }, [videoSrc]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);

    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.removeAttribute("src");
      video.load(); // Reset the video element after removing src
    }
  }, []);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Poster image — always rendered as base layer */}
      <img
        src={posterSrc}
        alt={alt}
        className="h-full w-full object-cover rounded-lg"
        loading="lazy"
        decoding="async"
      />

      {/* Video overlay — shown when hovering and no error */}
      {isHovering && !hasError && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover rounded-lg"
          onError={() => {
            setHasError(true);
            setIsHovering(false);
          }}
        />
      )}
    </div>
  );
}
