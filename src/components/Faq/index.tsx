"use client";
import { useState } from "react";

const Faq = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    // APP:
    <section className="w-full py-[80px] flex justify-center  bg-gradient-to-b from-pt-primary via-black to-pt-primary">
        
    {/* FAQ */}
        <div className="w-4/5 rounded-lg bg-white py-4 p-4 ">
    
    {/* ACCORDION */}

        <div className="py-2">

    {/* button: */}
            <div 
                onClick={() => setAccordionOpen(!accordionOpen)} 
                className="flex text-black justify-between p-4">
                    <span>This is the title</span>
                    {accordionOpen ? <span>-</span> : <span>+</span>}
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
        </div>



    </section>
  );

}

export default Faq;