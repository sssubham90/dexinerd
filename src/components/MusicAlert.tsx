import Music from "../assets/svg/Music.svg";

type MusicAlertProps = {
  setShowMusicAlert: (show: boolean) => void;
  playAudio: () => void;
};

function MusicAlert({ playAudio, setShowMusicAlert }: MusicAlertProps) {
  return (
    <div className="bg-white z-50 sticky bottom-0 animate-float-up shadow-up pb-[env(safe-area-inset-bottom)]">
      <div className="py-6 mx-auto max-w-[1521px] flex flex-row justify-between items-center [@media(max-width:1553px)]:mx-4">
        <div className="flex flex-row justify-items-center gap-2.5">
          <img
            src={Music}
            alt="Music"
            className="w-[33px] h-[33px]  cursor-pointer"
            onClick={playAudio}
          />
          <h1 className="text-[#171717] text-lg leading-[191%] font-normal">
            <span className="text-[#DD5D18]">Ambient Music is available.</span>{" "}
            Click on this icon on top to play the Dexinerd Anthem.
          </h1>
        </div>
        <button
          className="bg-[#DD5D18] text-white text-lg font-normal py-2.5 px-5 rounded-full cursor-pointer"
          onClick={() => setShowMusicAlert(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MusicAlert;
