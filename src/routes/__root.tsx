import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import "./root.css";
import HeadingLogo from "../assets/svg/HeadingLogo.svg";
import Music from "../assets/svg/Music.svg?react";
import MusicMuted from "../assets/svg/MusicMuted.svg?react";
import Hero from "../assets/webp/Hero.webp";
import Alert from "../components/Alert";
import Menu from "../components/Menu";
import MusicAlert from "../components/MusicAlert";

export const Route = createRootRoute({
	component: Root,
});

function Root() {
	const [showMusicAlert, setShowMusicAlert] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isDownloading, setIsDownloading] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const [isMuted, setIsMuted] = useState(false);

	const playAudio = useCallback(() => {
		const audio = audioRef.current;
		if (!audio) return;
		if (!isDownloading) {
			console.log("Loading audio...");
			audio.load();
			audio
				.play()
				.then(() => {
					setIsMuted(false);
					setShowMusicAlert(false);
				})
				.catch((err) => {
					console.warn("Play failed:", err);
				});
			return;
		}
		if (!isReady) return;
		if (showMusicAlert) setShowMusicAlert(false);
		const isPlaying = !audio.paused && audio.currentTime > 0;
		if (isPlaying) {
			audio.pause();
			setIsMuted(true);
		} else {
			audio
				.play()
				.then(() => setIsMuted(false))
				.catch((err) => {
					console.warn("Play failed:", err);
				});
		}
	}, [isDownloading, isReady, showMusicAlert]);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;
		setShowMusicAlert(true);
		audio.addEventListener("loadeddata", () => setIsDownloading(true));
		audio.addEventListener("canplaythrough", () => {
			setIsReady(true);
			audio.volume = 0.3;
		});
	}, []);

	const getMusicIcon = () => {
		if (!isDownloading)
			return (
				<Music
					style={{ backgroundColor: "#DD5D18" }}
					onClick={playAudio}
					className="w-11.25 h-auto fill-[#DD5D18] border-2 border-[#DD5D18] rounded-full hover:fill-[#8D58FF] cursor-pointer max-[600px]:w-[10vw]"
				/>
			);
		if (!isReady)
			return (
				<MusicMuted
					style={{ backgroundColor: "#DD5D18" }}
					onClick={playAudio}
					className="w-11.25 h-auto fill-[#DD5D18] border-2 border-[#DD5D18] rounded-full hover:fill-[#8D58FF] cursor-pointer max-[600px]:w-[10vw]"
				/>
			);
		return isMuted ? (
			<MusicMuted
				style={{ backgroundColor: "#DD5D18" }}
				onClick={playAudio}
				className="w-11.25 h-auto fill-[#DD5D18] border-2 border-[#DD5D18] rounded-full hover:fill-[#8D58FF] cursor-pointer max-[600px]:w-[10vw]"
			/>
		) : (
			<Music
				onClick={playAudio}
				style={{ backgroundColor: "#DD5D18" }}
				className="w-11.25 h-auto fill-[#DD5D18] border-2 border-[#DD5D18] rounded-full hover:fill-[#8D58FF] cursor-pointer max-[600px]:w-[10vw]"
			/>
		);
	};

	return (
		<>
			<Helmet>
				<link rel="preload" as="image" href={Hero} />
			</Helmet>
			{/** biome-ignore lint/a11y/useMediaCaption: The music is for decorative purposes only */}
			<audio
				ref={audioRef}
				src="/DexinerdAnthem.mp3"
				preload="auto"
				loop
				hidden
			/>
			<div className="sticky top-0 bg-white/50 backdrop-blur-lg z-50 shadow py-7">
				<header className="flex justify-between items-center mx-auto max-w-380.25 max-[1553px]:mx-4">
					<div className="flex items-center justify-center">
						<button
							onClick={() =>
								window.scrollTo({
									top: 0,
									behavior: "smooth",
								})
							}
							className="max-w-[246.71px] max-[600px]:max-w-[55vw] cursor-pointer bg-none border-none p-0"
							type="button"
						>
							<img src={HeadingLogo} alt="Dexinerd" className="w-full" />
						</button>
					</div>
					<div className="flex items-center gap-5 max-[600px]:gap-[2vw]">
						<div className="inline-block">{getMusicIcon()}</div>
						<button
							type="button"
							className="cursor-pointer text-lg border-2 border-black hover:border-[#DD5D18] hover:bg-[#8D58FF] bg-[#121212] py-2.5 px-5 text-white font-normal rounded-4xl max-[600px]:hidden max-[1232px]:text-[16px]"
							onClick={() =>
								window.scrollTo({
									top:
										(document.getElementById("contact")?.offsetTop ?? 120) -
										120,
									behavior: "smooth",
								})
							}
						>
							Let's connect
						</button>
						<Menu />
					</div>
				</header>
			</div>
			<Outlet />
			{showMusicAlert && (
				<MusicAlert
					playAudio={playAudio}
					setShowMusicAlert={setShowMusicAlert}
				/>
			)}
			<Alert />
		</>
	);
}
