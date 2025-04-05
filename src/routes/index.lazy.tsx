import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import MusicAlert from "../components/MusicAlert";
import { useState } from "react";
import Story from "../components/Story";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [showMusicAlert, setShowMusicAlert] = useState(true);
  return (
    <>
      <Hero />
      {showMusicAlert && <MusicAlert setShowMusicAlert={setShowMusicAlert} />}
      <Story />
    </>
  );
}
