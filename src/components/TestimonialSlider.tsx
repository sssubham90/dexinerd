import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import ArrowLeft from "../assets/svg/ArrowLeft.svg?react";
import ArrowRight from "../assets/svg/ArrowRight.svg?react";
import Girish from "../assets/webp/Girish.webp";
import Kritika from "../assets/webp/Kritika.webp";
import Odyra from "../assets/webp/Odyra.webp";
import Raman from "../assets/webp/Raman.webp";
import Tejaswee from "../assets/webp/Tejaswee.webp";
import Tushar from "../assets/webp/Tushar.webp";

const testimonials = [
	{
		name: "Tushar Verma",
		title: "Delivery Manager, Infosys UK",
		image: Tushar,
		quote:
			"Sourav's UI/UX skills stood out during our time at TCS. He pushed the boundaries of design in PowerApps using Figma and backed it with solid front-end implementation. His ability to simplify complex problems, manage clients smoothly, and deliver practical, elegant design solutions makes him a rare blend of creativity and clarity. Highly recommend him",
	},
	{
		name: "Kritika Arora",
		title: "Influencer, Communication Coach",
		image: Kritika,
		quote:
			"Sourav's design process feels less like creating screens and more like shaping experiences. What stands out is his ability to decode how people think and feel while using a product - and then design around that with purpose. It's rare to see someone blend logic and empathy this effortlessly in design.",
	},
	{
		name: "Girish Mohanty",
		title: "Ollywood Film Director, Producer, Award-winning Choreographer",
		image: Girish,
		quote:
			"As a film director, I deeply value collaborators who can translate vision into powerful visuals, and Sourav does this with remarkable finesse. His designs don't just look good; they tell a story, elevate the mood, and spark emotion. Sourav's creative instincts, attention to detail, and ability to think beyond the obvious have brought a unique edge to our projects.",
	},
	{
		name: "Tejaswee Tripathy",
		title: "LinkedIn Top Voice",
		image: Tejaswee,
		quote:
			"Sourav brings something rare to the table - he understands that design is not just about visuals; it's about human connection. As someone deeply invested in people, culture, and experiences, I've seen how his design sensibility helps brands speak more clearly, feel more approachable, and connect more meaningfully. His work goes beyond aesthetics - he designs with intent and an understanding of how people think and behave. It's no surprise that teams trust him not just as a designer, but as a creative thinker who elevates the entire experience.",
	},
	{
		name: "Ramanjeet Mohanty",
		title: "Co-Founder & CEO, Finocontrol",
		image: Raman,
		quote:
			"Watching Sourav grow as a designer over the years has been truly inspiring. He started with raw curiosity and a keen eye, and over time, turned that into a sharp design instinct grounded in real understanding of users and business needs. I've seen him transform abstract ideas into visual identities and help brands find their voice through design. What sets him apart is that he doesn't just make things look good - he makes them work beautifully. Whether it's a website, a logo, or an entire product experience, Sourav brings clarity, consistency, and meaning to every pixel.",
	},
	{
		name: "Madhusmita Satapathy",
		title: "Co-Founder & CEO, Odyra Lifestyle",
		image: Odyra,
		quote:
			"I've worked with many designers, but what makes Sourav different is how deeply he listens before he even starts sketching. He doesn't rush to pretty screens - he first understands the real user need and the problem we're solving. His wireframes tell a story, and his prototypes feel like the product is already alive.",
	},
];

export default function TestimonialSlider() {
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop: false,
		created: (s) =>
			setConfig({
				min: s?.track?.details?.rel === s?.track?.details?.min,
				max: s?.track?.details?.rel === s?.track?.details?.max,
			}),
		slideChanged: (s) =>
			setConfig({
				min: s?.track?.details?.rel === s?.track?.details?.min,
				max: s?.track?.details?.rel === s?.track?.details?.max,
			}),
	});

	const [config, setConfig] = useState({ min: false, max: false });

	return (
		<div className="my-27 mx-40 max-[1024px]:mx-4">
			<div className="flex flex-row justify-center items-center">
				<div className="grow-527"></div>

				<div className="w-253 max-[1520px]:w-full">
					<h2 className="font-medium text-2xl text-[#DD5D18] mb-2 max-[1440px]:text-[20px]">
						Testimonials
					</h2>
					<div className="flex flex-row justify-between items-center mb-14 max-[550px]:gap-4">
						<h3 className="font-medium text-2xl text-[#2F2F2F] mt-0.5 max-[1440px]:text-[20px]">
							Feedback that speaks to my Results
						</h3>
						<div className="flex flex-row justify-center items-center gap-8 max-[550px]:gap-2">
							<ArrowLeft
								onClick={() => instanceRef.current?.prev()}
								aria-disabled={config.min}
								className="w-7 fill-[#DD5D18] aria-disabled:fill-[#DD5D1866] hover:fill-[#8D58FF] cursor-pointer"
							/>
							<ArrowRight
								onClick={() => instanceRef.current?.next()}
								aria-disabled={config.max}
								className="w-7 fill-[#DD5D18] aria-disabled:fill-[#DD5D1866] hover:fill-[#8D58FF] cursor-pointer"
							/>
						</div>
					</div>

					<div ref={sliderRef} className="keen-slider">
						{testimonials.map((t, idx) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: The testimonials won't change dynamically, so using index as key is acceptable here.
							<div className="keen-slider__slide" key={idx}>
								<blockquote className="text-2xl font-bold leading-[174%] text-black mb-14 max-[1440px]:text-[16px]">
									“{t.quote}”
								</blockquote>
								<div className="flex flex-row items-center gap-4">
									<p className="text-[33px] leading-[174%] text-[#DD5D18] mr-14 max-[1520px]:mr-0">
										-
									</p>
									<img
										src={t.image}
										alt={t.name}
										className="w-16 h-16 rounded-full object-cover"
									/>
									<div className="text-[#0B0B0B] text-lg leading-[191%] max-[1440px]:text-[16px]">
										<h3 className="font-semibold">{t.name}</h3>
										<h4>{t.title}</h4>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="grow-328"></div>
			</div>
			<div className="my-27 max-w-380 max-[1520px]:w-full h-0.5 bg-black/17 mb-23 mx-auto"></div>
		</div>
	);
}
