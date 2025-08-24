"use client";

import { useState } from "react";
import Image from "next/image";
import logoBig from "../../public/logoBig.svg";
// import logo from "../../public/logo.svg";
import bell from "../../public/bell.svg";
import budget from "../../public/budgeting.svg";
import calender from "../../public/calender.svg";
import message from "../../public/notification.svg";
import Hambuger from "../composition/ui/Hambuger";
import settingsM from "../../public/settingsM.svg";
import compm from "../../public/compM.svg";
import chartM from "../../public/chart.svg";
import BudgetModal from "../composition/ui/bugdetModal";
import NavMobile from "../composition/ui/navMobile";
import ProfileHoverDropdown from "../composition/ui/profileHoverDropdown";
import Dropdown from "../composition/modal/Dropdown";
import SideModal from "../composition/modal/SideModal";
import Calender from "../composition/ui/calender";

const menuItems = [
  { src: bell, alt: "notifications", text: "Notifications" },
  { src: budget, alt: "budget", text: "Budget" },
  { src: calender, alt: "calendar", text: "Calendar" },
  { src: message, alt: "messages", text: "Messages" },
];

export default function Header() {
  const [isBudgetMenuOpen, setIsBudgetMenuOpen] = useState(false);
  const [isCalenderMenuOpen, setIsCalenderMenuOpen] = useState(false);

  const [openBudget, setOpenBudget] = useState(false);
  const handleBudgetOpen = () => setOpenBudget(true);
  const handleBudgetClose = () => setOpenBudget(false);

  const [openCalender, setOpenCalender] = useState(false);
  const handleCalenderOpen = () => setOpenCalender(true);
  const handleCalenderClose = () => setOpenCalender(false);

  const handleBudget = () => {
    handleBudgetOpen();
    setIsBudgetMenuOpen(false);
  };

  const handleCal = () => {
    handleCalenderOpen();
  };

  const toggleMenu = () => {
    setIsBudgetMenuOpen(!isBudgetMenuOpen);
    setIsCalenderMenuOpen(!isCalenderMenuOpen);
  };

  const handleMenuItemClick = (itemSrc: unknown) => {
    if (itemSrc === budget) {
      handleBudget();
    } else if (itemSrc === calender) {
      handleCal();
    }
  };

  const budgetSummary = [
    {
      icon: settingsM,
      title: "Set up annual budgets by account category",
      message:
        "Allocate funds across income and expense lines with full visibility.",
    },
    {
      icon: compm,
      title: "Track actuals vs budget in real time",
      message:
        "See how your community is performing against plan, month by month.",
    },
    {
      icon: chartM,
      title: "Adjust figures and forecast with ease",
      message:
        "Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.",
    },
  ];

  return (
    <>
      <div className="md:h-[82px] h-[70px] bg-black text-white w-full flex items-center relative px-4 sm:px-6 lg:px-18">
        <div className="w-full flex items-center justify-between mx-auto">
          <div className="flex items-center flex-row space-x-2">
            <div className="hidden sm:block">
              <Image src={logoBig} alt="logo" height={26} priority />
            </div>
            <div className="block sm:hidden">
              <Image src={logoBig} alt="logo" height={26} priority />
            </div>
          </div>

          <div className="hidden md:flex items-center flex-row space-x-6">
            {menuItems.map((item, index) => (
              <button
                className="cursor-pointer"
                key={index}
                onClick={() => handleMenuItemClick(item.src)}
              >
                <Image src={item.src} alt={item.alt} width={28} />
              </button>
            ))}
            <Dropdown trigger={
              <ProfileHoverDropdown 
              name="Dylan Frank" 
              email="dylanfrank@example.com" 
              initial="D"
            />
            }>
              <div className="w-[300px] p-[15px]">
                list of the menu items
              </div>
            </Dropdown>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <Hambuger isMenuOpen={isBudgetMenuOpen} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 text-white bg-black bg-opacity-95 z-99 transition-all duration-300 ease-in-out ${
          isBudgetMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      >
        <NavMobile 
          toggleMenu={toggleMenu} 
          menuItems={menuItems}
          onMenuItemClick={handleMenuItemClick}
        />
      </div>
      <BudgetModal
        open={openBudget}
        handleClose={handleBudgetClose}
        budgetSummary={budgetSummary}
      />
      <SideModal
        open={openCalender}
        handleClose={handleCalenderClose}
        side="right"
        width="420px"
      >
        <div className="h-full min-w-auto bg-[#0D0D0D]">
          <Calender onClose={handleCalenderClose} />
        </div>
      </SideModal>
    </>
  );
}