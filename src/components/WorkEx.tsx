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
    <div className="mb-7 p-5 max-w-[1520px] mx-auto [@media(max-width:1520px)]:mx-4 bg-white rounded-2xl flex flex-row flex-wrap-reverse justify-center items-center">
      <div className="flex flex-col justify-between items-center w-[720px] [@media(max-width:1520px)]:w-full h-[701px] [@media(max-width:1520px)]:h-auto  p-13 pt-36 pb-20  [@media(max-width:1520px)]:py-12">
        <div className="mt-1 w-[600px] [@media(max-width:1520px)]:w-full">
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
        <div className="flex flex-col justify-center items-center gap-3.5 [@media(max-width:1520px)]:my-8 [@media(max-width:1520px)]:flex-row [@media(max-width:1520px)]:flex-wrap">
          <div className="flex flex-row flex-wrap justify-between items-center h-10.5 w-[600px] [@media(max-width:1520px)]:h-auto [@media(max-width:1520px)]:w-full">
            <img
              src={Deloitte}
              alt="Deloitte"
              className="w-24 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={TCS}
              alt="TCS"
              className="w-22 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={RedBull}
              alt="RedBull"
              className="w-16 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={KIIT}
              alt="KIIT"
              className="w-11 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={MasterCard}
              alt="MasterCard"
              className="w-12 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={Durex}
              alt="Durex"
              className="w-13 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={ODGov}
              alt="ODGov"
              className="w-10 [@media(max-width:1520px)]:m-2"
            />
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center h-10.5 w-[600px] [@media(max-width:1520px)]:h-auto [@media(max-width:1520px)]:w-full">
            <img
              src={KFC}
              alt="KFC"
              className="w-14 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={Hult}
              alt="Hult Prize"
              className="w-24 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={Highradius}
              alt="Highradius"
              className="w-31 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={SeventhGear}
              alt="7thGear"
              className="w-22 [@media(max-width:1520px)]:m-2"
            />
            <img
              src={DAV}
              alt="DAV College Managing Comittee"
              className="w-12"
            />
            <img src={BJP} alt="BJP" className="w-7" />
          </div>
        </div>
      </div>
      <img
        src={Workex}
        alt="Workex"
        className="w-[760px] [@media(max-width:1520px)]:w-full rounded-lg"
      />
    </div>
  );
}

export default WorkEx;
