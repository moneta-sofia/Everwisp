"use client";
import Image from "next/image";
import Link from "next/link";
import MusicButton from "./MusicButton";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1224);
  }, []);

  if (isMobile === null) return null; // evita mismatch

  return (
    <header className="p-4 z-50  w-full fixed flex items-center justify-between">
      <Link href={"./"}>
        <Image
          src={isMobile ? "/logo.webp" : "/logo-large.webp"}
          width={isMobile ? 90 : 200}
          height={180}
          alt="Logo"
          className="gold-aura"
        />
      </Link>
      <div>
        <MusicButton />
      </div>
    </header>
  );
}
