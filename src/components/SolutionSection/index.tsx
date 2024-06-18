'useClient'
import Image from 'next/image';
import ParkingSolution from "../../../public/images/parkingSolution.svg"
import { IoIosArrowForward } from "react-icons/io";


const SolutionSection = () => {
    return (
        <>
         <div className=" flex py-28 px-20">
            <div className='flex md:flex-row flex-col gap-16'>
            <div className='mb-5 px-1 md:w-1/2'>
               <Image 
                src={ParkingSolution}
                width={900}
                height={800}
                alt="How to use parkingTime"
                /> 
            </div>
            <div className='flex flex-col gap-y-5 p-4'>
                <div className='max-w-xl'>
                    <h2 className='font-extrabold text-3xl mb-5'>Smart Parking Solution </h2>
                    <p>The parking disc Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur architecto rem molestiae tenetur vitae. Soluta obcaecati deleniti veniam asperiores quaerat maxime quo, amet, dicta, natus nihil necessitatibus consequuntur totam temporibus.</p>
                </div>
                <div className='font-bold text-lg mb-2 flex items-center'>
                    <IoIosArrowForward className='text-4xl text-pt-red'/>
                    <p className='font-bold'>text and more text</p>
                </div>
                <div className='font-bold text-lg mb-2 flex items-center'>
                    <IoIosArrowForward className='text-4xl text-pt-red'/>
                    <p className='font-bold'>text and more text</p>
                </div>
                <div className='font-bold text-lg mb-2 flex items-center'>
                    <IoIosArrowForward className='text-4xl text-pt-red'/>
                    <p className='font-bold'>text and more text</p>
                </div>
                <div className='mt-4'>some more text for the button</div>
            </div>
            </div>
        </div>
        </>
    )
}
 export default SolutionSection