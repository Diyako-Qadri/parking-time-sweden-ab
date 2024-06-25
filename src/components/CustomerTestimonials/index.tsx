'use client';

import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Partner1 from '../../../public/images/nassjökommuncolor.png';
import Partner2 from '../../../public/images/fallköping.png';

type Customer = {
  image: StaticImageData;
  description: string;
  clientName: string;
  clientJob: string;
};

const customer: Customer[] = [
  {
    image: Partner2,
    description: 'client1',
    clientName: 'Jonas Eriksson',
    clientJob: 'cliet2title',
  },
  {
    image: Partner1,
    description: 'client2',
    clientName: 'Maria Lundin',
    clientJob: 'cliet1title',
  },
];

const CustomerTestimonials = () => {
  const b = useTranslations('CustomerTestimonials');

  return (
    <div className="h-full flex flex-col justify-center items-center w-full bg-pt-background">
      <div className="flex flex-col justify-center  h-[205px] text-center  items-center pt-8 px-8">
        <h3 className="h-[60px] text-[38px] md:text-[48px]   mb-10 font-bold">
          {b('pageTitle')}
        </h3>
        <p className="text-[16px] pt-12 md:pt-2 font-normal">
          {b('pageSubTitle')}
        </p>
      </div>

      <div className=" flex flex-col md:flex-row w-full h-[735px] justify-center items-center gap-16 pb-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper  bg-pt-background"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {customer.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-pt-background flex max-w-[1440px]"
            >
              <div className="bg-white h-[590px]  lg:h-[450px] md:h-[625px] w-[100%] max-w-[600px] NavbarScrren:w-[90%] flex flex-col  rounded-[30px]   ">
                <div className="h-1/6 p-8 flex flex-col justify-center w-full pb-3">
                  <Image
                    src={item.image}
                    className="w-[120px] "
                    alt="partnerlogo"
                  ></Image>
                </div>
                <div className="flex h-4/6 justify-start">
                  <p className="p-8 ">"{b(item.description)}"</p>
                </div>
                <div>
                  <div className="px-8 h-1/6">
                    <p className="text-pt-red mb-1">{item.clientName}</p>
                    <p>{b(item.clientJob)}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
