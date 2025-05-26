import { useState, useRef, useEffect, useCallback } from "react";
import { Root, List, Item, Link } from "@radix-ui/react-navigation-menu";
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

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="w-[89px] h-[45px] [@media(max-width:432px)]:hidden bg-[#DD5D18] py-2.5 px-5 text-white font-normal rounded-4xl cursor-pointer"
      >
        Menu
      </button>
      <HamburgerMenuIcon
        onClick={toggleMenu}
        className="w-[45px] h-[45px] p-2.5 rounded-full bg-[#DD5D18] text-white cursor-pointer [@media(min-width:433px)]:hidden [@media(max-width:433px)]:w-[10vw] [@media(max-width:433px)]:h-[10vw]"
      />
      {isOpen && (
        <div className="absolute z-50 right-0 mt-12.5 flex flex-col gap-3">
          <div className="bg-white/90 backdrop-blur-lg hover:bg-white rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <Root>
              <List className="flex flex-col gap-2">
                <Item className="common-list-item">
                  <Link href="#" onClick={toggleMenu}>
                    Home
                  </Link>
                </Item>
                <Item className="common-list-item">
                  <Link href="#portfolio" onClick={toggleMenu}>
                    Portfolio
                  </Link>
                </Item>
                <Item className="common-list-item">
                  <Link href="#aboutme" onClick={toggleMenu}>
                    About me
                  </Link>
                </Item>
                <Item className="common-list-item">
                  <Link href="#faqs" onClick={toggleMenu}>
                    FAQs
                  </Link>
                </Item>
                <Item className="common-list-item">
                  <Link href="#contact" onClick={toggleMenu}>
                    Get in touch
                  </Link>
                </Item>
              </List>
            </Root>
          </div>
          <div className="bg-[#171717CC] backdrop-blur-lg hover:bg-[#171717] rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-white text-[32px] font-fustat mx-2.5">
                Stay updated with me
              </p>
              <input
                type="email"
                required
                ref={input}
                placeholder="Email address"
                className="w-[240px] text-white border-0 border-b border-white/27 focus:outline-none focus:border-white mx-2.5 py-4 placeholder-white-400"
              />
              <button
                className="w-[100px] h-[45px] border-2 border-[#DD5D18] bg-[#DD5D18] hover:bg-[#8D58FF] mx-2.5 py-2 px-4.5 text-lg text-white rounded-4xl cursor-pointer"
                onClick={() => {
                  if (!input.current) return;
                  if (validateEmail(input.current.value) === false) {
                    alert("Please enter a valid email address.");
                    return;
                  }
                  const formData = { email: input.current.value };
                  try {
                    axios
                      .post("https://api.dexinerd.com", formData)
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
        </div>
      )}
    </div>
  );
};

export default Menu;
