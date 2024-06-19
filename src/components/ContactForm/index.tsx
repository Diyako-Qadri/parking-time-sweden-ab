'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const t = useTranslations('button');
  const b = useTranslations("contact_us")
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Please confirm terms & conditions to proceed");
      return;
    }

    if (form.current?.value) { 
      emailjs
        .sendForm('service_epr51x4', 'template_ltnn4l5', form.current, 'Csuym5gx5aHov0nLK')
        .then(
          () => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000);
            form.current?.reset();
            setIsChecked(false);
            setSelectedOption('');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    } else {
      console.error('Form reference is null');
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className='flex grow md:pt-3 justify-center h-full flex-col w-full md:flex-row'>
      <div className='relative w-full p-10 md:w-1/2'>
        <h3 className="text-5xl pb-5 font-bold text-black">{b("page-title")}</h3>
        <p className='w-3/4 font-medium text-base mt-5'>
        {b("page-message")}
        </p>
        <div className='mt-10 h-28 flex flex-col justify-between'>
          <div className='flex flex-row text-lg items-center'>
            <MdEmail />
            <p className='ml-3'>info@parkingtime.se</p>
          </div>
          <div className='flex flex-row text-lg items-center'>
            <FaPhoneAlt />
            <p className='ml-3 underline'>+46 72 399 15 15 </p>
          </div>
          <div className='flex flex-row text-lg items-center'>
            <IoLocation />
            <p className='ml-3'>Nyköpingsvägen 52 | 611 50 NYKÖPING</p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full md:w-1/2 p-5">
        <form className="flex flex-col self-center p w-full" ref={form} onSubmit={sendEmail}>
          <label className="m-1 text-base">{b("first&lastName")}</label>
          <input
            type="text"
            name="user_name&lastname"
            placeholder="First and last name"
            className="w-full h-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
            required
          />
          <label className="m-1 text-base">{b("Job")}</label>
          <input
            type="text"
            name="user_job_title"
            placeholder="Job title"
            className="w-full h-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
          />
          <div className="flex flex-row gap-2 w-full">
            <div className="flex flex-col w-3/5">
              <label className="m-1">{b("Email")}</label>
              <input
                type="email"
                name="user_email"
                placeholder="ex. name@gmail.com"
                className="h-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label className="m-1">{b("Phone")}</label>
              <input
                type="phone"
                name="user_phone"
                placeholder="+46708123456"
                className="h-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
              />
            </div>
          </div>
          <label className="m-1">{b("Reason")}</label>
          <div className="relative">
            <div
              className="flex items-center justify-between px-2 w-full h-10 p-2 mt-1 mb-2 text-black bg-pt-background rounded-xl cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <p>{selectedOption ? selectedOption : b("form")}</p>
              <IoIosArrowDown />
            </div>
            {dropdownOpen && (
              <div className="transition ease-in-out duration-700 left-0 right-0 z-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl">
                <p className="cursor-pointer" onClick={() => handleOptionSelect('1')}>
                  1
                </p>
                <p className="cursor-pointer" onClick={() => handleOptionSelect('2')}>
                  2
                </p>
                <p className="cursor-pointer" onClick={() => handleOptionSelect('3')}>
                  3
                </p>
              </div>
            )}
          </div>
          <label className="m-1">{b("message")}</label>
          <textarea
            name="message"
            placeholder={b("message")+ "..."}
            className="w-full h-32 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
            required
          />
          <div className="flex items-center mb-7">
            <input
              type="checkbox"
              id="consentCheckbox"
              className="mr-2"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              required
            />
            <label htmlFor="consentCheckbox" className="text-base">
              {b("terms1")}{" "}<a className='underline' href="#">{b("terms2")}</a>
            </label>
          </div>
          <input
            className="bg-pt-dark-btn text-white rounded-[40px] self-center md:self-start w-[315px] h-[40px] md:w-[180px] md:h-[48px] cursor-pointer focus:outline-none"
            type="submit"
            value={t('message')}
          />
        </form>
        {showPopup && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-pt-primary text-white p-8 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">{b("message2")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
