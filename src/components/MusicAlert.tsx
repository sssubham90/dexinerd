import Music from "../assets/svg/Music.svg?react";

type MusicAlertProps = {
	setShowMusicAlert: (show: boolean) => void;
	playAudio: () => void;
};

function MusicAlert({ playAudio, setShowMusicAlert }: MusicAlertProps) {
	return (
		<div className="bg-white z-50 sticky bottom-0 animate-float-up shadow-up pb-[env(safe-area-inset-bottom)]">
			<div className="py-6 mx-auto max-w-380.25 flex flex-row justify-between items-center max-[1553px]:mx-4">
				<div className="flex flex-row items-center justify-center gap-2.5">
					<div className="flex items-center justify-center">
						<Music
							style={{ backgroundColor: "#DD5D18" }}
							onClick={playAudio}
							className="w-8.25 h-auto cursor-pointer border-2 border-[#DD5D18] rounded-full fill-[#DD5D18] hover:fill-[#8D58FF]"
						/>
					</div>
					<h1 className="text-[#171717] text-lg font-normal max-[1440px]:text-[16px]">
						Click to play the{" "}
						<span className="text-[#DD5D18]">Dexinerd Anthem</span>
					</h1>
				</div>
				<button
					type="button"
					className="bg-[#DD5D18] text-white text-lg font-normal py-1 px-3 rounded-full cursor-pointer border-2 border-[#DD5D18] hover:bg-[#8D58FF] max-[1440px]:text-[16px]"
					onClick={() => setShowMusicAlert(false)}
				>
					Close
				</button>
			</div>
		</div>
	);
}

export default MusicAlert;
