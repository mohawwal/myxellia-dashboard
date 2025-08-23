import React from "react";
import Image from "next/image";

interface FlowTabProps {
  Amount: string;
  subject: string;
  percentage: string;
  ArrowChart: string;
  textColor: string;
  percentageColor: string
}

const FlowTab = ({
  Amount,
  subject,
  ArrowChart,
  percentage,
  textColor,
  percentageColor
}: FlowTabProps) => {
  return (
    <div>
      <h2
        className="text-[19px] leading-[130%] text-start font-semibold pb-2.5"
        style={{ color: textColor }}
      >
        ₦{Amount}
      </h2>
      <div className="flex items-center justify-start space-x-1 text-[10px]">
        <p className="leading-[100%] font-medium text-[#3D3D3D]">{subject}</p>
        <Image src={ArrowChart} alt="Arrow Chart" width={14} height={14} />
        <p
          style={{ color: percentageColor }}
        >{percentage}%</p>
      </div>
    </div>
  );
};

export default FlowTab;


