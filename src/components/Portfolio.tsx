import Goto from "../assets/svg/Goto.svg?react";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="py-[180px] px-[160px] [@media(max-width:1520px)]:px-4 flex flex-row justify-between items-center bg-[#F8F8F8]"
    >
      <div className="flex-grow-[527]"></div>

      <div className="w-[1012px]">
        <h2 className="font-medium text-2xl text-[#DD5D18]">Portfolio</h2>
        <h3 className="font-medium text-2xl text-[#2F2F2F] mt-0.5">
          What does this mean to me?
        </h3>
        <div className="font-normal my-15 text-[33px] leading-[174%] text-black">
          <div className="flex flex-row justify-start items-center w-full border-b-1 border-black">
            <p className="p-2.5">UI/UX Designs</p>
            <Goto className="w-4 h-9 text-[#DD5D18] inline-block" />
          </div>
          <div className="flex flex-row justify-start items-center w-full border-b-1 border-black">
            <p className="p-2.5">Case Studies</p>
            <Goto className="w-4 h-9 text-[#DD5D18] inline-block" />
          </div>
          <div className="flex flex-row justify-start items-center w-full border-b-1 border-black">
            <p className="p-2.5">Graphics</p>
            <Goto className="w-4 h-9 text-[#DD5D18] inline-block" />
          </div>
        </div>
      </div>

      <div className="flex-grow-[328]"></div>
    </div>
  );
}

export default Portfolio;
