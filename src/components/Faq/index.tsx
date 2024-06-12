import React from "react";
import Accordion from '../Accordion'
import { Roboto } from "next/font/google";

//create roboto font for faq and subline headline

const Faq = () => {

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="p-4">
      <p className=" p-3 text-lg text-center">FAQ</p>
      <p className="text-center text-4xl py-5 md:text-5xl">Do you have a question?</p>
      <p className="text-center text-lg py-5 md:text-5xl">Here are some common questions answered</p>

        {/* FAQ COMPONENT HERE*/}

            <div className="p-4 bg-gray-200 rounded-lg">
                <Accordion
                    title="Do you prefer Android or iOS"
                    answer="I like to use iOS products"
                />
                <Accordion
                    title="Do you prefer writing CSS or Tailwind?"
                    answer="I like to use Tailwind"
                />
                <Accordion title="Firebase or Supabase?" answer="I am using Supabase!" />
            </div>
        {/* FAQ */}
        <p>I am below the accordion menu!</p>
      </div>
    </div>
  );

}

export default Faq;