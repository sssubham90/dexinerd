import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import ArrowLeft from "../assets/svg/ArrowLeft.svg?react";
import ArrowRight from "../assets/svg/ArrowRight.svg?react";

const testimonials = [
  {
    name: "Ramanjeet Mohanty",
    title: "Founder & CEO, Finocontrol Consultancy Services LLP",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQFBqHhfxhaZaQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1600965991866?e=2147483647&v=beta&t=PHJ50S-39QfOZm4brjN7RU9YFplHCzmwht3tX2CbY5A",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi at nisl pharetra laoreet ut a risus. Vestibulum ut purus laoreet, fermentum ante bibendum, suscipit odio. Vestibulum lacinia.",
  },
  {
    name: "Jane Doe",
    title: "CTO, SomeTech Inc.",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQFBqHhfxhaZaQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1600965991866?e=2147483647&v=beta&t=PHJ50S-39QfOZm4brjN7RU9YFplHCzmwht3tX2CbY5A",
    quote:
      "Vestibulum ut purus laoreet, fermentum ante bibendum, suscipit odio. Vestibulum lacinia.",
  },
];

export default function TestimonialSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slideChanged: (s) => setCurrent(s.track.details.rel),
  });

  const [current, setCurrent] = useState(0);

  console.log({
    min:
      instanceRef.current?.track?.details?.rel ==
      instanceRef.current?.track?.details?.min,
    max:
      instanceRef.current?.track?.details?.rel ==
      instanceRef.current?.track?.details?.max,
  });

  return (
    <div className="py-[140px] flex flex-row justify-between items-center">
      <div className="flex-grow-[585]"></div>

      <div className="w-[987px]">
        <h2 className="font-medium text-2xl text-[#DD5D18] mb-2">
          Testimonials
        </h2>
        <div className="flex flex-row justify-between items-center mb-14">
          <h4 className="font-medium text-2xl text-[#2F2F2F] mt-0.5">
            Feedback that speaks to my Results
          </h4>
          <div className="flex flex-row justify-center items-center gap-8">
            <ArrowLeft
              onClick={() => instanceRef.current?.prev()}
              aria-disabled={
                instanceRef.current?.track?.details?.rel ==
                instanceRef.current?.track?.details?.min
              }
              className="w-7 fill-[#DD5D18] aria-disabled:fill-[#DD5D1866]"
            />
            <ArrowRight
              onClick={() => instanceRef.current?.next()}
              aria-disabled={
                instanceRef.current?.track?.details?.rel ==
                instanceRef.current?.track?.details?.max
              }
              className="w-7 fill-[#DD5D18] aria-disabled:fill-[#DD5D1866]"
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
                <p className="text-[33px] leading-[174%] text-[#DD5D18] mr-14">
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
  );
}
