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
import DAV from "../assets/svg/DAV.svg";
import BJP from "../assets/svg/BJP.svg";

import Workex from "../assets/png/Workex.png";

function WorkEx() {
  return (
    <div className="mb-7 p-5 mx-[200px] bg-white rounded-2xl flex flex-row justify-center items-center">
      <div className="flex flex-col justify-between items-center h-[701px] p-13 pt-36 pb-20">
        <div className="mt-1 w-[600px]">
          <h2 className="font-normal text-[37px] leading-[156%] text-black">
            Designs that you can feel,
            <br />
            that’s what <span className="font-medium text-[#DD5D18]">
              UX
            </span>{" "}
            is all about. Right?
          </h2>
          <p className="font-normal text-lg leading-[191%] text-[#2F2F2F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            mi at nisl pharetra laoreet ut a risus.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3.5">
          <div className="flex flex-row justify-between items-center h-10.5 w-[600px]">
            <img src={Deloitte} alt="Deloitte" className="w-24" />
            <img src={TCS} alt="TCS" className="w-22" />
            <img src={RedBull} alt="RedBull" className="w-16" />
            <img src={KIIT} alt="KIIT" className="w-11" />
            <img src={MasterCard} alt="MasterCard" className="w-12" />
            <img src={Durex} alt="Durex" className="w-13" />
            <img src={ODGov} alt="ODGov" className="w-10" />
          </div>
          <div className="flex flex-row justify-between items-center h-10.5 w-[600px]">
            <img src={KFC} alt="KFC" className="w-14" />
            <img src={Hult} alt="Hult Prize" className="w-24" />
            <img src={Highradius} alt="Highradius" className="w-31" />
            <img src={SeventhGear} alt="7thGear" className="w-22" />
            <img
              src={DAV}
              alt="DAV College Managing Comittee"
              className="w-12"
            />
            <img src={BJP} alt="BJP" className="w-7" />
          </div>
        </div>
      </div>
      <img src={Workex} alt="Workex" className="w-[760px] rounded-lg" />
    </div>
  );
}

export default WorkEx;
