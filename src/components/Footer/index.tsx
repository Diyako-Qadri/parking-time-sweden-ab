"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/parking-time-logo.png'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
        <footer className="flex flex-col justify-center h-80 fixed mt-[100px] w-full text-white bg-pt-primary md:px-16">
            {/* for img address contact and links */}
            <div className="flex justify-between flex-row border-b-[1px] h-24 border-white">
                <div className="flex w-[490px] justify-start">
                    {/* logga */}
                    <div className="flex w-[80px]">
                        <a href="/">
                        <Image
                        src={Logo}
                        alt="headerLogo"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        width={60}
                        height={60}
                        /></a>
                    </div> 
                    <div className="w-48 h-26 gap-8"> 
                        <p className="text-sm">Address</p>
                        <p className="text-sm">Nyköpingsvägen 52 | 61150 </p>
                        <p>NYKÖPING</p>
                    </div>
                    <div className="w-36">
                        <p className="text-sm">Contact</p>
                        <a href="mailto:info@example.com" className="hover:underline cursor-pointer">info@example.com</a> | 
                        <a href="tel:+46727224400" className="hover:underline cursor-pointer">+46727224400</a>
                        <div className="flex flex-row w-[40px] justify-between"> 
                            <FiInstagram />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
                <div className="w-52 flex flex-col justify-start">
                    <div>
                        <p className="font-bold">Links</p>
                    </div>
                    <div className="flex justify-between ">
                        <Link href="#" className="hover:underline">Contact</Link>
                        <Link href="#" className="hover:underline">About us</Link>
                        <Link href="#" className="hover:underline">News</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-14 justify-end">
                <div className="flex flex-row justify-between">
                    <p className="text-sm">&copy; {currentYear}</p>
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer

 
    

 
    




