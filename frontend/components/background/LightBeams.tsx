export default function LightBeams() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="
    absolute
    inset-0
    blur-3xl
    opacity-30
  "
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(225, 192, 59, 0.71), transparent 60%)",
        }}
      />

      <div
        className="
          absolute
          mix-blend-screen
          top-[-10%]
          right-[-10%]
          w-[50vw]
          h-[70vh]
          rotate-[18deg]
          blur-3xl
          opacity-30
        "
        style={{
          background: "radial-gradient(ellipse at top, rgba(255,240,180,.12), transparent 70%)",
        }}
      />
    </div>
  );
}
