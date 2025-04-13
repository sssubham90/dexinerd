import Music from "../assets/svg/Music.svg";

type MusicAlertProps = {
  setShowMusicAlert: (show: boolean) => void;
};

function MusicAlert({ setShowMusicAlert }: MusicAlertProps) {
  return (
    <div className="py-6 px-[200px] [@media(max-width:1814px)]:px-4 w-full flex flex-row justify-between items-center bg-white z-50 fixed bottom-0 animate-float-up shadow-up">
      <div className="flex flex-row justify-items-center gap-2.5">
        <img src={Music} alt="Music" className="w-[33px] h-[33px]" />
        <h1 className="text-[#171717] text-lg leading-[191%] font-normal">
          <span className="text-[#DD5D18]">Ambient Music is playing.</span>{" "}
          Click on this icon on top to mute the music.
        </h1>
      </div>
      <button
        className="bg-[#DD5D18] text-white font-open-sans text-lg font-normal py-2.5 px-5 rounded-full cursor-pointer"
        onClick={() => setShowMusicAlert(false)}
      >
        Close
      </button>
    </div>
  );
}

export default MusicAlert;
