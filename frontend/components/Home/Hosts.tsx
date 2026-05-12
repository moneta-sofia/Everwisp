"use client";

import { useMemo, useState } from "react";
import { hostsMock } from "@/data/porfiles/Hosts.Mockup";
import DecoratedFrame from "@/components/ui/DecoratedFrame";
import { FaPlay } from "react-icons/fa";
import { star } from "@/utils/frame";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

type FilterType = "popular" | "offline" | "all" | "online";

export default function Hosts() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredHosts = useMemo(() => {
    switch (filter) {
      case "online":
        return hostsMock.filter((host) => host.userData.status === "online");

      case "offline":
        return hostsMock.filter((host) => host.userData.status !== "online");

      case "popular":
        return [...hostsMock].sort((a, b) => b.stats.hoursStream - a.stats.hoursStream);

      case "all":
      default:
        return hostsMock;
    }
  }, [filter]);

  const buttonStyle = (value: FilterType) =>
    filter === value ? "bg-[#d9d6bc] text-black shadow-[0_0_20px_rgba(255,255,220,.5)]" : "bg-[#bcb89f] text-black";

  return (
    <section className="flex justify-center items-center flex-col w-full py-12 bg-background text-full-ilumination">
            <div className="flex justify-between items-center my-12 w-10/12 container">
              <div className="w-2/3 rotate-180 filter-[drop-shadow(0_0_6px_white)]  md:flex hidden">
                <div className="aguja w-full" />
              </div>
              <Image src={star} width={50} height={50} alt="star" className="mx-10 md:flex hidden" />
              <h1 className="w-full">HOSTS</h1>
              <Image src={star} width={50} height={50} alt="star" className="mx-10  md:flex hidden" />
              <div className="w-2/3 filter-[drop-shadow(0_0_6px_white)]  md:flex hidden">
                <div className="aguja w-full" />
              </div>
            </div>
      {/* Filter */}
      <div className="w-full flex justify-center mb-14">
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <span className="text-zinc-200 text-lg">Ordenar por:</span>

          <button onClick={() => setFilter("popular")} className={`px-6 py-2 rounded-xl transition-all cursor-pointer ${buttonStyle("popular")}`}>
            Popular
          </button>

          <button onClick={() => setFilter("offline")} className={`px-6 py-2 rounded-xl transition-all cursor-pointer ${buttonStyle("offline")}`}>
            Offline
          </button>

          <button onClick={() => setFilter("all")} className={`px-6 py-2 rounded-xl transition-all cursor-pointer ${buttonStyle("all")}`}>
            Todos
          </button>

          <button onClick={() => setFilter("online")} className={`px-6 py-2 rounded-xl transition-all cursor-pointer ${buttonStyle("online")}`}>
            En línea
          </button>
        </div>
      </div>

      {/* Grid Hosts */}
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-12 w-fit mx-auto">
        {filteredHosts.map((host) => {
          return (
            <DecoratedFrame
              containerType='wide'
              key={host.userData.id}
              color="gold"
              className="relative w-full max-w-[390px] h-[230px] px-8 py-5 flex items-center justify-between flex-col bg-container border-[0.5px] border-amber-100 btn-magic "
            >
              <div className="w-full flex justify-between">
                {/* Avatar */}
                <div className="relative">
                  <Image src={"/test/porfilePicture.webp"} alt="asd" width={110} height={110} className="relative -mt-1" />
                </div>

                <div className="flex flex-col justify-center items-center text-sm">
                  <h2 className="text-4xl font-spirax font-light ">{host.userData.name}</h2>
                  <div className="flex justify-center items-center py-3 gap-3">
                    <p  className="border rounded-lg w-7 h-6 flex justify-center items-center dual-aura">{host.userData.languaje}</p>
                    <div className="border rounded-lg w-7 h-6 flex justify-center items-center dual-aura">
                      <ReactCountryFlag countryCode={host.userData.country} svg/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div>
                  <p className="italic text-sm mt-3 text-zinc-200">{host.presentation.shortDescription}</p>
                  <Image src={"/Line.svg"} alt="" width={400} height={10} className="py-2 pr-8"/>
                  <div className="flex items-center justify-start gap-2">
                    <span
                      className={` w-3 h-3 rounded-full 
                                                    ${host.userData.status === "online" ? "bg-green-400" : "bg-zinc-500"}`}
                    />

                    <p className="italic font-chivo text-zinc-300">{host.userData.status}</p>
                  </div>
                </div>
                <button className="w-20 h-14 rounded-full border-2 text-2xl border-amber-200 flex items-center justify-center dual-aura">
                  <FaPlay className="-mr-1"/>
                </button>
              </div>
            </DecoratedFrame>
          );
        })}
      </div>
    </section>
  );
}
