import { FaXTwitter, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa6";
import Image from "next/image";
import { tl, tr, bl, br, star } from "@/utils/frame";

export default function Home() {
  const socials = [
    {
      href: " https://x.com/Everwisp_",
      icon: <FaXTwitter className="size-7 text-black" />,
    },
    {
      href: "https://www.instagram.com/everwisp_guild/",
      icon: <FaInstagram className="size-7 text-black" />,
    },
    {
      href: "https://www.tiktok.com/@everwisp",
      icon: <FaTiktok className="size-7 text-black" />,
    },
    {
      href: "https://discord.gg/hUAy9sgpsr",
      icon: <FaDiscord className="size-7 text-black" />,
    },
  ];
const topsLeft   = ["top-[15%]", "top-[55%]"];
const leftsLeft  = ["left-[10px]", "left-[50px]"];
const topsRight  = ["top-[30%]", "top-[70%]"];
const rightsRight = ["right-[10px]", "right-[50px]"];

  return (
    <div className="relative flex p-10 flex-col flex-1 items-center justify-between">
      <Image
        src={"/InProgress.gif"}
        fill={true}
        alt="Guatoncito working"
        className="-z-10"
      />

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
            <div className="absolute inset-0 flex items-center justify-center">
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
            <div className="absolute inset-0 flex items-center justify-center">
              {s.icon}
            </div>
          </a>
        ))}
      </div>

      <div>
        <h1 className="text-center text-neutral-50 text-7xl pb-5 text-shadow-[0px_0px_10px_rgba(0,0,0)]">
          Page in progress
        </h1>
        <h2 className="z-10 text-xl font-chivo text-center">
          Help us to improve our page and community!
        </h2>
      </div>
      <div>
        <button className="relative font-spirax text-3xl font-medium shadow-goldaura-inset shadow-goldaura btn-magic pointer-events-auto">
          <Image
            src={tl}
            height={75}
            width={75}
            alt="frame"
            className="absolute -top-2 -left-2"
          />
          <Image
            src={tr}
            height={75}
            width={75}
            alt="frame"
            className="absolute -top-1 -right-2"
          />
          <Image
            src={br}
            height={75}
            width={75}
            alt="frame"
            className="absolute -bottom-1 -right-2"
          />
          <Image
            src={bl}
            height={75}
            width={75}
            alt="frame"
            className="absolute -bottom-1 -left-2"
          />
          Donate
        </button>
      </div>
    </div>
  );
}
