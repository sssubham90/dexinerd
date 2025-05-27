import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Helmet } from "react-helmet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./root.css";
import Hero from "../assets/webp/Hero.webp";
import HeadingLogo from "../assets/svg/HeadingLogo.svg";
import Music from "../assets/svg/Music.svg";
import MusicMuted from "../assets/svg/MusicMuted.svg";
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

  const musicIconSource = useMemo(() => {
    if (!isDownloading) return Music;
    if (!isReady) return MusicMuted;
    return isMuted ? MusicMuted : Music;
  }, [isDownloading, isReady, isMuted]);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={Hero} />
        <meta name="description" content="Sourav's Portfolio" />
      </Helmet>
      <audio
        ref={audioRef}
        src="/DexinerdAnthem.mp3"
        preload="auto"
        loop
        hidden
      />
      <div className="sticky top-0 bg-white/50 backdrop-blur-lg z-50 shadow [@media(max-width:1553px)]:px-4 py-7">
        <header className="flex justify-between items-center max-w-[1521px] mx-auto">
          <img
            src={HeadingLogo}
            alt="Dexinerd"
            className="w-[246.71px] [@media(max-width:600px)]:w-[55vw]"
          />
          <div className="flex items-center gap-5 [@media(max-width:600px)]:gap-[2vw]">
            <img
              onClick={playAudio}
              src={musicIconSource}
              alt="Music"
              className="w-[45px] h-[45px] [@media(max-width:600px)]:w-[10vw] cursor-pointer"
            />
            <button
              className="w-[149px] h-[45px]  cursor-pointer [@media(max-width:600px)]:hidden bg-[#121212] py-2.5 px-5 text-white font-normal rounded-4xl"
              onClick={() => window.open("#contact", "_self")}
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
    </>
  );
}
