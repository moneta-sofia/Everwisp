import Image from "next/image";
import Link from "next/link";
import MusicButton from "./MusicButton";

export default function Header() {
  return (
    <header className="p-4 z-50  w-full fixed flex items-center justify-between">
      <Link href={"./"}>
        <Image
          src="/logo.webp"
          width={90}
          height={180}
          alt="Logo"
          className="gold-aura min-[1224px]:hidden"
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
        <Image
          src="/logo-large.webp"
          width={200}
          height={180}
          alt="Logo"
          className="gold-aura hidden min-[1224px]:block"
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
      </Link>
      <div>
        <MusicButton />
      </div>
    </header>
  );
}
