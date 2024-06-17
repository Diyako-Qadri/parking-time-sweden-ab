'use client'

const Accordion = ({ question, answer, accordionOpen, onToggle }) => {

  return (
    <div className="flex flex-col align-middle px-6 py-4 my-2 rounded-[25px] bg-white border border-pt-lightgrayborder md:max-w-[768px]">
      <div
        onClick={onToggle}
        className="flex justify-between self-center w-full text-pt-dark-text text-start border-pt-lightgrayborder font-bold text-md cursor-pointer perspective-1000 md:text-lg"
        >
        <span>{question}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill='none'
          xmlns="http://www.w3.org/2000/svg"
          className={`text-pt-dark-text transform origin-center transition duration-300 ease-out ${
            accordionOpen && "rotate-180"
          }`}
          >
          <path
            d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
            fill="currentColor"
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