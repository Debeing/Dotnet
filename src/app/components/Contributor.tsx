import Image from "next/image";
import Link from "next/link";

export default function Contributor() {
  return (
    <div className=" max-w-7xl mx-auto mt-10 mb-[100px]">
      <div className="items-center w-full justify-between z-10 bg-white/95 px-4">
        <div className="">
          <h2 className="text-[44px] font-bold font-grotesk">Contributors</h2>
          <p className="font-lenx text-[15px] leading-[140%] font-light">
            Thank you to everyone who makes this event possible.
          </p>
        </div>
        <div
          className="  justify-center mt-5 grid
                 grid-cols-2 md:grid-cols-4 divide-x text-justify gap-2 mb-2"
        >
          <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/next.png"
                alt="Hero Image"
                width={40}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/packt.png"
                alt="Hero Image"
                width={115}
                height={31}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/expand.png"
                alt="Hero Image"
                width={39}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/examboot.png"
                alt="Hero Image"
                width={168}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
</div>
          <div className="max-w-6xl mx-auto border border-[#DDDDDD] opacity-100 rotate-0"></div>

          <div className=" justify-center mt-4 grid
                 grid-cols-2 md:grid-cols-4 divide-x text-justify gap-2">
            <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/lagenceyop.png"
                alt="Hero Image"
                width={135}
                height={15}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/techcom.png"
                alt="Hero Image"
                width={63}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/codec.png"
                alt="Hero Image"
                width={43}
                height={40}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          <div className="px-4">
            <div className="">
              <Image
                className="grayscale"
                src="/packt2.png"
                alt="Hero Image"
                width={115}
                height={31}
              />
              <p className="font-grotesk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do . </p>
              <Link href="/" className="underline font-bold">See more</Link>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}
