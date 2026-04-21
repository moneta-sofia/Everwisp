import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { tl, tr, bl, br, star } from "@/utils/frame";

export default function Home() {
  return (
    <div className="relative flex p-10 flex-col flex-1 items-center justify-between">
      <Image
        src={"/InProgress.gif"}
        fill={true}
        alt="Guatoncito working"
        className="-z-10"
      />
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
