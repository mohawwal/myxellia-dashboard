import React from 'react';
import Image from 'next/image';
import gt from "../../../public/greaterThan.svg";

interface OverviewTabProps {
  mainIcon: string;
  name: string;
  sections: { label: string; value: string }[];
}

const OverviewTab = ({ mainIcon, name, sections }: OverviewTabProps) => {
  return (
    <div>
        <div className="h-[50px] flex items-center justify-between bg-[#F5F5F5] px-3 rounded-t-[16px]">
          <div className="text-[14px] font-medium leading-[100%] flex items-center justify-start gap-2.5">
            <Image src={mainIcon} alt="House Icon" width={22} />
            <p>{name}</p>
          </div>
          <div className="text-[12px] text-[#4545FE] leading-[100%] flex items-center justify-end gap-2.5">
            <p>View all</p>
            <Image src={gt} alt={"gt"} />
          </div>
        </div>
        <div className="border-t border-t-[#E4E4E4] rounded-b-[15px] bg-white flex items-start justify-between py-4 px-8 h-full">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-start justify-start gap-5 pt-4">
              <p className="text-[#525252] text-[14px] leading-[20%]">{section.label}</p>
              <h2 className="text-[24px] font-semibold leading-[38px]">
                {section.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
  );
};

export default OverviewTab;