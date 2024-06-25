'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import { IoIosArrowDown } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

export const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations('button');
  const b = useTranslations('contact_us');
  const y = useTranslations("placeholder")
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [nameValid, setNameValid] = useState<boolean>(true);
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [messageValid, setMessageValid] = useState<boolean>(true);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setShowPopup(true);

    if (!nameValid || !emailValid || !messageValid) {
      alert('Please fill in all required fields correctly to proceed');
      setLoading(false);
      setShowPopup(false);
      return;
    }

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          'service_epr51x4',
          'template_ltnn4l5',
          formRef.current,
          'Csuym5gx5aHov0nLK'
        );
        setTimeout(() => setShowPopup(false), 500);
        formRef.current.reset();
        setSelectedOption('');
      } catch (error) {
        console.log('FAILED...', error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Form reference is null');
      setLoading(false);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.name) {
      case 'user_name&lastname':
        setNameValid(!!e.target.value.trim());
        break;
      case 'user_email':
        setEmailValid(validateEmail(e.target.value));
        break;
      case 'message':
        setMessageValid(!!e.target.value.trim());
        break;
      default:
        break;
    }
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="flex grow md:pt-3  justify-center h-full flex-col w-full md:flex-row">
      <div className="relative w-full p-10 md:w-1/2">
        <h3 className="text-5xl pb-5 font-bold text-black">
          {b('page-title')}
        </h3>
        <p className="w-3/4 font-medium text-base mt-5">{b('page-message')}</p>
        <div className="mt-10 h-28 flex flex-col justify-between">
          <div className="flex flex-row text-lg items-center">
            <MdEmail />
            <a
              href="mailto:info@parkingtime.se"
              className="ml-3 text-black hover:underline"
            >
              info@parkingtime.se
            </a>
          </div>
          <div className="flex flex-row text-lg items-center">
            <FaPhoneAlt />
            <a
              href="tel:+46723991515"
              className="ml-3 text-black hover:underline"
            >
              +46 72 399 15 15
            </a>
          </div>
          <div className="flex flex-row text-lg items-center">
            <IoLocation />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Nyköpingsvägen+52+611+50+NYKÖPING"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-black hover:underline"
            >
              Nyköpingsvägen 52 | 611 50 NYKÖPING
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex w-full md:w-1/2 p-5">
        <form
          className="flex flex-col self-center p w-full"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <label className="m-1 text-base">
            {b('first&lastName')} <span className="text-black-500">*</span>
          </label>
          <input
            type="text"
            name="user_name&lastname"
            placeholder={y("name")}
            className={`w-full h-10 p-2 mt-1 mb-2 text-black bg-white border ${
              nameValid
                ? 'border-gray-300 focus:border-green-500'
                : 'border-red-500'
            } rounded-xl focus:outline-none`}
            onChange={handleInputChange}
            required
          />
          <label className="m-1 text-base">{b('Job')}</label>
          <input
            type="text"
            name="user_job_title"
            placeholder={y("job")}
            className="w-full h-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
          />
          <div className="flex flex-row gap-2 w-full">
            <div className="flex flex-col w-3/5">
              <label className="m-1">
                {b('Email')} <span className="text-black-500">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="ex. name@gmail.com"
                className={`h-10 p-2 mt-1 mb-2 text-black bg-white border ${
                  emailValid
                    ? 'border-gray-300 focus:border-green-500'
                    : 'border-red-500'
                } rounded-xl focus:outline-none`}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label className="m-1">{b('Phone')}</label>
              <input
                type="phone"
                name="user_phone"
                placeholder={y("mobile")}
                className="h-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
              />
            </div>
          </div>
          <label className="m-1">{b('Reason')}</label>
          <div className="relative">
            <div
              className="flex items-center justify-between px-2 w-full h-10 p-2 mt-1 mb-2 text-black bg-pt-background rounded-xl cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <p>{selectedOption ? selectedOption : b('form')}</p>
              <IoIosArrowDown />
            </div>
            {dropdownOpen && (
              <div className="transition ease-in-out duration-700 left-0 right-0 z-10 p-2 mt-1 mb-2 text-black bg-white border border-gray-300 rounded-xl">
                <p
                  className="cursor-pointer"
                  onClick={() => handleOptionSelect('1')}
                >
                  1
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => handleOptionSelect('2')}
                >
                  2
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => handleOptionSelect('3')}
                >
                  3
                </p>
              </div>
            )}
          </div>
          <label className="m-1">
            {b('message')} <span className="text-black-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder={y("message") + '...'}
            className={`w-full h-32 p-2 mt-1 mb-2 text-black bg-white border ${
              messageValid
                ? 'border-gray-300 focus:border-green-500'
                : 'border-red-500'
            } rounded-xl focus:outline-none`}
            onChange={handleInputChange}
            required
          />
          <div className="flex justify-between ml-1 flex-col md:flex-row-reverese med:items-center  mb-1">
            <div className="flex flex-row">
              <span className="text-xl mr-1">* </span>
              <p className="text-sm">{b('message3')}</p>
            </div>
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
              <p className="text-lg font-semibold">{b('message2')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
