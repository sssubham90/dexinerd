import OrangeArrowDown from "../assets/svg/OrangeArrowDown.svg?react";
import { HoverCard } from "radix-ui";
import HeroImage from "../assets/webp/Hero.webp";

function Hero() {
  return (
    <div className="pt-4 pb-2 my-[100px] mx-auto max-w-[1521px] flex flex-row flex-wrap-reverse justify-between items-center bg-[#F8F8F8] [@media(max-width:1553px)]:px-4 [@media(max-width:1120px)]:justify-center [@media(max-width:1120px)]:w-auto [@media(max-width:712px)]:mx-4 [@media(max-width:712px)]:pt-0 [@media(max-width:432px)]:my-10">
      <div className="flex flex-col justify-items-start w-[672px] [@media(max-width:1792px)]:w-[50%] [@media(max-width:1024)]:w-full [@media(min-width:432px)]:min-w-[400px] [@media(max-width:432px)]:w-full">
        <div className="w-[104px] h-[104px] rounded-full bg-linear-to-br from-0%-100% from-[#F8F8F8] to-[#E7E7E7] p-5 mb-28 [@media(max-width:432px)]:mb-4">
          <HoverCard.Root openDelay={0} closeDelay={0}>
            <HoverCard.Trigger asChild>
              <OrangeArrowDown
                className="w-[65px] h-[65px] rounded-full cursor-pointer fill-[#DD5D18] hover:fill-[#8D58FF]"
                onClick={() => window.open("#portfolio", "_self")}
              />
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                className="HoverCardContent"
                side="right"
                sideOffset={36}
              >
                <p className="font-normal text-lg">
                  Take me to the Projects now!
                </p>
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
        <div className="w-full pb-5.5">
          <h2 className="text-[#DD5D18] text-lg font-medium my-1">Namaste!</h2>
          <h1 className="text-[#171717] text-[52.82px] font-semibold">
            I’m Sourav Rout,
          </h1>
          <h1 className="text-[#171717] text-[52.82px] font-semibold mb-0.5">
            a U<span className="text-[#DD5D18]">X</span>/U
            <span className="text-[#DD5D18]">I</span> Designer from India.
          </h1>
          <p className="text-[#2F2F2F] text-lg font-normal leading-[191%] my-6">
            I see design as a bridge between ideas and emotions, connecting
            needs with aspirations. Every detail contributes to a larger story —
            one that resonates, elevates, and speaks without words.
          </p>
          <button
            className="border-2 border-[#DD5D18] bg-[#DD5D18] hover:bg-[#8D58FF] text-white text-lg font-normal py-3 px-6 rounded-full my-2 cursor-pointer"
            onClick={() =>
              window.open("https://www.instagram.com/dexinerd.life", "_blank")
            }
          >
            My Design Ideas
          </button>
        </div>
      </div>
      <img
        src={HeroImage}
        alt="Hero"
        className="w-[794px]  mb-10 [@media(max-width:1792px)]:w-[50%] [@media(max-width:1024)]:w-full [@media(min-width:432px)]:min-w-[400px] [@media(max-width:432px)]:w-full"
      />
    </div>
  );
}

export default Hero;
