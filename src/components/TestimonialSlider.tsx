import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import Tejaswee from "../assets/webp/Tejaswee.webp";
import Raman from "../assets/webp/Raman.webp";
import Odyra from "../assets/webp/Odyra.webp";
import ArrowLeft from "../assets/svg/ArrowLeft.svg?react";
import ArrowRight from "../assets/svg/ArrowRight.svg?react";

const testimonials = [
  {
    name: "Tejaswee Tripathy",
    title: "LinkedIn Top Voice",
    image: Tejaswee,
    quote:
      "Sourav brings something rare to the table—he understands that design is not just about visuals; it's about human connection. As someone deeply invested in people, culture, and experiences, I’ve seen how his design sensibility helps brands speak more clearly, feel more approachable, and connect more meaningfully. His work goes beyond aesthetics—he designs with intent and an understanding of how people think and behave. It’s no surprise that teams trust him not just as a designer, but as a creative thinker who elevates the entire experience.",
  },
  {
    name: "Ramanjeet Mohanty",
    title: "Co-Founder & CEO, Finocontrol",
    image: Raman,
    quote:
      "Watching Sourav grow as a designer over the years has been truly inspiring. He started with raw curiosity and a keen eye, and over time, turned that into a sharp design instinct grounded in real understanding of users and business needs. I’ve seen him transform abstract ideas into visual identities and help brands find their voice through design. What sets him apart is that he doesn’t just make things look good - he makes them work beautifully. Whether it’s a website, a logo, or an entire product experience, Sourav brings clarity, consistency, and meaning to every pixel.",
  },
  {
    name: "Madhusmita Satapathy",
    title: "Co-Founder & CEO, Odyra Lifestyle",
    image: Odyra,
    quote:
      "I’ve worked with many designers, but what makes Sourav different is how deeply he listens before he even starts sketching. He doesn't rush to pretty screens - he first understands the real user need and the problem we’re solving. His wireframes tell a story, and his prototypes feel like the product is already alive.",
  },
];

export default function TestimonialSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    created: (s) =>
      setConfig({
        min: s?.track?.details?.rel == s?.track?.details?.min,
        max: s?.track?.details?.rel == s?.track?.details?.max,
      }),
    slideChanged: (s) =>
      setConfig({
        min: s?.track?.details?.rel == s?.track?.details?.min,
        max: s?.track?.details?.rel == s?.track?.details?.max,
      }),
  });

  const [config, setConfig] = useState({ min: false, max: false });

  return (
    <div className="mx-4">
      <div className="py-[140px] [@media(max-width:1520px)]:mx-4 [@media(max-width:1520px)]:py-4 flex flex-row justify-center items-center">
        <div className="flex-grow-[585]"></div>

        <div className="w-[990px] [@media(max-width:1520px)]:w-full">
          <h2 className="font-medium text-2xl text-[#DD5D18] mb-2">
            Testimonials
          </h2>
          <div className="flex flex-row justify-between items-center mb-14 [@media(max-width:550px)]:gap-4">
            <h3 className="font-medium text-2xl text-[#2F2F2F] mt-0.5">
              Feedback that speaks to my Results
            </h3>
            <div className="flex flex-row justify-center items-center gap-8 [@media(max-width:550px)]:gap-2">
              <ArrowLeft
                onClick={() => instanceRef.current?.prev()}
                aria-disabled={config.min}
                className="w-7 fill-[#DD5D18] aria-disabled:fill-[#DD5D1866] cursor-pointer"
              />
              <ArrowRight
                onClick={() => instanceRef.current?.next()}
                aria-disabled={config.max}
                className="w-7 fill-[#DD5D18] aria-disabled:fill-[#DD5D1866] cursor-pointer"
              />
            </div>
          </div>

          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((t, idx) => (
              <div className="keen-slider__slide" key={idx}>
                <blockquote className="text-[33px] leading-[174%] text-black mb-14">
                  “{t.quote}”
                </blockquote>
                <div className="flex flex-row items-center gap-4">
                  <p className="text-[33px] leading-[174%] text-[#DD5D18] mr-14 [@media(max-width:1520px)]:mr-0">
                    -
                  </p>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-[#0B0B0B] text-lg leading-[191%]">
                    <h3 className="font-semibold">{t.name}</h3>
                    <h4>{t.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-grow-[348]"></div>
      </div>
      <div className="max-w-[1520px] [@media(max-width:1520px)]:w-full h-0.5 bg-black/17 mb-23 mx-auto"></div>
    </div>
  );
}
