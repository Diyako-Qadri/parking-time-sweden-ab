import React from "react";
import Accordion from '../Accordion'
import { Roboto } from "next/font/google";

//create roboto font for faq and subline headline

const Faq = () => {

  return (
    <div className="flex justify-center w-full h-screen bg-gradient-to-b from-pt-primary via-black to-pt-primary text-white ">
      <div className="p-6">
      <p className=" p-3 text-lg text-center">FAQ</p>
      <p className="text-center text-4xl px-8 py-5 md:text-5xl">Do you have a question?</p>
      <p className="text-center text-lg py-5">Here are some common questions answered</p>

        {/* FAQ COMPONENT HERE*/}

            <div className="py-4">
                <Accordion
                    title="What is Parking Time"
                    answer="Parking Time is a free to download app that works as a digital parking disc, you just start parking through the app and parking attendants can view how long your session has lasted."
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
            </div>
        {/* FAQ */}
        <p className="text-center text-4xl px-8 py-5 md:text-5xl">Still have a question?</p>
        <p className="text-center text-lg py-2 px-20 ">Please feel free to contact us if you have any questions.</p>
      </div>
    </div>
  );

}

export default Faq;