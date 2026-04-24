"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Background() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        setIsMobile(window.innerWidth < 1224);
    }, []);

    if (isMobile === null) return null; // evita mismatch

    return (
        <>
            <Image
                unoptimized 
                src={isMobile ? "/InProgressMobile.gif" : "/InProgress.gif"}
                fill={true}
                alt="Guatoncito working"
                className="-z-10 object-cover object-center w-auto h-auto"
            />
        </>
    );
}
