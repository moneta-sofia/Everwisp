import Image from "next/image";
import { tl, tr, bl, br, glitter } from "@/utils/frame";

type Props = {
  children: React.ReactNode;
  color?: "gold" | "silver" | "bronze";
  className?: string;
  size?: "compact" | "full";
};

const colorStyles = {
  gold: {
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.7)]",
    border: "border-amber-200",
    filter: "",
  },

  silver: {
    glow: "shadow-[0_0_30px_rgba(226,232,240,0.7)]",
    border: "border-slate-200",
    filter: "brightness-[0.95] brightness-125 grayscale",
  },

  bronze: {
    glow: "shadow-[0_0_30px_rgba(251,146,60,0.7)]",
    border: "border-orange-300",
    filter: "brightness-[0.60] contrast-[1.35] saturate-[2.5] hue-rotate-[-18deg]",
  },
};

export default function DecoratedFrame({ children, color = "gold", className = "", size }: Props) {
  const style = colorStyles[color];

  return (
    <div
      className={`
        relative
        border
        rounded-[28px]
        ${style.border}
        ${style.glow}
        ${className}
      `}
    >
      {/* TOP LEFT */}
      <Image
        src={tl}
        alt=""
        width={75}
        height={75}
        className={`absolute -top-4 -left-3 pointer-events-none ${style.filter}`}
        style={{ width: "auto", height: "auto" }}
      />

      {/* TOP RIGHT */}
      <Image
        src={tr}
        alt=""
        width={75}
        height={75}
        className={`absolute -top-2 -right-[0.45rem] pointer-events-none ${style.filter}`}
        style={{ width: "auto", height: "auto" }}
      />

      {/* BOTTOM LEFT */}
      <Image
        src={bl}
        alt=""
        width={75}
        height={75}
        className={`absolute -bottom-1 -left-[0.65rem] pointer-events-none ${style.filter}`}
        style={{ width: "auto", height: "auto" }}
      />

      {/* BOTTOM RIGHT */}
      <Image
        src={br}
        alt=""
        width={75}
        height={75}
        className={`absolute -bottom-[0.65rem] -right-[0.7rem] pointer-events-none ${style.filter}`}
        style={{ width: "auto", height: "auto" }}
      />

      {/* GLITTER BOTTOM */}
      <Image
        src={glitter}
        alt=""
        width={450}
        height={1500}
        className={`absolute ${size == "full" ? '-bottom-[1.45rem]' : '-bottom-5'}  rotate-180 pointer-events-none ${style.filter}`}
        style={{ width: "auto", height: "auto" }}
      />

      {/* GLITTER TOP */}
      <Image
        src={glitter}
        alt=""
        width={250}
        height={1500}
        className={`absolute -top-6 pointer-events-none ${style.filter}`}
        style={{ width: "auto", height: "auto" }}
      />

      {children}
    </div>
  );
}
