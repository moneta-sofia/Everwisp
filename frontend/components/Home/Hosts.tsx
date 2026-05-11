"use client";

import { useMemo, useState } from "react";
import { hostsMock } from "@/data/porfiles/Hosts.Mockup";
import DecoratedFrame from "@/components/ui/DecoratedFrame";
import Image from "next/image";

type FilterType =
    | "popular"
    | "offline"
    | "all"
    | "online";

export default function Hosts() {

    const [filter, setFilter] = useState<FilterType>("all");

    const filteredHosts = useMemo(() => {

        switch (filter) {

            case "online":
                return hostsMock.filter(
                    (host) => host.userData.status === "online"
                );

            case "offline":
                return hostsMock.filter(
                    (host) => host.userData.status !== "online"
                );

            case "popular":
                return [...hostsMock].sort(
                    (a, b) =>
                        b.stats.hoursStream - a.stats.hoursStream
                );

            case "all":
            default:
                return hostsMock;
        }

    }, [filter]);

    const buttonStyle = (value: FilterType) =>
        filter === value
            ? "bg-[#d9d6bc] text-black shadow-[0_0_20px_rgba(255,255,220,.5)]"
            : "bg-[#bcb89f] text-black";

    return (
        <section className="w-full py-24 bg-background text-full-ilumination">

            {/* Header */}
            <div className="w-full flex justify-center mb-14">
                <div className="flex items-center gap-5 flex-wrap">

                    <span className="text-zinc-200 text-lg">
                        Ordenar por:
                    </span>

                    <button
                        onClick={() => setFilter("popular")}
                        className={`px-6 py-2 rounded-xl transition-all ${buttonStyle("popular")}`}
                    >
                        Popular
                    </button>

                    <button
                        onClick={() => setFilter("offline")}
                        className={`px-6 py-2 rounded-xl transition-all ${buttonStyle("offline")}`}
                    >
                        Offline
                    </button>

                    <button
                        onClick={() => setFilter("all")}
                        className={`px-6 py-2 rounded-xl transition-all ${buttonStyle("all")}`}
                    >
                        Todos
                    </button>

                    <button
                        onClick={() => setFilter("online")}
                        className={`px-6 py-2 rounded-xl transition-all ${buttonStyle("online")}`}
                    >
                        En línea
                    </button>

                </div>
            </div>

            {/* Grid */}
            <div
                className="
        grid
        xl:grid-cols-2
        grid-cols-1
        gap-12
        w-fit
        mx-auto
    "
            >

                {filteredHosts.map((host) => {

                    return (
                        <DecoratedFrame
                            key={host.userData.id}
                            color="gold"
                            className="
                                relative
                                w-full
                                max-w-[390px]
                                h-[230px]
                                p-10
                                flex
                                items-center
                                bg-container
                                border-[0.5px]
                                border-amber-100
                                btn-magic
                            "
                        >

                            {/* Avatar */}
                            <div className="relative">

                                <Image
                                    src={"/test/porfilePicture.webp"}
                                    alt="asd"
                                    width={120}
                                    height={120}
                                    className="relative -mt-10"
                                />

                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-between h-full ml-5 flex-1">

                                {/* Top */}
                                <div>

                                    <h2 className="text-4xl font-Laila font-semibold">
                                        {host.userData.name}
                                    </h2>

                                    <p className="italic text-sm mt-3 text-zinc-200">
                                        {host.presentation.shortDescription}
                                    </p>

                                </div>

                                {/* Bottom */}
                                <div className="flex items-center justify-between">

                                    {/* Status */}
                                    <div className="flex items-center gap-2">

                                        <span
                                            className={`
                                                w-3
                                                h-3
                                                rounded-full
                                                ${host.userData.status === "online"
                                                    ? "bg-green-400"
                                                    : "bg-zinc-500"
                                                }
                                            `}
                                        />

                                        <p className="italic text-zinc-300">
                                            {host.userData.status}
                                        </p>

                                    </div>

                                    {/* Play button */}
                                    <button
                                        className="
                                            w-14
                                            h-14
                                            rounded-full
                                            border
                                            border-amber-200
                                            flex
                                            items-center
                                            justify-center
                                            shadow-[0_0_20px_rgba(255,220,120,.5)]
                                            text-2xl
                                        "
                                    >
                                        ▶
                                    </button>

                                </div>

                            </div>

                        </DecoratedFrame>
                    );
                })}
            </div>
        </section>
    );
}