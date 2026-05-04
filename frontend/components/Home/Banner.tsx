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

   const resetTimer = () => {
    setTimerKey((prev) => prev + 1);
  };


    useEffect(() => {
        if (!banner) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesLength);
        }, 5000);

        return () => clearInterval(interval);
    }, [banner, slidesLength]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slidesLength);
        resetTimer();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
        resetTimer();
    };
    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setDragStart(e.clientX);
        setDragging(true);
    };


      const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (dragStart === null) return;

        const dragEnd = e.clientX;
        const difference = dragStart - dragEnd;

    if (difference > 50) {
      nextSlide();
    } else if (difference < -50) {
      prevSlide();
    } else {
      resetTimer();
    }
        setDragStart(null);
        setDragging(false);
    };

    const handlePointerLeave = () => {
        setDragStart(null);
        setDragging(false);
    };

    return (
        <>
            <div className=" bg-red-600 w-full flex- justify-center items-center relative">
                <div
                    key={currentSlide}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerLeave}
                    className={`w-full h-40 flex justify-center items-center bg-yellow-300 z-10 transition-all select-none ${dragging ? "cursor-grabbing" : "cursor-grab"
                        }`}
                >
                    {slides[currentSlide]}
                </div>

                    <button onClick={prevSlide} className="cursor-pointer absolute p-3 top-1/2 -translate-y-1/2">
                        <IoIosArrowBack />
                    </button>
                    <button onClick={nextSlide} className="cursor-pointer absolute p-3 right-0 top-1/2 -translate-y-1/2">
                        <IoIosArrowForward />
                    </button>

                <div className="flex justify-center items-center absolute botom bottom-3 left-1/2 -translate-x-1/2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() =>goToSlide(index)}
                            aria-label={`Ir al slide ${index + 1}`}
                            className={`h-2.5 w-2.5 m-2 rounded-full transition-all ${currentSlide === index ? "bg-white scale-125" : "bg-stone-400/40 cursor-pointer"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
