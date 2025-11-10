import Image from "next/image";

export default function Archives() {
  const arch = [
    { file: "/image_3.png", alt: "image 3" },
    { file: "/image_2.jpg", alt: "image 2" },
    { file: "/image_1.png", alt: "image 1" },
    { file: "/image_5.png", alt: "image 5" },
  ];
  return (
    <div className="w-full m-3 mt-4 flex flex-nowrap gap-4 overflow-auto box-border no-scrollbar">
      {arch.map(({ file, alt }, index) => {
        return (
          <div key={index} className="shrink-0">
            <Image
              src={file}
              alt={alt}
              width={346}
              height={280}
              className=" w-full h-full rounded-3xl object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
