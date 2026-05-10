import { topHostsMock } from "@/data/porfiles/TopHosts.Mockup";
import Image from "next/image";
import DecoratedFrame from "@/components/ui/DecoratedFrame";
import RankBadge from "@/components/ui/RankBadge";

const rankStyles = [
  {
    card: "md:w-[190px] w-9/12 md:h-[290px] h-80 scale-110 border-amber-300 shadow-amber-300 order-2 z-20",
    imageH: 180,
    imageW: 180,
    // badge: "bg-yellow-300 text-white w-14 h-14 text-2xl",
    title: "text-3xl",
    description: "text-base",
    hours: "text-base",
  },
  {
    card: "md:w-[185px] w-9/12 md:h-[285px] h-76 border-slate-400 shadow-[0_0_25px_rgba(226,232,240,0.6)] order-1 z-10",
    imageH: 170,
    imageW: 170,
    // badge: "bg-slate-200 text-slate-700 w-11 h-11 text-xl",
    title: "text-2xl",
    description: "text-sm",
    hours: "text-sm",
  },
  {
    card: "md:w-[180px] w-9/12 md:h-[280px] h-76 border-yellow-700 shadow-[0_0_25px_rgba(251,146,60,0.6)] order-3 z-10",
    imageH: 160,
    imageW: 160,
    // badge: "bg-orange-500 text-white w-11 h-11 text-xl",
    title: "text-xl",
    description: "text-xs",
    hours: "text-xs",
  },
];

export default function TopHosts() {
  return (
    <section className="bg-background md:h-screen h-auto py-18 text-full-ilumination w-full">
      <h1>TOP HOST</h1>
      <div className="flex justify-center md:flex-row flex-col items-center w-full border-amber-300 border-2">
        {topHostsMock.map((host, i) => {
          return (
            <DecoratedFrame
              key={i}
                color={i === 0 ? "gold" : i === 1 ? "silver" : "bronze"}
              className={` ${rankStyles[i].card} flex flex-col md:my-20 my-10 mx-10 justify-between items-center bg-container border-[0.5px] m-5 border-amber-200 btn-magic relative text-center`}
            >
              <RankBadge rank={(i + 1) as 1 | 2 | 3} />
              <Image
                src={"/test/porfilePicture.webp"}
                alt="asd"
                width={rankStyles[i].imageW}
                height={rankStyles[i].imageH}
                className="relative -mt-10"
              />
              <p className={` ${rankStyles[i].title} font-Laila font-semibold`}>
                {host.userData.name}
              </p>
              <p className={` ${rankStyles[i].description}`}>
                {host.presentation.shortDescription}
              </p>
              <div>
                <Image src={"/Line.svg"} alt="" width={400} height={10}/>
                <p className={` ${rankStyles[i].hours} font-chivo font-light pt-3`}>
                  {host.stats.hoursStream} HOURS
                </p>
              </div>
            </DecoratedFrame>
          );
        })}
      </div>
    </section>
  );
}
