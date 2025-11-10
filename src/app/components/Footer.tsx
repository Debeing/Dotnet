import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto mt-10 md:mt-20 mb-5 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        <div className="flex flex-col w-full md:w-[300px] gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo du site"
              width={72}
              height={34}
              className="opacity-100"
            />
          </Link>
          <p className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4  md:w-auto">
          <div>
            <h3 className="font-bold mb-3">Navigation</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="font-[Lexend] font-light text-[14px] leading-[120%] text-[#575362] no-underline hover:text-[#0A855F]"
                >
                  Home
                </Link>
              </li>
              <li className="font-[Lexend] font-light text-[14px] text-[#575362]">
                Events
              </li>
              <li className="font-[Lexend] font-light text-[14px] text-[#575362]">
                About us
              </li>
              <li className="font-[Lexend] font-light text-[14px] text-[#575362]">
                Projects
              </li>
              <li className="font-[Lexend] font-light text-[14px] text-[#575362]">
                Resources
              </li>
            </ul>
          </div>

          <div className="order-3">
            <h3 className="font-bold mb-3">Contacts</h3>
            <ul className=" text-[#575362]">
              <li>Douala Cameroon</li>
              <li>dotnetcameroon@outlook.com</li>
              <li>+237 699254549 +237 653953452</li>
            </ul>
          </div>

          <div className="order-2">
            <h3 className="font-bold mb-3">Social</h3>
            <ul className="space-y-1 text-[#575362]">
              <li>Discord</li>
              <li>WhatsApp</li>
              <li>LinkedIn</li>
              <li>Telegramme</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="gap-4 flex flex-row md:flex-col">
            <button className="w-full md:w-[190px] h-[50px] rounded-[13px] bg-[#0A855F] text-white font-['Space_Grotesk'] text-[16px] font-semibold">
              Subscribe to event
            </button>
            <button className="w-full md:w-[190px] h-[50px] rounded-[13px] border border-[#DDDDDD] bg-white font-bold text-[14px]">
              Share event
            </button>
          </div>
      </div>

      <div className="border-t border-[#DDDDDD] my-8"></div>

      <div className="flex justify-center items-center text-center font-[Lexend] font-light text-[14px] text-[#575362]">
        <p>
          Copyright © .NET Cameroun 2025 | Designed by
          <span className="font-bold ml-1">Lagence YOP</span>
        </p>
      </div>
    </footer>
  );
}