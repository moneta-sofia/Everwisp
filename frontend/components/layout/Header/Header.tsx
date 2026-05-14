import Image from "next/image";
import Link from "next/link";
import MusicButton from "./MusicButton";

export default function Header() {
  return (
    <header className="p-4 z-50  w-full fixed flex items-center justify-between">
      <Link href={"./"}>
        <Image
          src="/logo.webp"
          width={50}
          height={50}
          alt="Logo"
          className="gold-aura min-[1224px]:hidden"
          style={{ width: "auto", height: "auto" }}
          loading="eager"
        />
        <Image
          src="/logo-large.webp"
          width={140}
          height={140}
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
