import Image from "next/image";

export default function Archives() {
  return (
    <div className="w-full">
        <div className="w-full flex flex-nowrap overflow-auto gap-2 mt-5 h-[280px]">
             <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_3.png" alt="Hero Image" width={346} height={280}/>
                    </div>
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_2.jpg" alt="Hero Image" width={346} height={280} />
                    </div>
                    <div>
                      <Image className="rounded-2xl h-full w-full" src="/image_1.png" alt="Hero Image" width={346} height={280} />
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
