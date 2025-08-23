import React, { useState } from "react";
import Image from "next/image";
import back from "../../../public/chevronBack.svg";
import cancel from "../../../public/cancel.svg";
import next from "../../../public/next.svg";
import prev from "../../../public/prev.svg";

interface DayObj {
  day: number;
  isCurrentMonth: boolean;
  isPrevMonth: boolean;
  isNextMonth: boolean;
}

interface CalenderProps {
  onClose: () => void;
}

const Calender = ({onClose}: CalenderProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

  const getDaysInMonth = (date: Date): DayObj[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: DayObj[] = [];

    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();

    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isPrevMonth: true,
        isNextMonth: false,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isPrevMonth: false,
        isNextMonth: false,
      });
    }

    const totalCells = 42;
    let nextDay = 1;
    for (let i = days.length; i < totalCells; i++) {
      days.push({
        day: nextDay++,
        isCurrentMonth: false,
        isPrevMonth: false,
        isNextMonth: true,
      });
    }

    return days;
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const handleDayClick = (dayObj: DayObj) => {
    if (dayObj.isPrevMonth) {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() - 1);
        newDate.setDate(dayObj.day);
        return newDate;
      });
    } else if (dayObj.isNextMonth) {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setMonth(prev.getMonth() + 1);
        newDate.setDate(dayObj.day);
        return newDate;
      });
    } else if (dayObj.isCurrentMonth) {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setDate(dayObj.day);
        return newDate;
      });
    }
  };

  const days = getDaysInMonth(currentDate);
  const selectedDay = currentDate.getDate();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[50px] w-full bg-[#171717] flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center justify-start text-white gap-3">
            <button onClick={onClose}>
<Image src={back} alt="back" />
            </button>
          
          <p className="font-semibold text-[16px] leading-[100%]">Calender</p>
        </div>
        <button onClick={onClose}>
          <Image src={cancel} alt="cancel" />
        </button>
      </div>

      <div className="bg-[#0D0D0D] text-white p-5 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mx-auto mb-5 w-[227px]">
          <button onClick={() => navigateMonth(-1)}>
            <Image src={next} alt="next" className="w-[7.64px] h-[14px]" />
          </button>

          <h6 className="font-semibold text-[16px] text-white text-center">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h6>

          <button onClick={() => navigateMonth(1)}>
            <Image src={prev} alt="prev" className="w-[7.64px] h-[14px]" />
          </button>
        </div>

        <div className="w-full border border-[#242424] rounded-[5px] overflow-hidden">
          <div className="grid grid-cols-7 border-b border-[#242424]">
            {weekdays.map((day, index) => (
              <div
                key={day}
                className={`flex items-start justify-start p-1 h-[30px] ${
                  index < 6 ? 'border-r border-[#242424]' : ''
                }`}
              >
                <span className="text-[#969696] text-[8px] font-semibold uppercase">
                  {day}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {days.map((dayObj, index) => {
              const isSelected =
                dayObj.isCurrentMonth && dayObj.day === selectedDay;
              const isLastInRow = (index + 1) % 7 === 0;
              const isLastRow = index >= 35;
              
              const showMonthLabel = dayObj.isNextMonth && dayObj.day === 1;
              const nextMonthName = months[(currentDate.getMonth() + 1) % 12].slice(0, 3);
              
              return (
                <div
                  key={index}
                  className={`
                    relative flex items-start justify-start cursor-pointer text-[9px] transition-all duration-200 ease-in-out h-[88px]
                    ${dayObj.isCurrentMonth ? "text-[#969696]" : "text-[#BBBBBB99]"}
                    ${!isLastInRow ? 'border-r border-[#242424]' : ''}
                    ${!isLastRow ? 'border-b border-[#242424]' : ''}
                    bg-transparent hover:bg-white/20 hover:bg-opacity-10
                  `}
                  onClick={() => handleDayClick(dayObj)}
                >
                  <span 
                    className={`
                      text-[10px] font-normal rounded m-1
                      ${isSelected ? "bg-[#2525E6] font-semibold rounded-full px-2.5 py-0.5" : "px-1 pt-1"}
                    `}
                  >
                    {showMonthLabel ? `${nextMonthName} ${dayObj.day}` : dayObj.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;