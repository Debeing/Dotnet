import Image from "next/image";

export default function Teams() {
  const Members = [
    {
      image: "/expert1.png",
      name: "Jean-Marc ONANA",
      alt: "Jean-Marc ONANA",
      role: "Principal Solution Architect",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
    {
      image: "/expert2.png",
      name: "Thomas NKUISSI",
      alt: "Thomas NKUISSI",
      role: "Principal Solution Architect",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
    {
      image: "/expert4.png",
      name: "Paul MBARGA",
      role: "Principal Solution Architect",
      alt: "Paul MBARGA",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
    {
      image: "/expert3.png",
      name: "Georges FOTSO",
      role: "Principal Solution Architect",
      alt: "Georges FOTSO",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
    {
      image: "/expert3.png",
      name: "Paul MBARGA",
      role: "Principal Solution Architect",
      alt: "Paul MBARGA",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
    {
      image: "/expert1.png",
      name: "Jean-Marc ONANA",
      role: "Principal Solution Architect",
      alt: "Jean-Marc ONANA",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
    {
      image: "/expert2.png",
      name: "Thomas NKUISSI",
      role: "Principal Solution Architect",
      alt: "Thomas NKUISSI",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
    {
      image: "/expert5.png",
      name: "Thomas NKUISSI",
      role: "Principal Solution Architect",
      alt: "Thomas NKUISSI",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      desc: "Session: &quot;Revolutionize your applications with .NET 9 and AI&quot;",
    },
  ];

  return (
    <div className="md:px-2.5 mt-20">
      <div className="w-full bg-[#1F143B] md:mx-auto  md:py-20 md:px-8 md:rounded-[44px] md:space-y-11">
        <div className="max-w-[353px]">
          <h2 className="font-grotesk text-[36px] text-[#FFFFFF] font-bold ">
            Renowned experts{" "}
            <span className="text-[#8B6BF8]">to inspire you</span>
          </h2>
        </div>
        <div className=" mt-25">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-20 md:gap-6 md:gap-y-20">
            {Members.map((member, idx) => (
              <div key={idx} className=" ">
                <div className="flex flex-col bg-[#FFFFFF] rounded-[13px] shadow-lg ">
                  <div className=" rounded-2xl pl-2 md:pl-5 -mt-[50px]">
                    <Image
                      className=" w-[100px] h-[100px] object-cover border-5 border-[#1F143B] rounded-2xl"
                      src={member.image}
                      alt={member.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="p-1.5 md:p-5">
                    <h4 className=" font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">
                      {member.name}
                    </h4>
                    <p className="font-['Lexend']  text-[#404040] font-light text-[14px] border-b border-[#1F143B] pb-3">
                      {member.role}
                    </p>
                    <ul className=" text-[16px] font-lenx text-[#404040] font-light md:px-3 list-inside md:p-3 list-disc">
                      {member.details &&
                        member.details.map((data, idx) => (
                          <li key={idx}>{data}</li>
                        ))}
                    </ul>
                    <p className="md:ml-2 font-['Lexend'] border-t border-[#1F143B] pt-3 text-[#404040] font-light text-[16px]">
                      Session: &quot;Revolutionize your applications with .NET 9
                      and AI&quot;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full items-center gap-2 flex flex-col mt-4 md:hidden">
            <button className="bg-white w-full p-7 rounded-[13px] font-grotesk font-bold text-[16px] leading-[160%]">
              See all speakers
            </button>
            <button className="bg-[#0A855F] w-full p-7 rounded-[13px] text-white font-grotesk font-bold text-[16px] leading-[160%]">
              Become a speakers
            </button>
          </div>
          {/*  deuxieme div */}
          <div className="relative bg-[url(/imgbag.png)] bg-cover bg-no-repeat bg-center min-h-[558px] flex  items-center  rounded-2xl px-2 mt-10">
            <div className="flex-none md:absolute bottom-0 left-0   h-[290px] rounded-[18px] bg-[#FFFFFF] shadow-lg  items-center justify-center w-full relative">
              <div className="w-full h-[133px]  md:mt-5 m-5">
                <h1 className="font-['Space_Grotesk'] font-black leading-none text-[28px] ">
                  <span className="text-[#512BD4] ">
                    {" "}
                    Must-attend tech event for the
                  </span>{" "}
                  <br /> Microsoft Ecosystem in <br /> Cameroon
                </h1>
                <p className="font-['Lexend'] text-[15px] leading-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. 
                </p>
              </div>
              <div className="w-full min-h-[115px] gap-4 md:gap-8 m-5 ">
                <div className="flex flex-wrap gap-2">
                  <button className="w-[130px] h-[42px] rounded-[13px] border border-solid opacity-100">
                    <span className="text-[14px] font-['Lexend'] font-light">
                      Subscribe to event
                    </span>
                  </button>
                  <button className="w-[86px] h-[42px] rounded-[13px] border border-solid opacity-100">
                    <span className="text-[14px] font-['Lexend'] font-light">
                      Subscribe
                    </span>
                  </button>
                  <button className="w-[130px] h-[42px] rounded-[13px] border border-solid opacity-100">
                    <span className="text-[14px] font-['Lexend'] font-light">
                      Subscribe to event
                    </span>
                  </button>
                  <button className="w-[86px] h-[42px] rounded-[13px] border border-solid opacity-100">
                    <span className="text-[14px] font-['Lexend'] font-light">
                      Subscribe
                    </span>
                  </button>
                  <button className="w-[130px] h-[42px] rounded-[13px] border border-solid opacity-100">
                    <span className="text-[14px] font-['Lexend'] font-light">
                      Subscribe to event
                    </span>
                  </button>
                  <button className="w-[130px] h-[42px] rounded-[13px] border border-solid opacity-100">
                    <span className="text-[14px] font-['Lexend'] font-light">
                      Subscribe to event
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* derniere div */}
          <div className="max-w-[353px]">
          <h2 className="font-grotesk text-[34px] text-[#FFFFFF] font-bold ">
            Core team{" "}
          </h2>
        </div>
         
          <div className="grid grid-cols-2 md:grid-cols-4 mt-15 gap-x-2 gap-y-20 md:gap-6 md:gap-y-20">
            {Array.from({ length: 4 }, (i) => {
              return { ...Members[0], k: i };
            }).map((member, idx) => (
              <div key={idx} className=" ">
                <div className="flex flex-col bg-[#FFFFFF] rounded-[13px] shadow-lg ">
                  <div className=" rounded-2xl pl-2 md:pl-5 -mt-[50px]">
                    <Image
                      className=" w-[100px] h-[100px] object-cover border-5 border-[#1F143B] rounded-2xl"
                      src={member.image}
                      alt={member.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="p-1.5 md:p-5">
                    <h4 className=" font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">
                      {member.name}
                    </h4>
                    <p className="font-['Lexend']  text-[#404040] font-light text-[14px] border-b border-[#1F143B] pb-3">
                      {member.role}
                    </p>
                    <p className="md:ml-2 font-['Lexend'] border-t border-[#1F143B] pt-3 text-[#404040] font-light text-[16px]">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full items-center gap-2 flex flex-col mt-4 md:hidden">
            <button className="bg-white w-full p-7 rounded-[13px] font-grotesk font-bold text-[16px] leading-[160%]">
              See all speakers
            </button>
            <button className="bg-[#0A855F] w-full p-7 rounded-[13px] text-white font-grotesk font-bold text-[16px] leading-[160%]">
              Become a speakers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
