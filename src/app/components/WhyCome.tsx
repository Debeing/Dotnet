import { BookOpenText, HandFist, RefreshCcw, UserRound } from "lucide-react";

export default function WhyCome() {
  return (
    <div className=" max-w-7xl mx-auto mt-10 mb-[50px] ">
      <div className="items-center w-full justify-between z-10 bg-white/95 px-4">
        <div className="w-[500px] mb-12 ">
          <h2 className="text-[36px] md:text-[40px] font-grotesk">
            Why come,{" "}
            <span className="text-[#512BD4] font-black leading-[110%] tracking-[-8%] ">
              why now?
            </span>
          </h2>
          <p className="font-lenx text-[12px] md:[15px] font-light">
            Much more than a conference, it is a learning experience, a chance
            to 
            share and discover opportunities that can transform your career.
          </p>
        </div>
        <div
          className="  justify-center mt-5 grid grid-cols-2
                 md:grid-cols-4  divide-x text-justify gap-2"
        >
          <div className="px-4">
            <HandFist />
            <h2 className="font-bold font-grotesk text-[17px] leading-[110%] mt-3 text-[#512BD4]">
              Boost your career
            </h2>

            <p className="text-[16px] ">
              Relevant content: real-life feedback, best practices, career
              coaching, resume or LinkedIn profile reviews.
            </p>
          </div>
          <div className=" px-4">
            <BookOpenText />
            <h2 className="font-bold font-grotesk text-[18px] leading-[110%] mt-3">
              Learn by doing
            </h2>
            <p>
              Guided workshops and labs allow you to code, test, and experiment.{" "}
            </p>
          </div>
          <div className=" px-4">
            <UserRound />
            <h2 className="font-bold font-grotesk text-[18px] leading-[110%] mt-3">
              Meet the ecosystem
            </h2>
            <p>
              The perfect opportunity to expand your network, exchange ideas,
              and find new collaborators or professional opportunities.
            </p>
          </div>
          <div className="  px-4">
            <RefreshCcw />
            <h2 className="font-bold font-grotesk text-[18px] leading-[110%] mt-3">
              Stay up to date
            </h2>
            <p>
              Experts and practitioners reveal the latest developments in .NET,
              C#, Azure, AI, DevOps, security, and modern architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
