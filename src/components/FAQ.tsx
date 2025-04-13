import { Accordion } from "radix-ui";
import Up from "../assets/svg/Up.svg?react";
import Down from "../assets/svg/Down.svg?react";
import { useState } from "react";

const FAQs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi at nisl pharetra laoreet ut a risus. Vestibulum ut purus laoreet, fermentum ante bibendum, suscipit odio. Vestibulum lacinia.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi at nisl pharetra laoreet ut a risus. Vestibulum ut purus laoreet, fermentum ante bibendum, suscipit odio. Vestibulum lacinia.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi at nisl pharetra laoreet ut a risus. Vestibulum ut purus laoreet, fermentum ante bibendum, suscipit odio. Vestibulum lacinia.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae mi at nisl pharetra laoreet ut a risus. Vestibulum ut purus laoreet, fermentum ante bibendum, suscipit odio. Vestibulum lacinia.",
  },
];

function FAQ() {
  const [openItem, setOpenItem] = useState("item-1");
  return (
    <div className="py-20 [@media(max-width:1520px)]:px-4 flex flex-row justify-between items-center bg-[#F8F8F8]">
      <div className="flex-grow-[584]"></div>

      <div className="w-[990px] [@media(max-width:1520px)]:w-full">
        <h2 className="font-medium text-2xl text-[#DD5D18] tracking-[-4%]">
          FAQs
        </h2>
        <h3 className="font-medium text-2xl text-[#2F2F2F] tracking-[-4%] mb-14">
          Answers to all your questions
        </h3>
        <Accordion.Root
          id="faqs"
          className="AccordionRoot"
          type="single"
          defaultValue={openItem}
          onValueChange={setOpenItem}
          collapsible
        >
          {FAQs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index + 1}`}>
              <Accordion.Trigger className="py-2.5 border-b-1 data-[state=open]:border-[#DD5D18] data-[state=close]:border-[#666666] w-full flex justify-between items-center cursor-pointer">
                <p className="leading-[174%] text-[33px] data-[state=open]:text-[#DD5D18] data-[state=close]:text-[#666666]">
                  {faq.question}
                </p>
                {openItem === `item-${index + 1}` ? (
                  <Up className="w-8 text-[#DD5D18]" />
                ) : (
                  <Down className="w-8 text-[#666666]" />
                )}
              </Accordion.Trigger>
              <Accordion.Content className="py-8 overflow-hidden transition-all transform data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="leading-[174%] text-[33px] text-[#2F2F2F]">
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
