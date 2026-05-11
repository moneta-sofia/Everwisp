type Props = {
  rank: 1 | 2 | 3;
};

const styles = {
  1: {
    border: "#F6D76B",
    glow: "#F6D76B",
    gradient: "radial-gradient(circle, #a68216 0%, #FFE68A  75%)",
    blur: "rgba(246,215,107,0.35)",
  },

  2: {
    border: "#dddada",
    glow: "#FFFFFF",
    gradient: "radial-gradient(circle, #6f7175 0%, #dddada 75%)",
    blur: "rgba(255,255,255,0.25)",
  },

  3: {
    border: "#E77A30",
    glow: "#E77A30",
    gradient: "radial-gradient(circle, #4C2911 0%, #E77A30 75%)",
    blur: "rgba(231,122,48,0.28)",
  },
};

export default function RankBadge({ rank }: Props) {
  const style = styles[rank];

  return (
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50">
      {/* SOFT OUTER BLUR */}
      <div
        className="absolute inset-0 scale-[2.2] rounded-full blur-2xl"
        style={{
          background: style.blur,
        }}
      />

      {/* BADGE */}
      <div
        className="
                relative
                w-9
                h-9
                rounded-full
                flex
                items-center
                justify-center
                "
        style={{
          background: style.gradient,
          border: `2px solid ${style.border}`,
          boxShadow: `0 0 12px ${style.glow}`,
        }}
      >
        <span
          className="text-white font-bold text-xl font-spirax shadow-2xl"
          style={{
            textShadow: "0 0 6px rgba(255,255,255,0.8)",
          }}
        >
          {rank}
        </span>
      </div>
    </div>
  );
}
