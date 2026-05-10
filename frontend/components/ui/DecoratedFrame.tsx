import Image from "next/image";
import { tl, tr, bl, br, glitter } from "@/utils/frame";

type Props = {
    children: React.ReactNode;
    color?: "gold" | "silver" | "bronze";
    className?: string;
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

export default function DecoratedFrame({
    children,
    color = "gold",
    className = "",
}: Props) {
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
                width={100}
                height={100}
                className={`absolute -top-3 -left-3 pointer-events-none ${style.filter}`}
            />

            {/* TOP RIGHT */}
            <Image
                src={tr}
                alt=""
                width={100}
                height={100}
                className={`absolute -top-2 -right-[0.45rem] pointer-events-none ${style.filter}`}
            />

            {/* BOTTOM LEFT */}
            <Image
                src={bl}
                alt=""
                width={100}
                height={100}
                className={`absolute -bottom-1 -left-2 pointer-events-none ${style.filter}`}
            />

            {/* BOTTOM RIGHT */}
            <Image
                src={br}
                alt=""
                width={100}
                height={100}
                className={`absolute -bottom-2 -right-[0.61rem] pointer-events-none ${style.filter}`}
            />

             <Image
                src={glitter}
                alt=""
            width={1500}
                height={1500}
                className={`absolute md:-bottom-5 -bottom-9  rotate-180 pointer-events-none ${style.filter}`}
            /> 
             <Image
                src={glitter}
                alt=""
            width={1500}
                height={1500}
                className={`absolute md:-top-5 -top-9 pointer-events-none ${style.filter}`}
            /> 
            {children}
        </div>
    );
}
