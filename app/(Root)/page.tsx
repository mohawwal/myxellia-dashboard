"use client";
import React, { useState } from "react";
import ColumnChart from "../composition/ui/columnChart";
import Image from "next/image";
import angleft from "../../public/angleLeft.svg";
import anglerightFocus from "../../public/angleRightFocus.svg";
import houseIcon from "../../public/house.svg";
import userIcon from "../../public/userIcon.svg";
import OverviewTab from "../composition/structure/overViewTab";
import FlowTabSection from "../composition/structure/flowTabSection";
import secImg from "../../public/images/sectionImage.jpg";
import GridItem from "../composition/structure/gridItem";

const Home = () => {
  const [activeItem, setActiveItem] = useState(2);
  const [activeGridItemIndex, setActiveGridItemIndex] = useState([0, 0, 0]);

  const timePeriods = ["1 Week", "1 Month", "1 Year"];

  const listingsSections = [
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "80" },
    { label: "Archived", value: "1k" },
  ];

  const UserSections = [
    { label: "Total", value: "20.7k" },
    { label: "Riders", value: "8.5k" },
    { label: "Subscribers", value: "7.5k" },
  ];

  const gridItems = [
    {
      title: "Most CLICKED",
      items: [
        { subtitle: "Urban Prime Plaza Premiere", image: secImg },
        { subtitle: "Another Listing", image: secImg },
        { subtitle: "Yet Another Listing", image: secImg },
      ],
    },
    {
      title: "most wATCHLISTE",
      items: [
        { subtitle: "Urban Prime Plaza Premiere", image: secImg },
        { subtitle: "Another Watchlisted", image: secImg },
        { subtitle: "Yet Another Watchlisted", image: secImg },
        { subtitle: "Again Watchlisted", image: secImg },
        { subtitle: "Here is Watchlisted", image: secImg },
      ],
    },
    {
      title: "HOTTEST LISTING",
      items: [
        { subtitle: "Urban Prime Plaza Premiere", image: secImg },
        { subtitle: "Another Hot Listing", image: secImg },
        { subtitle: "Yet Another Hot Listing", image: secImg },
      ],
    },
  ];

  const handleDotClick = (gridIndex: number, itemIndex: number) => {
    const newActiveGridItemIndex = [...activeGridItemIndex];
    newActiveGridItemIndex[gridIndex] = itemIndex;
    setActiveGridItemIndex(newActiveGridItemIndex);
  };

  return (
    <div className="w-full py-5 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1370px]">
      <div className="text-[20px] text-[#191919] font-semibold leading-[100%]">
        Welcome, Ahmed
      </div>

      <div className="flex flex-col xl:flex-row items-start gap-[20px] py-5">
        <div className="w-full xl:w-[870px] h-auto xl:h-[345px] rounded-[16px] border border-[#E4E4E4] bg-white">
          <div className="flex flex-col sm:flex-row items-start justify-between p-5 gap-4 sm:gap-0">
            <div className="flex items-start justify-between flex-col gap-3.5">
              <h2 className="text-[#191919] font-semibold leading-[100%] text-[18px] sm:text-[20px]">
                Sales Overview
              </h2>
              <p className="text-[12px] text-[#606060] leading-[100%]">
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>

            <div className="flex items-end gap-3 flex-col w-full sm:w-auto">
              <div className="w-full sm:w-[177px] h-[46px] border border-[#D6D6D6] rounded-[72px] flex items-center justify-center">
                <p className="text-[12px]">View Transactions</p>
              </div>

              <ul className="flex items-center flex-row space-x-2 sm:space-x-3 pr-2 text-[#3D3D3D] text-[12px] sm:text-[14px] cursor-pointer overflow-x-auto">
                {timePeriods.map((period, index) => (
                  <li
                    key={index}
                    className={`h-[33px] w-[70px] sm:w-[80px] flex items-center justify-center rounded-[8px] flex-shrink-0 ${
                      activeItem === index ? "bg-[#F5F5F5] font-semibold" : ""
                    }`}
                    onClick={() => setActiveItem(index)}
                  >
                    {period}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#E4E4E4]" />
          <div className="px-4">
            <div className="w-full h-auto xl:h-[200px] flex flex-col xl:flex-row items-start justify-center gap-4 xl:gap-2">
              <div className="w-full xl:w-[50%] flex items-center justify-center min-h-[200px]">
                <Image
                  src={angleft}
                  alt="angleft"
                  width={18}
                  height={18}
                  className="hidden sm:block"
                />
                <ColumnChart />
                <Image
                  src={anglerightFocus}
                  alt="angleright"
                  width={18}
                  height={18}
                  className="hidden sm:block"
                />
              </div>

              <div className="w-full xl:w-[50%] py-3 xl:pl-2 mt-2">
                <FlowTabSection />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[430px] flex flex-col sm:flex-row xl:flex-col gap-5">
          <div className="border border-[#E4E4E4] h-auto sm:h-[160px] xl:h-[160px] w-full flex-1 rounded-[16px]">
            <OverviewTab
              mainIcon={houseIcon}
              name="Listing Overview"
              sections={listingsSections}
            />
          </div>
          <div className="border border-[#E4E4E4] h-auto sm:h-[160px] xl:h-[160px] w-full flex-1 rounded-[16px]">
            <OverviewTab
              mainIcon={userIcon}
              name="User Overview"
              sections={UserSections}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center gap-3 mb-20 md:mb-10">
        {gridItems.map((gridItem, gridIndex) => (
          <GridItem
            key={gridIndex}
            title={gridItem.title}
            items={gridItem.items}
            activeIndex={activeGridItemIndex[gridIndex]}
            onDotClick={(itemIndex) => handleDotClick(gridIndex, itemIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;