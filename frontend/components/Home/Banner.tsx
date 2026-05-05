'use client'
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const slides = [1, 2, 3];
const slidesLength = slides.length;
export default function Banner() {
    const [banner, setBanner] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const [dragging, setDragging] = useState(false);
    const [timerKey, setTimerKey] = useState(0);


    {/* ---------------------------------- Timer --------------------------------- */ }
    const resetTimer = () => {
        setTimerKey((prev) => prev + 1);
    };

    useEffect(() => {
        if (!banner) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesLength);
        }, 5000);

        return () => clearInterval(interval);
    }, [banner, slidesLength, timerKey]);

    {/* --------------------- funct for button arrow sliders --------------------- */ }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slidesLength);
        resetTimer();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
        resetTimer();
    };

    /* ------------------------ funct for button dots sliders ------------------------ */

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        resetTimer();
    };

    /* ------------------------- funct for drag slidders ------------------------ */

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setDragStart(e.clientX);
        setDragging(true);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (dragStart === null) return;

        const dragEnd = e.clientX;
        const difference = dragStart - dragEnd;

        if (difference > 50) {
            nextSlide();
        } else if (difference < -50) {
            prevSlide();
        }
        resetTimer();
        setDragStart(null);
        setDragging(false);
    };

    const handlePointerLeave = () => {
        setDragStart(null);
        setDragging(false);
    };

    return (
        <>
            <div className=" bg-red-600 w-full h-[90vh] justify-center items-center relative">
                <div className="absolute -bottom-2 left-0 w-full h-26 overflow-hidden pointer-events-none">
                    <div className="absolute -left-4 -right-4 bottom-0 h-full bg-linear-to-t from-background from-5% to-90% to-transparent blur-xs" />
                </div>
                {/* --------------------------------- Sliders -------------------------------- */}
                <div
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerLeave}
                    onPointerLeave={handlePointerLeave}
                    className={`w-full h-full flex justify-center items-center bg-yellow-300 z-10 transition-all select-none touch-pan-y ${dragging ? "cursor-grabbing" : "cursor-grab"
                        }`}
                >
                {slides[currentSlide]}
            </div>

            {/* ------------------------- Arrows Buttons Sliders ------------------------- */}
            <button onClick={prevSlide} className="cursor-pointer absolute p-3 top-1/2 -translate-y-1/2">
                <IoIosArrowBack className="shadow-goldaura" />
            </button>
            <button onClick={nextSlide} className="cursor-pointer absolute p-3 right-0 top-1/2 -translate-y-1/2">
                <IoIosArrowForward className="shadow-goldaura" />
            </button>

            {/* -------------------------- Dots Buttons Sliders -------------------------- */}
            <div className="flex justify-center items-center absolute botom bottom-2 left-1/2 -translate-x-1/2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                        className={`h-2.5 w-2.5 m-2 rounded-full transition-all ${currentSlide === index ? "bg-white scale-125 shadow-goldaura" : "bg-stone-400/40 cursor-pointer"
                            }`}
                    />
                ))}
            </div>
        </div >
        </>
    );
}
