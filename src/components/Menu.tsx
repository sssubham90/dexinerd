import { useState, useRef, useEffect, useCallback } from "react";
import { Root, List, Item, Link } from "@radix-ui/react-navigation-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useAlert } from "../hooks/useAlert";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const alert = useAlert();

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
        className="text-lg bg-[#DD5D18] py-2.5 px-5 text-white font-normal rounded-4xl cursor-pointer border-2 border-[#DD5D18] hover:bg-[#8D58FF] max-[1440px]:text-[16px] max-[432px]:hidden"
      >
        Menu
      </button>
      <HamburgerMenuIcon
        onClick={toggleMenu}
        className="w-[45px] h-[45px] p-2.5 rounded-full bg-[#DD5D18] text-white cursor-pointer max-[433px]:w-[10vw] max-[433px]:h-[10vw] min-[433px]:hidden"
      />
      {isOpen && (
        <div className="absolute z-50 right-0 mt-11 flex flex-col gap-3">
          <div className="bg-white/90 backdrop-blur-lg hover:bg-white rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <Root>
              <List className="flex flex-col gap-4">
                <Item>
                  <Link
                    href="#"
                    className="px-2.5 hover:text-[#8D58FF] cursor-pointer text-3xl"
                    onClick={(e) => {
                      toggleMenu();
                      e.preventDefault();
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Home
                  </Link>
                </Item>
                <Item>
                  <Link
                    href="#aboutme"
                    className="px-2.5 hover:text-[#8D58FF] cursor-pointer text-3xl"
                    onClick={(e) => {
                      toggleMenu();
                      e.preventDefault();
                      window.scrollTo({
                        top:
                          (document.getElementById("aboutme")?.offsetTop ??
                            120) - 120,
                        behavior: "smooth",
                      });
                    }}
                  >
                    About me
                  </Link>
                </Item>
                <Item>
                  <Link
                    href="#portfolio"
                    className="px-2.5 hover:text-[#8D58FF] cursor-pointer text-3xl"
                    onClick={(e) => {
                      toggleMenu();
                      e.preventDefault();
                      window.scrollTo({
                        top:
                          (document.getElementById("portfolio")?.offsetTop ??
                            120) - 120,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Portfolio
                  </Link>
                </Item>
                <Item>
                  <Link
                    href="#faqs"
                    className="px-2.5 hover:text-[#8D58FF] cursor-pointer text-3xl"
                    onClick={(e) => {
                      toggleMenu();
                      e.preventDefault();
                      window.scrollTo({
                        top:
                          (document.getElementById("faqs")?.offsetTop ?? 120) -
                          120,
                        behavior: "smooth",
                      });
                    }}
                  >
                    FAQs
                  </Link>
                </Item>
                <Item>
                  <Link
                    href="#contact"
                    className="px-2.5 hover:text-[#8D58FF] cursor-pointer text-3xl"
                    onClick={(e) => {
                      toggleMenu();
                      e.preventDefault();
                      window.scrollTo({
                        top:
                          (document.getElementById("contact")?.offsetTop ??
                            120) - 120,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Get in touch
                  </Link>
                </Item>
              </List>
            </Root>
          </div>
          <div className="bg-[#171717CC] backdrop-blur-lg hover:bg-[#171717] rounded-2xl shadow-lg w-[316px] py-9 px-7">
            <div className="flex flex-col gap-4">
              <p className="font-normal text-white text-3xl font-fustat mx-2.5">
                Stay updated
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
                    alert("Enter a valid Email address.", "error");
                    return;
                  }
                  const formData = { email: input.current.value };
                  axios
                    .post("https://api.dexinerd.com", formData)
                    .then(() => {
                      alert(
                        "Response shared successfully. We will keep you updated.",
                        "success"
                      );
                    })
                    .catch((error) => {
                      alert("Unable to share your response.", "error");
                      console.error("Error submitting form:", error);
                    });
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
