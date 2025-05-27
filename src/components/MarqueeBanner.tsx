import Marquee from "react-fast-marquee";
import CrossOutlined from "../assets/svg/CrossOutlined.svg";
import Cross from "../assets/svg/Cross.svg";

function MarqueeBanner() {
  return (
    <Marquee className="font-normal text-[50px] text-[#171717] [@media(max-width:1440px)]:text-[47px]">
      <div className="inline-block whitespace-nowrap px-2.5 py-2.5">
        <h3>Life, by Design</h3>
      </div>
      <img src={CrossOutlined} alt="cross" className="inline-block w-8.5 h-5" />
      <div className="inline-block whitespace-nowrap px-2.5 py-2.5">
        <h3>Designs, by Sourav</h3>
      </div>
      <img src={Cross} alt="cross" className="inline-block w-8.5 h-5" />
      <div className="inline-block whitespace-nowrap px-2.5 py-2.5">
        <h3>Life, by Design</h3>
      </div>
      <img src={CrossOutlined} alt="cross" className="inline-block w-8.5 h-5" />
      <div className="inline-block whitespace-nowrap px-2.5 py-2.5">
        <h3>Designs, by Sourav</h3>
      </div>
      <img src={Cross} alt="cross" className="inline-block w-8.5 h-5" />
      <div className="inline-block whitespace-nowrap px-2.5 py-2.5">
        <h3>Life, by Design</h3>
      </div>
      <img src={CrossOutlined} alt="cross" className="inline-block w-8.5 h-5" />
      <div className="inline-block whitespace-nowrap px-2.5 py-2.5">
        <h3>Designs, by Sourav</h3>
      </div>
      <img src={Cross} alt="cross" className="inline-block w-8.5 h-5" />
    </Marquee>
  );
}
export default MarqueeBanner;
