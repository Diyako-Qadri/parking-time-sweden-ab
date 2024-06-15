'use client'
import React, { useState } from "react";

const Accordion = ({ question, answer, accordionOpen, onToggle }) => {

  return (
    <div className="flex flex-col align-middle px-6 py-4 my-2 rounded-[25px] bg-white border-pt-lightgrayborder md:max-w-[768px]">
      <div
        onClick={onToggle}
        className="flex justify-between self-center w-full text-pt-dark-text text-start border-pt-lightgrayborder font-bold text-md cursor-pointer md:text-lg"
        >
        <span>{question}</span>
        <svg
          className="fill-pt-dark-text shrink-0 ml-8 mt-[5px]"
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