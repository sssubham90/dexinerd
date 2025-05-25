import { Accordion } from "radix-ui";
import Up from "../assets/svg/Up.svg?react";
import Down from "../assets/svg/Down.svg?react";
import { useState } from "react";

const FAQs = [
  {
    question: "What kind of design work do you focus on?",
    answer:
      "I create human-centered UI/UX designs for digital products, along with branding collaterals like logos, posters, marketing banners, campaign creatives, videos, brochures, and more — blending strategy with creativity across every format.",
  },
  {
    question: "How would you describe your design style and approach?",
    answer:
      "Minimal, thoughtful, and purposeful — I believe every design should tell a story, connect emotionally, and make the experience seamless for users.",
  },
  {
    question: "What tools do you use for your designs?",
    answer:
      "I work with Figma, FigJam, Figma Slides, Adobe XD, Photoshop, Illustrator, Premiere Pro, After Effects, Adobe Audition, InDesign, and Canva — covering everything from UI/UX, branding, motion graphics, to creative content.",
  },
  {
    question: "Do you use any AI tools in your design workflow?",
    answer:
      "Yes, I integrate AI tools like ChatGPT for ideation, Midjourney and DALL·E for creative exploration, and other AI-based research tools to accelerate discovery and brainstorming phases.",
  },
  {
    question: "Is there anything else you do apart from designing?",
    answer:
      'Beyond design, I create content under my brand "Dexinerd", where I share design philosophies, life inspirations, and creative thoughts to connect and grow within the creative community.',
  },
  {
    question: "I would need some design help from you. How can I connect?",
    answer:
      "Use the Get in Touch section to share your details and mention the help you would need. You can expect me to connect back with you within 48 hours.",
  },
];

function FAQ() {
  const [openItem, setOpenItem] = useState("item-1");
  return (
    <div
      id="faqs"
      className="my-20 mx-[160px] flex flex-row justify-between items-center bg-[#F8F8F8] [@media(max-width:1024px)]:mx-4"
    >
      <div className="flex-grow-[584]"></div>

      <div className="w-[990px] [@media(max-width:1520px)]:w-full">
        <h2 className="font-medium text-2xl text-[#DD5D18] tracking-[-4%]">
          FAQs
        </h2>
        <h3 className="font-medium text-2xl text-[#2F2F2F] tracking-[-4%] mb-14">
          Answers to all your questions
        </h3>
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          defaultValue={openItem}
          onValueChange={setOpenItem}
          collapsible
        >
          {FAQs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index + 1}`}>
              <Accordion.Trigger className="py-2.5 border-b-1 data-[state=open]:border-[#DD5D18] data-[state=open]:text-[#DD5D18] data-[state=closed]:border-[#66666633] data-[state=close]:text-[#666666] w-full flex justify-between items-center cursor-pointer">
                <p className="leading-[174%] text-2xl">{faq.question}</p>
                {openItem === `item-${index + 1}` ? (
                  <Up className="w-8 text-[#DD5D18]" />
                ) : (
                  <Down className="w-8 text-[#666666]" />
                )}
              </Accordion.Trigger>
              <Accordion.Content className="py-8 overflow-hidden transition-all transform data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="leading-[174%] text-2xl text-[#2F2F2F]">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <div className="flex-grow-[350]"></div>
    </div>
  );
}

export default FAQ;
