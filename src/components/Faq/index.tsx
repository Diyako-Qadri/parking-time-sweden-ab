"use client";
import { useState } from "react";

const Faq = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <section className="w-full py-[80px] text-white flex justify-center  bg-gradient-to-b from-pt-primary via-black to-pt-primary">
        <div className="flex flex-col text-center w-4/5 bg-orange-500 py-4 px-2 h-[800px]">
            <p className="p-4">FAQ</p>
            <div className="flex flex-col text-black bg-white max-h-fit rounded-lg">
                <div className="flex h-[72px] items-center p-6  justify-between ">
                    <span>This is the title</span>
                    <span>+</span>
                </div>
            </div>
            <div 
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen 
                    ? "grid-rows{1fr} opacity-100" 
                    : "grid-rows{0fr} opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    Parking Time is a free to download app that works as a digital parking disc, you just start parking through the app and parking attendants can view how long your session has lasted.
                </div>
            </div>
        </div>
    </section>
  );
};

export default Faq;
