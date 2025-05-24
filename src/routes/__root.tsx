import { createRootRoute, Outlet } from "@tanstack/react-router";
import "./root.css";
import { Helmet } from "react-helmet";
import Hero from "../assets/webp/Hero.webp";
import HeadingLogo from "../assets/svg/HeadingLogo.svg";
import Music from "../assets/svg/Music.svg";
import MusicMuted from "../assets/svg/MusicMuted.svg";
import Menu from "../components/Menu";
import { useCallback, useEffect, useRef, useState } from "react";
import MusicAlert from "../components/MusicAlert";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const [showMusicAlert, setShowMusicAlert] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !isReady) return;
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
  }, [isReady, showMusicAlert]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener("canplaythrough", () => {
      setIsReady(true);
      setShowMusicAlert(true);
      audio.volume = 0.3;
    });
  }, []);

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
      <header className="flex justify-between items-center mx-[200px] my-7 [@media(max-width:1120px)]:mx-auto [@media(max-width:1120px)]:px-4">
        <img
          src={HeadingLogo}
          alt="Dexinerd"
          className="w-[246.71px] [@media(max-width:600px)]:w-[55vw]"
        />
        <div className="flex items-center gap-5 [@media(max-width:600px)]:gap-[2vw]">
          <img
            onClick={playAudio}
            src={isReady && !isMuted ? Music : MusicMuted}
            alt="Music"
            className="w-[45px] h-[45px] [@media(max-width:600px)]:w-[10vw] cursor-pointer"
          />
          <button
            className="w-[149px] h-[45px]  cursor-pointer [@media(max-width:600px)]:hidden bg-[#121212] py-2.5 px-5 text-white font-normal font-open-sans rounded-4xl"
            onClick={() => window.open("#contact", "_self")}
          >
            Let's connect
          </button>
          <Menu />
        </div>
      </header>
      <Outlet />
      {showMusicAlert && <MusicAlert setShowMusicAlert={setShowMusicAlert} />}
    </>
  );
}
