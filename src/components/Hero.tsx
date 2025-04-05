import OrangeArrowDown from "../assets/svg/OrangeArrowDown.svg";
import HeroImage from "../assets/png/Hero.png";

function Hero() {
  return (
    <div className="py-[100px] px-[160px] flex flex-row justify-between items-center bg-[#F5F5F5]">
      <div className="flex flex-col justify-items-start pl-10 pt-4">
        <div className="w-[104px] h-[104px] rounded-full bg-linear-to-br from-0%-100% from-[#F5F5F5] to-[#E7E7E7] p-5 mb-28">
          <img
            src={OrangeArrowDown}
            alt="See Below"
            className="w-[65px] h-[65px] cursor-pointer"
          />
        </div>
        <div className="w-[672px] pb-5.5">
          <h2 className="text-[#DD5D18] text-lg font-medium my-1">Namaste!</h2>
          <h1 className="text-[#171717] text-[52.82px] font-semibold">
            I’m Sourav Rout,
          </h1>
          <h1 className="text-[#171717] text-[52.82px] font-semibold mb-0.5">
            a U<span className="text-[#DD5D18]">X</span>/U
            <span className="text-[#DD5D18]">I</span> Designer from India.
          </h1>
          <p className="text-[#2F2F2F] text-lg font-normal leading-[191%] my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            mi at nisl pharetra laoreet ut a risus. Vestibulum ut purus laoreet,
            fermentum ante bibendum, suscipit odio. Vestibulum lacinia.
          </p>
          <button className="bg-[#DD5D18] font-open-sans text-white text-lg font-normal py-2.5 px-5 rounded-full my-2 cursor-pointer">
            Know more about me
          </button>
        </div>
      </div>
      <img
        src={HeroImage}
        alt="Hero"
        className="w-[794.38px] h-[646px] mb-10"
      />
    </div>
  );
}

export default Hero;
