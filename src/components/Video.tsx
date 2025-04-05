import VideoThumbnail from "../assets/png/VideoThumbnail.png";

function Video() {
  return (
    <>
      <div className="py-5 mb-32 px-[200px] flex flex-col justify-center">
        <button className="bg-white/[13%] text-white font-medium tracking-[-4%] text-lg px-5 py-2.5 w-44 rounded-[58px] ml-auto mr-17 relative top-29">
          Know about me
        </button>
        <img
          src={VideoThumbnail}
          alt="Video Thumbnail"
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <div className="py-1.5 flex flex-row justify-between items-center">
        <div className="flex-grow-[527]"></div>
        <div className="w-[894px] mb-8">
          <h2 className="font-normal text-[33px] leading-[174%] text-black">
            Life, by Design.
          </h2>
          <p className="font-normal text-lg leading-[191%] text-[#2F2F2F] my-6.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            mi at nisl pharetra laoreet ut a risus. Vestibulum ut purus laoreet,
            fermentum ante bibendum, suscipit odio. Vestibulum lacinia.
          </p>
        </div>
        <div className="flex-grow-[328]"></div>
      </div>
      <div className="w-[1520px] h-0.5 bg-black/17 my-7 mx-auto"></div>
    </>
  );
}

export default Video;
