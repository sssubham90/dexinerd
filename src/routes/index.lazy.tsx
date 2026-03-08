import { createLazyFileRoute } from "@tanstack/react-router";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import KnowMore from "../components/KnowMore";
import MarqueeBanner from "../components/MarqueeBanner";
import Portfolio from "../components/Portfolio";
import Story from "../components/Story";
import TestimonialSlider from "../components/TestimonialSlider";
import WorkEx from "../components/WorkEx";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<Hero />
			<Story />
			<MarqueeBanner />
			<KnowMore />
			<Portfolio />
			<WorkEx />
			<TestimonialSlider />
			<FAQ />
			<ContactForm />
			<Footer />
		</>
	);
}
