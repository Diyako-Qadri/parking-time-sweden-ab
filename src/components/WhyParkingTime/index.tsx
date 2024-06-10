import { useTranslations } from "next-intl"

import Diagram from "../../../public/images/whyone.svg" 
import Phone from "../../../public/images/why2.svg" 
import Integration from "../../../public/images/why3.svg" 
import Data from "../../../public/images/why4.svg" 
import Image from "next/image"



const WhyParkingTime = () => {
    const t = useTranslations("WhyParkingTime")
    return (
        <div className=" relative bg-pt-primary h-[800px] p-[200px] text-white ">
          <div className="">
            <div>
              <Image src={Diagram} style={{width: "48px", height:"48px"}} alt="icon"/> 
                <h2>{t("avoidFinesTitle")}</h2>
                <p>{t("avoidFinesDes")}</p>
            </div>
            <div>
            <Image src={Phone} style={{width: "48px", height:"48px"}} alt="icon"/> 
                <h2>{t("simplifiedTitle")}</h2>
                <p>{t("simplifiedDes")}</p>
            </div>
            <div>
            <Image src={Integration} style={{width: "48px", height:"48px"}} alt="icon"/> 
                <h2>{t("integrationTitle")}</h2>
                <p>{t("integrationDes")}</p>
            </div>
            <div>
            <Image src={Data} style={{width: "48px", height:"48px"}} alt="icon"/> 
                <h2>{t("dataTitle")}</h2>
                <p>{t("dataDes")}</p>
            </div>
          </div>
        </div>
    )
};

export default WhyParkingTime
