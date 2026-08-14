import { useState } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster: string;
  alt: string;
  controls?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  lazy?: boolean;
}

export function VideoPlayer({
  src,
  poster,
  alt,
  controls = true,
  muted = false,
  autoPlay = false,
  loop = false,
  className,
  lazy = false,
}: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <img
        src={poster}
        alt={alt}
        className={cn("w-full rounded-lg object-cover", className)}
        loading={lazy ? "lazy" : undefined}
        decoding="async"
      />
    );
  }

  return (
    <video
      src={src}
      poster={poster}
      controls={controls}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      playsInline
      preload="metadata"
      aria-label={alt}
      className={cn("w-full rounded-lg", className)}
      onError={() => setHasError(true)}
    />
  );
}
