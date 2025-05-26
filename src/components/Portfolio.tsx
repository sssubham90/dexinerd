import Goto from "../assets/svg/Goto.svg?react";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="scroll-mt-30 my-[180px] mx-[160px] flex flex-row justify-between items-center bg-[#F8F8F8] [@media(max-width:1120px)]:mx-4 [@media(max-width:1120px)]:my-25 [@media(max-width:840px)]:my-10"
    >
      <div className="flex-grow-[527]"></div>

      <div className="w-[1012px]">
        <h2 className="font-medium text-2xl text-[#DD5D18]">Portfolio</h2>
        <h3 className="font-medium text-2xl text-[#2F2F2F] mt-0.5">
          What does this mean to me?
        </h3>
        <div className="font-normal my-15 text-[33px] leading-[174%]">
          <div
            className="flex flex-row justify-start items-center w-full border-b-1 border-black/20 cursor-pointer fill-[#DD5D18] hover:text-[#8D58FF] hover:fill-[#8D58FF]"
            onClick={() =>
              window.open("https://souravrout.myportfolio.com/uiux", "_blank")
            }
          >
            <p className="p-2.5">UI/UX Designs</p>
            <Goto className="w-4 h-9 inline-block" />
          </div>
          <div
            className="flex flex-row justify-start items-center w-full border-b-1 border-black/20 cursor-pointer fill-[#DD5D18] hover:text-[#8D58FF] hover:fill-[#8D58FF]"
            onClick={() =>
              window.open(
                "https://souravrout.myportfolio.com/casestudy",
                "_blank"
              )
            }
          >
            <p className="p-2.5">Case Studies</p>
            <Goto className="w-4 h-9 inline-block" />
          </div>
          <div
            className="flex flex-row justify-start items-center w-full border-b-1 border-black/20 cursor-pointer fill-[#DD5D18] hover:text-[#8D58FF] hover:fill-[#8D58FF]"
            onClick={() =>
              window.open(
                "https://souravrout.myportfolio.com/graphic",
                "_blank"
              )
            }
          >
            <p className="p-2.5">Graphic Designs</p>
            <Goto className="w-4 h-9 inline-block" />
          </div>
        </div>
      </div>

      <div className="flex-grow-[328]"></div>
    </div>
  );
}

export default Portfolio;
