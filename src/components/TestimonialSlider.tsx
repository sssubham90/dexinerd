import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Ramanjeet Mohanty",
    title: "Founder & CEO, Finocontrol Consultancy Services LLP",
    image: "https://via.placeholder.com/64",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi at nisl pharetra laoreet ut a risus.",
  },
  {
    name: "Jane Doe",
    title: "CTO, SomeTech Inc.",
    image: "https://via.placeholder.com/64",
    quote:
      "Vestibulum ut purus laoreet, fermentum ante bibendum, suscipit odio. Vestibulum lacinia.",
  },
];

export default function TestimonialSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrent(s.track.details.rel),
    created: () => setLoaded(true),
  });

  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
      <div className="text-orange-400 text-lg font-medium font-fustat">
        Testimonials
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">
        Feedback that speaks to my Results
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, idx) => (
          <div className="keen-slider__slide p-4" key={idx}>
            <blockquote className="text-2xl text-black mb-6 leading-relaxed">
              “{t.quote}”
            </blockquote>
            <div className="flex items-center space-x-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loaded && (
        <div className="absolute top-0 right-4 flex space-x-2 items-center h-full">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="text-orange-500 hover:text-orange-700"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="text-orange-500 hover:text-orange-700"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
