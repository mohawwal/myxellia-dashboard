import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface NavMobileProps {
    toggleMenu: () => void;
    menuItems: { src: StaticImageData; alt: string; text: string }[];
    onMenuItemClick: (itemSrc: StaticImageData) => void;
}

const NavMobile = ({ toggleMenu, menuItems, onMenuItemClick }: NavMobileProps) => {
  
  return (
    <div>
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="absolute top-6 right-6">
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rotate-45 transform -translate-y-1/2"></span>
                <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -rotate-45 transform -translate-y-1/2"></span>
              </div>
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {menuItems.map((item, index) => (
              <button
                className="cursor-pointer flex items-center space-x-4 p-4 rounded-lg hover:bg-white/12 hover:bg-opacity-10 transition-colors"
                key={index}
                onClick={() => onMenuItemClick(item.src)}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image src={item.src} alt={item.alt} width={24} height={24} />
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center space-x-4 py-6 px-4 border-t border-white/10 border-opacity-20">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-semibold text-xl">
              D
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-semibold ">Dylan Frank</div>
              <div className="text-sm text-gray-400">dylanfrank@example.com</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavMobile