import React, { useState, useRef, useEffect, useCallback } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Linkedin from "../assets/svg/Linkedin.svg";
import Behance from "../assets/svg/Behance.svg";
import Dribble from "../assets/svg/Dribble.svg";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  //Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="w-[89px] h-[45px] bg-[#DD5D18] py-2.5 px-5 text-white font-normal font-open-sans rounded-4xl cursor-pointer"
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-12.5 flex flex-col z-10 gap-3">
          <div className="bg-white/90 hover:bg-white rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex flex-col gap-2">
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#portfolio">
                    Portfolio
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#aboutme">
                    About me
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#faqs">FAQs</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#getintouch">
                    Get in touch
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
          <div className="bg-white/90 hover:bg-white rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-[32px] font-fustat mx-2.5">
                Stay updated with me
              </p>
              <input
                type="text"
                placeholder="Email address"
                className="w-[240px] border-0 border-b border-black/27 focus:outline-none focus:border-black-500 mx-2.5 py-4 placeholder-black-400"
              />
              <button className="w-[100px] h-[45px] bg-[#DD5D18] mx-2.5 py-2.5 px-5 text-lg text-white font-open-sans rounded-4xl cursor-pointer">
                Submit
              </button>
            </div>
          </div>
          <div className="bg-[#171717CC] hover:bg-[#171717] rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <div className="flex flex-col gap-8">
              <p className="text-white font-normal text-[32px] font-fustat leading-10">
                Connect with
                <br />
                me
              </p>
              <NavigationMenu.Root>
                <NavigationMenu.List className="flex flex-row items-center justify-start gap-6">
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="">
                      <img
                        src={Linkedin}
                        alt="Linkedin"
                        className="w-[28.31px] h-[28.31px] cursor-pointer"
                      />
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="">
                      <img
                        src={Behance}
                        alt="Behance"
                        className="w-[30.88px] h-[30.88px] cursor-pointer"
                      />
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link href="">
                      <img
                        src={Dribble}
                        alt="Dribble"
                        className="w-[28.42px] h-[28.42px] cursor-pointer"
                      />
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
