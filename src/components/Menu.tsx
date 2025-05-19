import React, { useState, useRef, useEffect, useCallback } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Linkedin from "../assets/svg/Linkedin.svg";
import Behance from "../assets/svg/Behance.svg";
import Dribble from "../assets/svg/Dribble.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import axios from "axios";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const input = useRef<HTMLInputElement | null>(null);

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
        className="w-[89px] h-[45px] [@media(max-width:432px)]:hidden bg-[#DD5D18] py-2.5 px-5 text-white font-normal font-open-sans rounded-4xl cursor-pointer"
      >
        Menu
      </button>
      <HamburgerMenuIcon
        onClick={toggleMenu}
        className="w-[45px] h-[45px] p-2.5 rounded-full bg-[#DD5D18] text-white cursor-pointer [@media(min-width:433px)]:hidden [@media(max-width:433px)]:w-[10vw] [@media(max-width:433px)]:h-[10vw]"
      />
      {isOpen && (
        <div className="absolute right-0 mt-12.5 flex flex-col z-10 gap-3">
          <div className="bg-white/90 backdrop-blur-lg hover:bg-white rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex flex-col gap-2">
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#" onClick={toggleMenu}>
                    Home
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#portfolio" onClick={toggleMenu}>
                    Portfolio
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#aboutme" onClick={toggleMenu}>
                    About me
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#faqs" onClick={toggleMenu}>
                    FAQs
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item className="common-list-item">
                  <NavigationMenu.Link href="#contact" onClick={toggleMenu}>
                    Get in touch
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
          <div className="bg-white/90 backdrop-blur-lg hover:bg-white rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-[32px] font-fustat mx-2.5">
                Stay updated with me
              </p>
              <input
                type="text"
                ref={input}
                placeholder="Email address"
                className="w-[240px] border-0 border-b border-black/27 focus:outline-none focus:border-black-500 mx-2.5 py-4 placeholder-black-400"
              />
              <button
                className="w-[100px] h-[45px] border-2 border-[#DD5D18] bg-[#DD5D18] hover:bg-[#8D58FF] mx-2.5 py-2 px-4.5 text-lg text-white font-open-sans rounded-4xl cursor-pointer"
                onClick={() => {
                  if (!input.current) return;
                  const formData = { email: input.current.value };
                  try {
                    axios
                      .post("https://contact.dexinerd.workers.dev", formData)
                      .then(() => {
                        alert("Form submitted successfully!");
                      })
                      .catch((error) => {
                        console.error("Error submitting form:", error);
                      });
                  } catch (error) {
                    console.error("Error submitting form:", error);
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="bg-[#171717CC] backdrop-blur-lg hover:bg-[#171717] rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <div className="flex flex-col gap-8">
              <p className="text-white font-normal text-[32px] font-fustat leading-10">
                Connect with
                <br />
                me
              </p>
              <NavigationMenu.Root>
                <NavigationMenu.List className="flex flex-row items-center justify-start gap-6">
                  <NavigationMenu.Item>
                    <NavigationMenu.Link onClick={toggleMenu}>
                      <img
                        src={Linkedin}
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/souravroutsr",
                            "_blank"
                          )
                        }
                        alt="Linkedin"
                        className="w-[28.31px] h-[28.31px] cursor-pointer"
                      />
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link onClick={toggleMenu}>
                      <img
                        src={Behance}
                        onClick={() =>
                          window.open(
                            "https://www.behance.net/souravrout",
                            "_blank"
                          )
                        }
                        alt="Behance"
                        className="w-[30.88px] h-[30.88px] cursor-pointer"
                      />
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link onClick={toggleMenu}>
                      <img
                        src={Dribble}
                        onClick={() =>
                          window.open(
                            "https://dribbble.com/souravrout",
                            "_blank"
                          )
                        }
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
