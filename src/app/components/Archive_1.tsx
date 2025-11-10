import Image from "next/image";

export default function Archive_1() {
  const archi = [
    { file: "/image10.jpg", alt: "image 3" },
    { file: "/image_6.jpg", alt: "image 2" },
    { file: "/che.png", alt: "image 1" },
  ];
  return (
    <div className="w-full m-3 mt-3 flex flex-nowrap gap-4 overflow-auto box-border no-scrollbar">
      {archi.map(({ file, alt }, index) => {
        return (
          <div key={index} className="shrink-0 ">
            <Image
              src={file}
              alt={alt}
              width={346}
              height={280}
              className="w-100 h-full rounded-3xl object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
