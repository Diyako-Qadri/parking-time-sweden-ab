'use client'
import React, { useState } from "react";

//import Roboto and Lato bold

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="flex flex-col align-middle px-6 py-4 bg-white my-2 rounded-[25px] border-pt-lightgrayborder md:max-w-[768px]">
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between self-center w-full text-black text-start font-bold text-md md:text-lg"
        >
        <span>{title}</span>
        <svg
          className="fill-black shrink-0 ml-8 mt-[5px]"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-pt-darkblue2 text-md md:text-lg ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-3">{answer}</div>
          </div>
      </div>
    </div>
  );
};

export default Accordion;