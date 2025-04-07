import React, { useState, useRef, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import LinkedinLogo from "../assets/png/LinkedinLogo.png";
import VectorImage from "../assets/png/VectorImage.png";
import DribbbleLightPreview from "../assets/png/DribbbleLightPreview.png";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  //Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
        <button
            onClick={toggleMenu}
            className= "w-[89px] h-[45px] bg-[#DD5D18] py-2.5 px-5 text-white font-open-sans rounded-full cursor-pointer"
        >
        Menu
        </button>
        {isOpen && (
            <div className="absolute right-0 mt-10 flex flex-col z-10 gap-3">
                <div className="bg-white rounded-2xl shadow-lg z-10 w-[316px] h-[329px]">
                    <NavigationMenu.Root >
                        <NavigationMenu.List className="py-5">
                            <NavigationMenu.Item className="common-list-item">
                                <NavigationMenu.Link href="/" >
                                    Home
                                </NavigationMenu.Link>
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
                                <NavigationMenu.Link href="#faqs">
                                    FAQs
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item className="common-list-item">
                                <NavigationMenu.Link href="#getintouch">
                                    Get in touch
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                        </NavigationMenu.List>
                    </NavigationMenu.Root>
                </div>
                <div className="bg-[#FFFFFFE5] rounded-2xl shadow-lg backdrop-blur-2xl w-[316px] h-[282px] flex flex-col p-5 gap-4">
                    <p className="font-normal text-[32px] font-fustat p-5 pb-2">Stay updated with me </p>
                    <input
                            type="text"
                            placeholder="Email address"
                            className="w-[240px] border-0 border-b border-gray-400 focus:outline-none focus:border-black-500 px-5 py-1.5 placeholder-black-400"
                    />
                    <button className= "w-[100px] h-[45px] bg-[#DD5D18] py-2.5 px-5 text-white font-open-sans rounded-full cursor-pointer">
                        Submit
                    </button>
                </div> 
                <div className="bg-[#171717CC] rounded-2xl shadow-lg backdrop-blur-2xl w-[316px] h-[212px] flex flex-col px-10">
                    <p className="text-white font-normal text-[32px] font-fustat pt-8 pb-6">Connect with me </p>
                        <NavigationMenu.Root >
                            <NavigationMenu.List className="flex flex-row justify-start gap-8">
                                <NavigationMenu.Item>
                                    <NavigationMenu.Link href="" >
                                    <img
                                        src={LinkedinLogo}
                                        alt="Linkedin"
                                        className="w-[28.31px] h-[28.31px] cursor-pointer"
                                    />
                                    </NavigationMenu.Link>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item >
                                    <NavigationMenu.Link href="" >
                                    <img
                                        src={DribbbleLightPreview}
                                        alt="DribbbleLightPreview"
                                        className="w-[26px] h-[26px] cursor-pointer"
                                    />
                                    </NavigationMenu.Link>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item >
                                    <NavigationMenu.Link href="" >
                                    <img
                                        src={VectorImage}
                                        alt="VectorImage"
                                        className="w-[28.42px] h-[28.42px] cursor-pointer"
                                    />
                                    </NavigationMenu.Link>
                                </NavigationMenu.Item>
                            </NavigationMenu.List>    
                        </NavigationMenu.Root >
                </div>
            </div> 
        )}
    </div>
  );
};

export default Menu;