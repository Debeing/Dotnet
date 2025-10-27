import Image from "next/image";

export default function Expert() {
  return (
    <div className="m-3 w-wull h-300 bg-[#1F143B] mt-10 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="font-['Space_Grotesk'] font-bold text-[25px] leading-[110%] tracking-[-0.08em]">
          <span className="text-[#FFFFFF]">Renowned experts to</span> <br />
          <span className="text-[#8B6BF8]">inspire you</span>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto mt-4 flex justify-around">
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert1.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
              {/* <h1 className="absolute top-20 ml-2 text-['Space_Grotesk'] font-bold">Jean-Marc ONANA</h1> */}
            </div>
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert2.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert3.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert4.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-4 flex justify-around">
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert5.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert6.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert7.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="w-48 h-54 bg-[#1F143B] relative">
              <div className="w-48 h-44 rounded-2xl mt-10 bg-[#FFFFFF] relative">
                <Image
                  className="absolute -top-7 left-2 border-2 h-15 w-15 rounded-2xl"
                  src="/expert8.png"
                  alt="Hero Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
       <div className="relative bg-[url(/imgbag.png)] bg-cover bg-no-repeat bg-center max-w-6xl mx-auto h-[558px] rounded-2xl mt-10">
  <div className="absolute bottom-0 left-0 m-6 w-[560px] h-[290px] rounded-[18px] bg-[#FFFFFF] shadow-lg flex items-center justify-center">
    kjfsiwiwei
  </div>
</div>

      </div>
    </div>
  );
}
