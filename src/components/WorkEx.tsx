import Deloitte from "../assets/svg/Deloitte.svg";
import TCS from "../assets/svg/TCS.svg";
import RedBull from "../assets/svg/RedBull.svg";
import KIIT from "../assets/svg/KIIT.svg";
import MasterCard from "../assets/svg/MasterCard.svg";
import Durex from "../assets/svg/Durex.svg";
import ODGov from "../assets/svg/ODGov.svg";
import KFC from "../assets/svg/KFC.svg";
import Hult from "../assets/svg/Hult.svg";
import Highradius from "../assets/svg/Highradius.svg";
import SeventhGear from "../assets/svg/SeventhGear.svg";
import BJP from "../assets/svg/BJP.svg";

import Workex from "../assets/webp/Workex.webp";

function WorkEx() {
  return (
    <div className="p-5 max-w-[1521px] mx-auto bg-white rounded-2xl flex flex-row justify-center gap-5 items-stretch max-[1553px]:mx-4 max-[1024px]:flex-col-reverse max-[1024px]:gap-0">
      <div className="flex-1 flex flex-col justify-between items-start w-[720px] p-[39px] max-[1024px]:w-full max-[1024px]:py-4 max-[900px]:px-0">
        <div className="w-[600px] max-[1521px]:w-full">
          <h2 className="my-6.5 font-normal text-[37px] leading-[156%] text-black max-[1440px]:text-[24px]">
            Designs that you can feel,
            <br />
            that’s what <span className="font-medium text-[#DD5D18]">
              UX
            </span>{" "}
            is all about. Right?
          </h2>
          <p className="font-normal text-lg leading-[191%] text-[#2F2F2F] max-[1440px]:text-[16px]">
            Each of these brands represents a project where I crafted
            user-centered experiences, focusing on design that connects,
            engages, and enhances how users interact with the brand.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6 max-w-6xl mx-auto mt-8 px-4 items-center max-[512px]:grid-cols-4">
          <img src={Deloitte} alt="Deloitte" className="w-24 mx-auto" />
          <img src={TCS} alt="TCS" className="w-22 mx-auto" />
          <img src={RedBull} alt="RedBull" className="w-16 mx-auto" />
          <img src={KIIT} alt="KIIT" className="w-11 mx-auto" />
          <img src={MasterCard} alt="MasterCard" className="w-12 mx-auto" />
          <img src={Durex} alt="Durex" className="w-13 mx-auto" />
          <img src={Hult} alt="Hult Prize" className="w-24 mx-auto" />
          <img src={KFC} alt="KFC" className="w-14 mx-auto" />
          <img src={ODGov} alt="ODGov" className="w-10 mx-auto" />
          <img src={BJP} alt="BJP" className="w-7 mx-auto" />
          <img src={SeventhGear} alt="7thGear" className="w-22 mx-auto" />
          <img src={Highradius} alt="Highradius" className="w-31 mx-auto" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <img src={Workex} alt="Workex" className="w-full rounded-lg" />
      </div>
    </div>
  );
}

export default WorkEx;
