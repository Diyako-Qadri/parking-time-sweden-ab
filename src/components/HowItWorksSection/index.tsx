import { PiPencilLineFill } from "react-icons/pi";
import { TbParkingCircle } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown} from "react-icons/io";
import { useTranslations, useLocale } from "next-intl";


const HowItWorks = () => {
    const t = useTranslations('howItWorks')
  return (
    <>
        <div className="flex min-h-screen justify-center items-center py-28 bg-pt-background">
        <div className="flex flex-wrap justify-center">
        <div className="flex flex-col md:flex-row">
            <div className="bg-white flex-1 relative px-5 py-7 m-2 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                <div className="relative flex w-16 h-10">
                    <div className="flex flex-row justify-end">
                        <PiPencilLineFill className="text-pt-red size-7"/>
                    </div>
                </div>
                <div className="flex items-end h-[100px] text-[100px] absolute right-[0px] top-[-10px] font-extrabold text-slate-200">
                    01
                </div>
                <h2 className="text-4xl">{t("registrationTitle")}</h2>
                <p className="text-[15px]">{t("registrationText")}</p>
            </div>
            <div className="flex justify-center items-center pb-7 pt-7 m-2">
                <IoIosArrowForward className="text-4xl text-pt-red hidden md:inline-block"/>
                <IoIosArrowDown className="text-4xl text-pt-red md:hidden" />
            </div> 
            <div className="bg-white flex-1 relative px-5 py-7 m-2 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                <div className="relative w-16 h-10">
                    <TbParkingCircle className="text-pt-red size-7"/>
                </div>
                <div className="flex items-end h-[100px] text-[100px] absolute right-[0px] top-[-10px] font-extrabold text-slate-200">
                    02
                </div>
                <h2 className="text-4xl">{t("locationTitle")}</h2>
                <p className="text-[15px]">{t("locationText")}</p>
            </div>
            <div className="flex justify-center items-center pb-7 pt-7 m-2">
                <IoIosArrowForward className="text-4xl text-pt-red hidden md:inline-block"/>
                <IoIosArrowDown className="text-4xl text-pt-red md:hidden" />
            </div> 
            <div className="bg-white flex-1 relative px-5 py-7 m-2 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                <div className="relative w-16 h-10">
                    <MdOutlineWatchLater className="text-pt-red size-7"/>
                </div>
                <div className="flex items-end h-[100px] text-[100px] absolute right-[0px] top-[-10px] font-extrabold text-slate-200">
                    03
                </div>
                <h2 className="text-4xl">{t("digitalDiskTitle")}</h2>
                <p className="text-[15px]">{t("digitalDiskText")}</p>
            </div>
        </div>
    </div>
</div>


        {/* <div className="flex min-h-screen md:h-screen justify-center items-center py-28 bg-pt-background">
            <div className="container flex flex-wrap justify-center">
                <div className="flex flex-col md:flex-row">
                    <div className="bg-white flex-1 relative px-5 py-7 m-2 space-y-8 rounded-xl border-solid border-2 shadow-sm">
                        <div className="relative flex w-16 h-10">
                            <div className="flex flex-row justify-end">
                            <PiPencilLineFill className="text-pt-red size-7"/>
                            </div>
                        </div>
                        <div className="flex items-end w-[133px] h-[102px] text-[100px] absolute right-[-20px] top-[-20px] font-extrabold text-slate-200">
                             01
                        </div>
                        <h2 className="text-4xl">{t("registrationTitle")}</h2>
                        <p className="text-[15px]">{t("registrationText")}</p>
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
                        <h2 className="text-4xl">{t("locationTitle")}</h2>
                        <p className="text-[15px]">{t("locationText")}</p>
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
                        <h2 className="text-4xl">{t("digitalDiskTitle")}</h2>
                        <p className="text-[15px]">{t("digitalDiskText")}</p>
                    </div>
                </div>
                
            </div>
        </div> */}
    </>
    )
}

export default HowItWorks

