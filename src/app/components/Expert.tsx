import Image from "next/image";

export default function Expert() {
  const expertImage = [
    {
      src: "/expert1.png",
      name: "Jean-Marc ONANA",
      title: "Principal Solution Architect",
      details: [
        "15+ years of .NET experience",
        "Microsoft MVP for 8 years",
        "Author of 3 books on software architecture",
      ],
      description: "Session: “Revolutionize your applications with .NET 9 and AI”"
    },
  ]

  return (
    <div className="m-3 w-wull h-440 bg-[#1F143B] mt-10 rounded-2xl">
      <div className="max-w-7xl mx-auto  ">
        <div className="font-['Space_Grotesk'] font-bold text-[30px] leading-[110%] tracking-[-0.08em]">
          <span className="text-[#FFFFFF]">Renowned experts to</span> <br />
          <span className="text-[#8B6BF8]">inspire you</span>
        </div>
        <div className="max-w-6xl mx-auto mt-4 grid grid-cols-4 gap-6">
           
            {
            Array.from({ length: 8 },(i=>{return {...expertImage[0],k:i}})).map((el, index) => (
              <div key={index} className="h-80 bg-[#1F143B] relative">
              <div className=" h-70 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-3 border-[#1F143B] h-15 w-15 rounded-2xl"
                  src={el.src}
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-[252px] h-[225px] absolute top-20 left-4 right-4 ">
                <h1 className=" top-20 ml-2 font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">{el.name} </h1>
                <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">{el.name} </p>
                <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
                <ul>
                  {el.details.map((detail, idx) => (
                    <li key={idx} className="ml-2 font-['Lexend']  text-[#404040] font-light text-[16px]">. {detail}</li>
                  ))}
                </ul>
                 <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
                 <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">{el.description} </p>

              </div>
            </div>
            ))
            }
          </div>
       
        {/*  deuxieme div */}
        <div className="relative bg-[url(/imgbag.png)] bg-cover bg-no-repeat bg-center max-w-7xl mx-auto h-[558px] rounded-2xl mt-10">
          <div className="flex-none absolute bottom-0 left-0 m-6  h-[290px] rounded-[18px] bg-[#FFFFFF] shadow-lg  items-center justify-center">
            <div className="w-[500px] h-[133px] mt-5 m-5">
              <h1 className="font-['Space_Grotesk'] font-black leading-none text-[28px] ">
                <span className="text-[#512BD4] ">
                  {" "}
                  Must-attend tech event for the
                </span>{" "}
                <br /> Microsoft Ecosystem in <br /> Cameroon
              </h1>
              <p className="font-['Lexend'] text-[15px] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
            <div className="w-[500px] h-[115px] gap-8 m-5 ">
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
        <div className="font-['Space_Grotesk'] font-bold text-[25px] mt-10 leading-[110%] tracking-[-0.08em]">
          <span className="text-[#FFFFFF]">Core team</span>
        </div>
         <div className="max-w-6xl mx-auto mt-4 grid grid-cols-4 gap-6">
           
            {
            Array.from({ length: 4 },(i=>{return {...expertImage[0],k:i}})).map((el, index) => (
              <div key={index} className="h-80 bg-[#1F143B] relative">
              <div className=" h-70 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-3 border-[#1F143B] h-15 w-15 rounded-2xl"
                  src={el.src}
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-[252px] h-[225px] absolute top-20 left-4 right-4 ">
                <h1 className=" top-20 ml-2 font-['Space_Grotestk'] text-[20px] text-[#190649] font-bold">{el.name} </h1>
                <p className="ml-2 font-['Lexend']  text-[#404040] font-light text-[14px]">{el.name} </p>
                <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
                <ul>
                  {el.details.map((detail, idx) => (
                    <li key={idx} className="ml-2 font-['Lexend']  text-[#404040] font-light text-[16px]">. {detail}</li>
                  ))}
                </ul>
                 <div className="w-[210px] mt-2 border border-[#DDDDDD]"></div>
              </div>
            </div>
            ))
            }
          </div>
      </div>
    </div>
  );
}
