import React from 'react'
import secImg from "../../../public/images/sectionImage.jpg";
import Image from "next/image";

const Stats = () => {
  return (
    <div>
        <div className="relative">
          <Image
            src={secImg}
            alt="Section Image"
            width={430}
            height={286}
            className="rounded-[16px]"
          />
          <div className="absolute inset-0 rounded-[16px] bg-gradient-to-b from-transparent via-[#0000000D] to-[#00000099]"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <div className="text-white font-semibold">
              <p className="text-[14px] font-medium">Most CLICKED</p>
              <p className="text-[18px] font-semibold">
                Urban Prime Plaza Premiere
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-1.5">
            <div className="w-[7px] h-[7px] bg-white rounded-full" />
            <div className="w-[7px] h-[7px] bg-[#737373] rounded-full" />
            <div className="w-[7px] h-[7px] bg-[#737373] rounded-full" />
          </div>
        </div>
    </div>
  )
}

export default Stats