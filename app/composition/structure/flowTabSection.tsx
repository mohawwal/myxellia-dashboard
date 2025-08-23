import React from "react";
import FlowTabProps from "./FlowTabProps";
import ArrowChartUp from "../../../public/chartArrow1.svg";
import ArrowChartDown from "../../../public/chartArrow2.svg";
import ArrowChartRed from "../../../public/chartArrowRed.svg";

const FlowTabSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="border border-[#E4E4E4] h-[78px] rounded-[12px] p-3">
          <FlowTabProps
            percentageColor="#12B76A"
            textColor="#4545FE"
            Amount={"120,000,000.00"}
            subject={"Total Inflow"}
            ArrowChart={ArrowChartUp}
            percentage={"2.5"}
          />
        </div>
        <div className="border border-[#E4E4E4] h-[78px] rounded-[12px] p-3">
          <FlowTabProps
            percentageColor="#12B76A"
            textColor="#12B76A"
            Amount={"50,000,000.00"}
            subject={"MRR"}
            ArrowChart={ArrowChartUp}
            percentage={"2.5"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="border border-[#E4E4E4] h-[78px] rounded-[12px] p-3">
          <FlowTabProps
            percentageColor="#14B8A6"
            textColor="#14B8A6"
            Amount={"120,000,000.00"}
            subject={"Total Inflow"}
            ArrowChart={ArrowChartDown}
            percentage={"2.5"}
          />
        </div>
        <div className="border border-[#E4E4E4] h-[78px] rounded-[12px] p-3">
          <FlowTabProps
            percentageColor="#F04438"
            textColor="#F04438"
            Amount={"100,000,000.00"}
            subject={"Total Inflow"}
            ArrowChart={ArrowChartRed}
            percentage={"2.5"}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowTabSection;
