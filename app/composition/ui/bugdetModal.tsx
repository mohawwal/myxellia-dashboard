import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Modal from "../../composition/modal/Modal";
import MobileModal from "../../composition/modal/mobileModal";
import overlay from "../../../public/images/budgetOverlay.png";
import modalBudgetIcon from "../../../public/modalBudget.svg";

interface BudgetSummary {
  icon: StaticImageData;
  title: string;
  message: string;
}

interface BudgetModalProps {
  open: boolean;
  handleClose: () => void;
  budgetSummary: BudgetSummary[];
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const BudgetModal = ({ open, handleClose, budgetSummary }: BudgetModalProps) => {
  const isMobile = useIsMobile();

  const desktopContent = (
    <div className="bg-white w-[438px] h-[559px] rounded-[10px] relative">
      <div className="h-[213px] w-full bg-[#0C2841] rounded-t-[10px] flex items-end justify-center relative">
        <Image
          src={overlay}
          alt="Budget overlay"
          className="rounded-t-[10px]"
        />
        <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center">
          <Image
            src={modalBudgetIcon}
            alt="Budget"
            className="z-30"
            width={80}
          />
        </div>
      </div>
      <div className="h-full w-full p-[20px]">
        <div className="w-[344px] mx-auto space-y-4">
          {budgetSummary.map((summary, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-3"
            >
              <Image src={summary.icon} alt="Settings" width={22} />
              <div className="space-y-1">
                <h2 className="text-[#191919] text-[16px] leading-[100%] font-semibold">
                  {summary.title}
                </h2>
                <p className="text-[12px] text-[#606060] font-normal text-start">
                  {summary.message}
                </p>
              </div>
            </div>
          ))}
          <button className="h-[46px] w-full flex items-center justify-center rounded-full bg-[#18181B] mt-8">
            <p className="text-[16px] font-medium leading-[140%] text-white">
              Create Budget
            </p>
          </button>
        </div>
      </div>
    </div>
  );

  const mobileContent = (
    <div className="bg-[#0C2841] w-full rounded-t-[20px] relative min-h-[400px] -mt-4 pt-4">
      <div className="h-[180px] w-full rounded-t-[10px] flex items-end justify-center relative">
        <Image
          src={overlay}
          alt="Budget overlay"
          className="rounded-t-[10px] px-5 pt-5 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center">
          <Image
            src={modalBudgetIcon}
            alt="Budget"
            className="rounded-t-[10px] z-30"
            width={70}
          />
        </div>
      </div>
      <div className="w-full p-[24px] pb-[32px] bg-white">
        <div className="w-full space-y-5">
          {budgetSummary.map((summary, index) => (
            <div
              key={index}
              className="flex items-start justify-start gap-4"
            >
              <Image src={summary.icon} alt="Settings" width={24} className="mt-1" />
              <div className="space-y-2 flex-1">
                <h2 className="text-[#191919] text-[18px] leading-[120%] font-semibold">
                  {summary.title}
                </h2>
                <p className="text-[14px] text-[#606060] font-normal text-start leading-[140%]">
                  {summary.message}
                </p>
              </div>
            </div>
          ))}
          <button className="h-[52px] w-full flex items-center justify-center rounded-full bg-[#18181B] mt-8">
            <p className="text-[18px] font-medium leading-[140%] text-white">
              Create Budget
            </p>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        <MobileModal open={open} handleClose={handleClose} titleId="budget-modal-title">
          {mobileContent}
        </MobileModal>
      ) : (
        <Modal open={open} handleClose={handleClose} titleId="budget-modal-title">
          {desktopContent}
        </Modal>
      )}
    </div>
  )
}

export default BudgetModal