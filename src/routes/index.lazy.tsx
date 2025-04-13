import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import MusicAlert from "../components/MusicAlert";
import { useState } from "react";
import Story from "../components/Story";
import MarqueeBanner from "../components/MarqueeBanner";
import Video from "../components/Video";
import WorkEx from "../components/WorkEx";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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
      <MarqueeBanner />
      <Video />
      <WorkEx />
      <TestimonialSlider />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
