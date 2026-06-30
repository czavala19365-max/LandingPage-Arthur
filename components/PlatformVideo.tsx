"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MOBILE_SCENES = new Set(["whatsapp-chat"]);

type Aspect = "desktop" | "mobile";

function getAspect(scene: string): Aspect {
  return MOBILE_SCENES.has(scene) ? "mobile" : "desktop";
}

function aspectRatioValue(aspect: Aspect): string {
  return aspect === "mobile" ? "9 / 19.5" : "16 / 9";
}

interface VideoPlaceholderProps {
  scene: string;
  aspect: Aspect;
  className?: string;
}

function VideoPlaceholder({ scene, aspect, className }: VideoPlaceholderProps) {
  return (
    <div
      className={`platform-video-placeholder ${className ?? ""}`}
      style={{ aspectRatio: aspectRatioValue(aspect) }}
      role="img"
      aria-label={`Video pendiente: ${scene}`}
    >
      <span>VIDEO PENDIENTE: {scene}</span>
    </div>
  );
}

export interface PlatformVideoProps {
  scene: string;
  eager?: boolean;
  className?: string;
}

export function PlatformVideo({ scene, eager = false, className }: PlatformVideoProps) {
  const aspect = getAspect(scene);
  const [videoFailed, setVideoFailed] = useState(false);
  const [screenshotFailed, setScreenshotFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [motionChecked, setMotionChecked] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    setMotionChecked(true);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!motionChecked) {
    return null;
  }

  if (reducedMotion) {
    if (screenshotFailed) {
      return null;
    }

    return (
      <div
        className={`platform-video-screenshot-wrap ${className ?? ""}`}
        style={{ aspectRatio: aspectRatioValue(aspect) }}
      >
        <Image
          src={`/landing/screenshots/${scene}.png`}
          alt={`Captura de ${scene}`}
          fill
          className="platform-video-screenshot"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setScreenshotFailed(true)}
          priority={eager}
        />
      </div>
    );
  }

  if (videoFailed) {
    return null;
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload={eager ? "auto" : "metadata"}
      poster={`/landing/posters/${scene}-poster.jpg`}
      className={`platform-video ${className ?? ""}`}
      style={{ aspectRatio: aspectRatioValue(aspect) }}
      onError={() => setVideoFailed(true)}
    >
      <source src={`/landing/videos/${scene}.webm`} type="video/webm" />
      <source src={`/landing/videos/${scene}.mp4`} type="video/mp4" />
    </video>
  );
}
