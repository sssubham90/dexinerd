import OrangeArrowDown from "../assets/svg/OrangeArrowDown.svg";
import HeroImage from "../assets/webp/Hero.webp";
import * as Tooltip from "@radix-ui/react-tooltip";

function Hero() {
  return (
    <div className="mb-2 py-[100px] mx-auto w-[83%]  [@media(max-width:1814px)]:w-full flex flex-row flex-wrap-reverse justify-between [@media(max-width:1520px)]:justify-center items-center bg-[#F8F8F8]">
      <div className="flex flex-col justify-items-start pl-10 pt-4 [@media(max-width:712px)]:w-full [@media(max-width:712px)]:px-10">
        <div className="w-[104px] h-[104px] rounded-full bg-linear-to-br from-0%-100% from-[#F8F8F8] to-[#E7E7E7] p-5 mb-28">
          <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <img
                  src={OrangeArrowDown}
                  alt="Take me to the Projects now!"
                  className="w-[65px] h-[65px] cursor-pointer"
                />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-[#DD5D18] text-white text-sm font-normal rounded-md px-2 py-1.5 shadow-lg"
                  sideOffset={5}
                >
                  Take me to the Projects now!
                  <Tooltip.Arrow className="fill-[#DD5D18]" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <div
          id="aboutme"
          className="w-[672px] [@media(max-width:712px)]:w-full pb-5.5"
        >
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
          <button className="bg-[#DD5D18] font-open-sans text-white text-lg font-normal py-2.5 px-5 rounded-full my-2 cursor-pointer">
            Discover my Design Ideas
          </button>
        </div>
      </div>
      <img
        src={HeroImage}
        alt="Hero"
        className="w-[794.38px] [@media(max-width:794px)]:w-full mb-10"
      />
    </div>
  );
}

export default Hero;
