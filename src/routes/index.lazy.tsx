import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Story from "../components/Story";
import MarqueeBanner from "../components/MarqueeBanner";
import Video from "../components/Video";
import WorkEx from "../components/WorkEx";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Story />
      <MarqueeBanner />
      <Video />
      <Portfolio />
      <WorkEx />
      <TestimonialSlider />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
