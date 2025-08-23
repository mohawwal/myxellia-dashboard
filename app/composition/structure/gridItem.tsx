import Image from "next/image";
import React from "react";

import { StaticImageData } from "next/image";

interface GridItemProps {
  title: string;
  items: { subtitle: string; image: StaticImageData }[];
  activeIndex: number;
  onDotClick: (itemIndex: number) => void;
}

const GridItem = ({ title, items, activeIndex, onDotClick }: GridItemProps) => {
  return (
    <div className="relative w-full sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] xl:w-auto xl:flex-1">
      <Image
        src={items[activeIndex].image}
        alt="Section Image"
        width={430}
        height={286}
        className="rounded-[16px] w-full h-auto"
      />
      <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-transparent via-[#0000000D] to-[#00000099]"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <div className="text-white font-semibold">
          <p className="text-[14px] font-medium">{title}</p>
          <p className="text-[18px] font-semibold">{items[activeIndex].subtitle}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-1.5">
        {items.map((_, itemIndex) => (
          <div
            key={itemIndex}
            className={`w-[5px] h-[5px] rounded-full cursor-pointer ${
              activeIndex === itemIndex ? "bg-white" : "bg-[#737373]"
            }`}
            onClick={() => onDotClick(itemIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default GridItem;