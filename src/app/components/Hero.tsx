"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, useMemo } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const targetDate = useMemo(
    () => new Date("2025-11-12T00:00:00").getTime(),
    []
  );
  const calculateTimeRemaining = useCallback((): TimeRemaining => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(
    calculateTimeRemaining()
  );

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeRemaining]);

  if (!isClient) {
    return null;
  }

  return (
    <section className=" max-w-7xl mx-auto px-3 lg:px-8">
      <div className="mt-16 flex flex-col-reverse lg:flex-row lg:gap-0">
        
        {/* Right */}
        <div className="w-full md:w-1/2 relative ">
          <span className="border rounded-2xl text-[9px] font-light font-grotesk">
            Must-attend tech event for the Microsoft Ecosystem in Cameroon
          </span>
          <h1 className="font-[Space_Grotesk] font-bold text-[26px] md:text-[40px]">
            .NET Community Conference 2025 | 8th edition
          </h1>
          <p className="font-light font-lenx text-[18px]">
            Join hundreds of passionate developers for a day dedicated to the
            .NET ecosystem. Share your experiences and let&apos;s build the
            future of development together.
          </p>

          <div className="flex justify-center mt-[35px]">
            <div className="pr-4 ">
              <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">
                100 places
              </span>
              <p className="font-lenx font-light text-[14px] leading-[120%]">
                Available
              </p>
            </div>
            <div className="border-l-2 px-4">
              <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold  ">
                Black coffee
              </span>
              <p className="font-lexend font-light text-[14px] tracking-normal leading-[120%]">
                Location
              </p>
            </div>
            <div className=" border-l-2 px-4">
              <span className="text-[18px] leading-[160%] tracking-normal text-[#512BD4] font-bold">
                +12
              </span>
              <p className="font-lexend font-light text-[14px] leading-[120%]">
                Speakers
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="w-full  mt-5 relative gap-2 flex flex-col md:flex-row">
            <button className="px-10 py-3.5 rounded-[13px] font-grotesk font-bold text-[16px]   bg-[#0A855F] text-white hover:bg-[#000000] ">
              Subscribe to event
            </button>
            <button className=" bg-[#FFFFFF] text-black hover:bg-[#FFFFFF] border border-[#DDDDDD] px-6 py-3.5  rounded-[13px] font-grotesk font-bold text-[16px] gap-2.5 leading-[160%] tracking-normal text-center ">
              Share event
            </button>
          </div>
        </div>

        {/* Left */}
        <div className="w-full md:w-1/2 order-1 col-span-1 lg:order-2 flex justify-end">
          <div className="w-full lg:w-fit flex flex-col">
            
              <div className="bg-[#512BD4] w-[120px] h-[31px] rounded-[12px] px-5 py-2.5  border-2 borer-[4px] border-[#FFFFFF] border-[4px]text-[16px] leanding-[160%] text-white tracking-[-4%] font-grotesk font-bold  items-center justify-center rotate-4 flex">
                Time left
              </div>

            <div className="bg-[#E1A325] w-full rounded-[12px] px-5.5 py-5 flex ">
              <h1 className="text-[20px] lg:text-[34px] font-grotesk font-bold leading-[110%] tracking-[-8%] text-center align-center text-[#2D2006]">
                {timeLeft.days} Days :{" "}
                <span className="font-light leading-[160%]  tracking-[-1.55%]">
                  {timeLeft.hours} hours : {timeLeft.minutes} min :{" "}
                  {timeLeft.seconds} s
                </span>
              </h1>
            </div>

            <div className="flex justify-end ">
              <div className="bg-[#0A855F] w-[226px] font- h-[31px] text-white z-12 rounded-[12px] border-2 border-white text-[16px] leading-[160%]tracking-normal items-center text-center justify-center -rotate-6 font-grotesk">
                Date <span className="font-bold">November 12, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
