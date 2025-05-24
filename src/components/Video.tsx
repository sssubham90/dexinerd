import { useState } from "react";
import VideoThumbnail from "../assets/webp/VideoThumbnail.webp";

function EnclosedVideo({
  setExpanded,
}: {
  setExpanded: (value: boolean) => void;
}) {
  return (
    <div className="mt-5 mb-32 [@media(max-width:1520px)]:mb-4 mx-[200px] [@media(max-width:1520px)]:mx-4 relative">
      <button
        className="bg-white/[13%] text-white font-medium tracking-[-4%] text-lg px-5 py-2.5 w-44 rounded-[58px] absolute right-17 [top:calc(48px+3.5vw)] cursor-pointer"
        onClick={() => setExpanded(true)}
      >
        Know about me
      </button>
      <img
        src={VideoThumbnail}
        alt="Video Thumbnail"
        className="w-full h-auto rounded-2xl block"
      />
    </div>
  );
}

function ExpandedVideo({
  setExpanded,
}: {
  setExpanded: (value: boolean) => void;
}) {
  return (
    <div className="mt-5 mb-32 [@media(max-width:1520px)]:mb-4 mx-[200px] [@media(max-width:1520px)]:mx-4 relative">
      <div className="bg-white p-2.5 border-1 border-white rounded-2xl [@media(max-width:1814px)]:w-full flex flex-row flex-wrap-reverse justify-between items-stretch width-full">
        <div className="flex flex-col flex-1/2 shrink-0 p-16 ">
          <h3 className="font-normal text-lg leading-[135%]">Hey again,</h3>
          <h2 className="font-normal text-[37px] leading-[135%]">
            I am <span className="text-[#DD5D18]">Sourav Rout</span>.
          </h2>
          <p className="font-normal text-lg leading-[191%] text-[#2F2F2F] mt-6.5 mb-2">
            I am a self-taught UX/UI designer from India with over 3 years of
            experience. My journey into design began during my time as a
            co-founder of ReadyGo Cabs, where I took charge of the company’s
            design work. This hands-on experience sparked my passion for design,
            leading me to teach myself the skills needed to create user-centered
            digital experiences.
          </p>
          <p className="font-normal text-lg leading-[191%] text-[#2F2F2F] mt-2 mb-6.5">
            Over the years, I’ve refined my craft through roles at TCS and
            Deloitte, and by collaborating with multiple brands on various
            initiatives. My focus is always on blending creativity,
            functionality, and user needs to deliver impactful designs.
            Recently, I’ve also ventured into content creation under my brand
            "Dexinerd", where I share my design journey, insights, and
            inspiration with a wider audience.
          </p>
          <button
            className="w-[202px] border-2 border-[#DD5D18] bg-[#DD5D18] hover:bg-[#8D58FF] font-open-sans text-white text-lg font-normal py-2.5 px-5 rounded-full my-2 cursor-pointer"
            onClick={() => setExpanded(false)}
          >
            Download Resume
          </button>
        </div>
        <div className="flex flex-col flex-1/2 shrink-0 relative">
          <button
            className="bg-white/[13%] text-white font-medium tracking-[-4%] text-lg px-5 py-2.5 w-44 rounded-[58px] absolute right-17 [top:calc(48px+2.6vw)] cursor-pointer"
            onClick={() => setExpanded(false)}
          >
            Exit this view
          </button>
          <img
            src={VideoThumbnail}
            alt="Video Thumbnail"
            className="w-full h-full [@media(min-width:650px)]:min-w-[650px] object-cover rounded-2xl block"
          />
        </div>
      </div>
    </div>
  );
}

function Video() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded ? (
        <ExpandedVideo setExpanded={setExpanded} />
      ) : (
        <EnclosedVideo setExpanded={setExpanded} />
      )}
      <div className="py-1.5 [@media(max-width:1520px)]:mx-4 flex flex-row justify-between items-center">
        <div className="flex-grow-[527]"></div>
        <div className="max-w-[894px] [@media(min-width:840px)]:mb-8 ">
          <h2 className="font-normal text-[33px] leading-[174%] text-black">
            Life, by Design.
          </h2>
          <p className="font-normal text-lg leading-[191%] text-[#2F2F2F] my-6.5">
            This is a philosophy that guides everything I do. It’s about
            recognizing that everything around us is a form of design, and we
            can draw inspiration from it. Every choice, every moment, is shaped
            with intention - a balance of creativity, strategy, and impact to
            elevate the everyday.
          </p>
        </div>
        <div className="flex-grow-[328]"></div>
      </div>
      <div className="max-w-[1520px] [@media(max-width:1520px)]:w-full h-0.5 bg-black/17 my-7 mx-auto"></div>
    </>
  );
}

export default Video;
