import { topHostsMock } from "@/data/porfiles/TopHosts.Mockup";
import Image from "next/image";

const rankStyles = [
  {
    card: "w-[300px] h-[420px] scale-110 border-amber-300 shadow-amber-300 order-2 z-20",
    image: "w-[180px] h-[180px]",
    badge: "bg-yellow-300 text-white w-14 h-14 text-2xl",
    title: "text-4xl",
    description: "text-lg",
    hours: "text-xl",
  },
  {
    card: "w-[250px] h-[360px] border-slate-400 shadow-[0_0_25px_rgba(226,232,240,0.6)] order-1 z-10",
    image: "w-[150px] h-[150px]",
    badge: "bg-slate-200 text-slate-700 w-11 h-11 text-xl",
    title: "text-3xl",
    description: "text-base",
    hours: "text-lg",
  },
  {
    card: "w-[250px] h-[360px] border-yellow-700 shadow-[0_0_25px_rgba(251,146,60,0.6)] order-3 z-10",
    image: "w-[150px] h-[150px]",
    badge: "bg-orange-500 text-white w-11 h-11 text-xl",
    title: "text-3xl",
    description: "text-base",
    hours: "text-lg",
  },
];

export default function TopHosts(){
return(
    <section className="bg-background h-screen py-20 text-full-ilumination w-full">
        <h1>TOP HOST</h1>
        <div className="flex justify-center items-center w-full border-amber-300 border-2">
            {topHostsMock.map((host, i)=> {
                return(
                    <div key={i}
                    className={` ${rankStyles[i].card} flex flex-col justify-center items-center bg-container border-[0.5px] m-5 border-amber-200 btn-magic relative`}
                    >
                        <Image src={"/test/porfilePicture.webp"} alt="asd" width={"150"} height={"100"} className="relative -top-10"/>
                        <h2>{host.userData.name}</h2>
                        <p>{host.presentation.shortDescription}</p>
                        <p>{host.stats.hoursStream}</p>
                    </div>
                )
            })}
        </div>
    </section>
);
}