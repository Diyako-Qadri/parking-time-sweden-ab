import { PiPencilLineFill } from "react-icons/pi";
import { TbParkingCircle } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown} from "react-icons/io";


const HowItWorks = () => {
  return (
    <>
        <div className="flex h-[774px] justify-center items-center py-28 bg-pt-background">
            <div className="container max-w-10xl px-5">
                <div className="flex flex-col md:flex-row">
                    <div className="bg-white flex-1 relative px-5 py-7 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                        <div className="relative flex w-16 h-10">
                            <div className="flex flex-row justify-end">
                            <PiPencilLineFill className="text-pt-red size-7"/>
                            </div>
                        </div>
                        <div className="flex items-end w-[133px] h-[102px] text-[100px] absolute right-[-20px] top-[-20px] font-extrabold text-slate-200">
                             01
                        </div>
                        <h2 className="text-4xl">Enter your registration number</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                    <div className="flex justify-center items-center pb-7 pt-7">
                        <IoIosArrowForward className="text-4xl text-pt-red hidden md:inline-block"/>
                        <IoIosArrowDown className="text-4xl text-pt-red md:hidden" />
                    </div> 
                    <div className="bg-white flex-1 relative px-5 py-7 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                        <div className="relative w-16 h-10">
                            <TbParkingCircle className="text-pt-red size-7"/>
                        </div>
                        <div className="flex items-end w-[133px] h-[102px] text-[100px] absolute right-[-20px] top-[-20px] font-extrabold text-slate-200">
                             02
                        </div>
                        <h2 className="text-4xl">Find your desired parking location</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                    <div className="flex justify-center items-center pb-7 pt-7">
                        <IoIosArrowForward className="text-4xl text-pt-red hidden md:inline-block"/>
                        <IoIosArrowDown className="text-4xl text-pt-red md:hidden" />
                    </div> 
                    <div className="bg-white flex-1 relative px-5 py-7 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                        <div className="relative w-16 h-10">
                            <MdOutlineWatchLater className="text-pt-red size-7"/>
                        </div>
                        <div className="flex items-end w-[133px] h-[102px] text-[100px] absolute right-[-20px] top-[-20px] font-extrabold text-slate-200">
                             03
                        </div>
                        <h2 className="text-4xl">Start your digital parking disc</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                </div>
                <div className="flex justify-center md:p-8 md:flex items-center flex-col">button</div>
            </div>
        </div>
    </>
    )
}

export default HowItWorks

