import Image from "next/image";

export default function Archives() {
  return (
    <div className="w-full">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 mt-10 ">
            <div className="">
                <h1 className="font-grotesk font-black leading-[110%] tracking-[-8%] text-[20px] mt-0.5">They were there <br /><span className="text-[#512BD4]">last year.</span></h1>
                <p className="font-[Lexend] font-light text-[14px] leading-[140%] tracking-normal ">
                    An incredible experience! <br /> The workshops on .NET 8 and applied AI <br />
                     really helped me improve my skills. <br />
                      Well done to the team for the flawless <br /> organization.
                </p>
                <p className="font-bold text-[15px]">Jean-Paul M. – Backend developer</p>
            </div>
            <div className="">
                <p className="font-[Lexend] font-light text-[14px] leading-[140%] tracking-normal mt-10 ">
                   It was my first time participating and <br /> I loved it. I got to meet experts I <br />
                    already follow online and ask them all <br /> my questions. I am leaving feeling <br />
                    super motivated!
                </p>
                <p className="font-bold text-[15px]">Nathalie K. – Computer science student</p>
            </div>
            <div className="">
                <p className="font-[Lexend] font-light text-[14px] leading-[140%] tracking-normal mt-10 ">
                   The sessions on Azure and hybrid <br /> cloud were very practical and <br />
                    applicable to our projects. I highly <br /> recommend this conference to anyone <br />
                     who wants to advance in the Microsoft <br /> ecosystem.
                </p>
                <p className="font-bold text-[15px]">Hervé B. – Freelance .NET</p>
            </div>
            <div className="">
                <p className="font-[Lexend] font-light text-[14px] leading-[140%] tracking-normal mt-10 ">
                    I loved how kind and helpful the <br />instructors were. Even as a beginner, I <br />
                     felt included and encouraged.
                </p>
                <p className="font-bold text-[15px]">Stephanie E. – Junior Developer</p>
            </div>
        </div>
        <div className="w-full flex flex-nowrap overflow-auto gap-2 mt-5 h-[280px]">
             <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_1.png" alt="Hero Image" width={346} height={280}/>
                    </div>
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_2.jpg" alt="Hero Image" width={346} height={280} />
                    </div>
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_3.png" alt="Hero Image" width={346} height={280} />
                    </div>
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_5.png" alt="Hero Image" width={346} height={280} />
                    </div>
        </div>
        <div className="w-full flex flex-nowrap overflow-auto gap-2 mt-3 h-[280px]">
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_2.jpg" alt="Hero Image" width={465.33} height={280} />
                    </div>
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_3.png" alt="Hero Image" width={465.33} height={280} />
                    </div>
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_5.png" alt="Hero Image" width={465.33} height={280} />
                    </div>
        </div>
      
    </div>
  )
}
