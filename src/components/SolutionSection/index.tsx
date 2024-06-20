'useClient'
import Image from 'next/image';
import ParkingSolution from "../../../public/images/parkingSolution.svg"
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

const SolutionSection = () => {
    const t = useTranslations("SmartParkingSolution")
    return (
        <>
         
        <div className='flex lg:flex-row flex-col gap-16 py-28 px-4 md:px-20'>
            <div className='mb-5 px-1 lg:w-1/2'>
               <Image 
                src={ParkingSolution}
                width={900}
                height={800}
                alt="How to use parkingTime"
                /> 
            </div>
            <div className='flex flex-col gap-y-5 p-4 '>
                <div className='max-w-xl'>
                    <h2 className='font-extrabold text-3xl mb-5'>{t("title")}</h2>
                    <p>{t("parkingText")}</p>
                </div>
                <div className='font-bold text-lg mb-2 flex items-center'>
                    <IoIosArrowForward className='text-4xl text-pt-red'/>
                    <p className='font-bold'>{t("firstArrow")}</p>
                </div>
                <div className='font-bold text-lg mb-2 flex items-center'>
                    <IoIosArrowForward className='text-4xl text-pt-red'/>
                    <p className='font-bold'>{t("secondArrow")}</p>
                </div>
                <div className='font-bold text-lg mb-2 flex items-center'>
                    <IoIosArrowForward className='text-4xl text-pt-red'/>
                    <p className='font-bold'>{t("thirdArrow")}</p>
                </div>
                <div className='mt-4'>{t("secondParkingText")}</div>
            </div>
        </div>
       
        </>
    )
}
 export default SolutionSection