import { PiPencilLineFill } from "react-icons/pi";
import { TbParkingCircle } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown} from "react-icons/io";


const HowItWorks = () => {
  return (
    <>
        <div className="flex md:h-screen mx-auto justify-center items-center py-28 bg-pt-background">
            <div className="container max-w-10xl px-5">
                <div className="flex flex-col md:flex-row">
                    <div className="bg-white relative px-5 py-7 space-y-8 rounded-xl border-solid border-2 shadow-sm">
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
                    <div className="bg-white px-5 py-7 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                        <div className="relative w-16 h-10">
                            <TbParkingCircle className="text-pt-red size-7"/>
                        </div>
                        <h2 className="text-4xl">Find your desired parking location</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                    <div className="flex justify-center items-center pb-7 pt-7">
                        <IoIosArrowForward className="text-4xl text-pt-red hidden md:inline-block"/>
                        <IoIosArrowDown className="text-4xl text-pt-red md:hidden" />
                    </div> 
                    <div className="bg-white px-5 py-7 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                        <div className="relative w-16 h-10">
                            <MdOutlineWatchLater className="text-pt-red size-7"/>
                        </div>
                        <h2 className="text-4xl">Start your digital parking disc</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                </div>
                <div className="flex justify-center md:p-8 md:flex items-center flex-col border-solid border-2">button</div>
            </div>
        </div>




        {/* <div className="flex md:h-screen mx-auto justify-center items-center py-28 bg-pt-background">
            <div className="container max-w-10xl px-5">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-x-2">
                    <div className="bg-pt-gray1 px-5 py-7 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                        <div className="relative w-16 h-12">
                            <PiPencilLineFill className="text-red-700 size-7"/>
                        </div>
                        <h2 className="text-4xl">Enter your registration number</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                     <div className="flex justify-center items-center"><IoIosArrowForward className="text-2xl"/></div> 
                    <div className="bg-white px-5 py-7 space-y-8 rounded-xl">
                        <div className="relative w-16 h-12">
                            <TbParkingCircle className="text-red-700 size-7"/>
                        </div>
                        <h2 className="text-4xl">Find your desired parking location</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                     <div className="flex justify-center items-center"><IoIosArrowForward /></div> 
                    <div className="bg-pt-gray1 px-5 py-7 space-y-8 rounded-xl">
                        <div className="relative w-16 h-12">
                            <MdOutlineWatchLater className="text-red-700 size-7"/>
                        </div>
                        <h2 className="text-4xl">Start your digital parking disc</h2>
                        <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui repudiandae tenetur .</p>
                    </div>
                    <div>button</div>
                </div>
            </div>
        </div> */}
        {/* <section className="flex flex-col bg-pt-background text-center py-28 px-10">
            <div className="py-10">
                <p>How does it work</p>
            </div>
            <div className="">
            <div className="flex flex-col gap-5">
                <div className="bg-white w-[320px] h-[360px] justify-center border-solid border-2 rounded-2xl shadow-sm">
                    <h2>Ange ditt registreringsnummer</h2>
                    <p>Öppna appen, registreara dig med din bils registreringsnummer</p>
                </div>
                <div className="bg-white w-[320px] h-[360px] justify-center border-solid border-2 rounded-2xl shadow-sm">
                    <h2>Del 2</h2>
                    <p>gör så här för att dfdsfdfdsfsd</p>
                </div>
                <div className="bg-white w-[320px] h-[360px] justify-center border-solid border-2 rounded-2xl shadow-sm">
                    <h2>del 3</h2>
                    <p>en massa text som kommer hjär</p>
                </div>
                
            </div>
            </div>
            

            <div className="text-center p-4 px-0">
                <button>Button for download </button>
            </div>
        </section> */}
    </>
    )
}

export default HowItWorks

