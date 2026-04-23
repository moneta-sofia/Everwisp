"use client";
import Image from "next/image";
import { star } from "@/utils/frame";
import { socials } from "@/data/socials";
import { useEffect, useState } from "react";

export default function StarsSocials() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1224);
  }, []);
  if (isMobile === null) return null; // evita mismatch

  const topsLeft = ["top-[15%]", "top-[55%]"];
  const leftsLeft = ["left-[10px]", "left-[50px]"];
  const topsRight = ["top-[30%]", "top-[70%]"];
  const rightsRight = ["right-[10px]", "right-[50px]"];

  return (
    <>
      {isMobile ? (
        <>
          <div className="flex w-full mt-10">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                className={`h-24 w-24 hover:scale-125 transition-transform duration-300`}
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <Image src={star} alt="star" fill className="object-contain" />
                <div className="absolute inset-0 flex items-center justify-center w-auto h-auto">
                  {s.icon}
                </div>
              </a>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="fixed left-6 top-0 h-full">
            {socials.slice(0, 2).map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                className={`absolute h-24 w-24 ${topsLeft[i]} ${leftsLeft[i]} hover:scale-125 transition-transform duration-300`}
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <Image src={star} alt="star" fill className="object-contain" />
                <div className="absolute inset-0 flex items-center justify-center w-auto h-auto">
                  {s.icon}
                </div>
              </a>
            ))}
          </div>

          <div className="fixed right-6 top-0 h-full">
            {[...socials].slice(2, 4).map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                className={`absolute h-24 w-24 ${topsRight[i]} ${rightsRight[i]}  hover:scale-125 transition-transform duration-300`}
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.4 + 0.2}s`,
                }}
              >
                <Image src={star} alt="star" fill className="object-contain" />
                <div className="absolute inset-0 flex items-center justify-center w-auto h-auto">
                  {s.icon}
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
