import { topHostsMock } from "@/data/profiles/TopHosts.Mockup";
import { rankStyles } from "@/utils/rankStyles";
import Image from "next/image";
import DecoratedFrame from "@/components/ui/DecoratedFrame";
import RankBadge from "@/components/ui/RankBadge";
import { star } from "@/utils/frame";

export default function TopHosts() {
  return (
    <section className="flex justify-center items-center flex-col bg-background h-auto pt-18 text-full-ilumination w-full">
      <div className="flex justify-between items-center my-12 w-10/12 container">
        <div className="w-2/3 rotate-180 filter-[drop-shadow(0_0_6px_white)]  md:flex hidden">
          <div className="aguja w-full" />
        </div>
        <Image src={star} width={50} height={50} alt="star" className="mx-10 md:flex hidden" />
        <h1 className="w-full">TOP HOST</h1>
        <Image src={star} width={50} height={50} alt="star" className="mx-10  md:flex hidden" />
        <div className="w-2/3 filter-[drop-shadow(0_0_6px_white)]  md:flex hidden">
          <div className="aguja w-full" />
        </div>
      </div>
      <div className="flex justify-center md:flex-row flex-col items-center w-full h-full">
        {topHostsMock.map((host, i) => {
          return (
            <DecoratedFrame
              key={i}
              color={i === 0 ? "gold" : i === 1 ? "silver" : "bronze"}
              className={` ${rankStyles[i].card} flex flex-col md:my-16 my-16 mx-10 justify-between items-center bg-container border-[0.5px] m-5 border-amber-200 btn-magic relative text-center`}
            >
              <RankBadge rank={(i + 1) as 1 | 2 | 3} />
              <Image
                src={"/test/profilePicture.webp"}
                alt="asd"
                width={rankStyles[i].imageW}
                height={rankStyles[i].imageH}
                className="relative -mt-10"
              />
              <p className={` ${rankStyles[i].title} font-Laila font-semibold`}>{host.userData.name}</p>
              <p className={` ${rankStyles[i].description}`}>{host.presentation.shortDescription}</p>
              <div>
                <Image src={"/Line.svg"} alt="" width={400} sizes="(max-width: 768px)" height={10} />
                {host.stats.hoursStream && (
                  <p className={` ${rankStyles[i].hours} font-chivo font-light pt-3`}>{host.stats.hoursStream} HOURS</p>
                )}
              </div>
            </DecoratedFrame>
          );
        })}
      </div>
    </section>
  );
}
