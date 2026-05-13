"use client";
import { useEffect, useRef, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = new Audio("/test/audio-test.mp3");

    audio.loop = true;
    audio.volume = 0.4;
    audio.muted = true;

    audioRef.current = audio;

    // intentar reproducir
    audio.play().catch(() => {
      // browsers bloquean autoplay hasta interacción
    });

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMute = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // algunos browsers requieren play tras interacción
    if (audio.paused) {
      await audio.play();
    }

    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <button
      onClick={toggleMute}
      className="h-full w-auto p-3 bg-background text-neutral cursor-pointer rounded-full border-[1.5px] border-neutral white-aura"
    >
      {muted ? <MdMusicOff size={25} className="white-aura" /> : <MdMusicNote size={25} className="white-aura" />}
    </button>
  );
}
