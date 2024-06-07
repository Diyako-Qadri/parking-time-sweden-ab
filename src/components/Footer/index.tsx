import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/parking-time-logo.png'
const Footer = () => {
      const currentYear = new Date().getFullYear();
    
      return (
        <>
        <footer className="flex flex-col justify-between items-center h-90 bg-fixed mt-[100px] bg-pt-primary">
            {/* for img address contact and links */}
            <div className="flex justify-between px-[32px]">

            
            <div className="flex w-96 flex-row">
                {/* logga */}
                <div className="flex ">
                    {/* img link to homepage */}
                    <a href="#" className="flex space-x-2" />
                    <Image src={Logo} alt="Logo" className="h-10 w-10" />
                </div> 
                <div className="w-96 h-26 gap-8"> 
                    <p className="text-sm">Address</p>
                    <p className="text-sm">Nyköpingsvägen 52 | 61150 </p>
                    <p>NYKÖPING</p>
                    
                </div>
                <div>
                <p className="text-sm">Contact</p>
                <a href="mailto:info@example.com" className="hover:underline cursor-pointer">info@example.com</a> | 
                    <a href="tel:+46727224400" className="hover:underline cursor-pointer">+46727224400</a>
                </div>
               
            </div>
            <div>
            <div className="flex space-x-6">
                    <Link href="#" className="hover:underline">Contact</Link>
                    <Link href="#" className="hover:underline">About us</Link>
                    <Link href="#" className="hover:underline">News</Link>
                </div>

            </div>
            </div>
                <div className="flex items-center">
                    <p className="text-sm">&copy; {currentYear}</p>
                </div>
                
        </footer>
        </>
    )
}
export default Footer

 
    

 
    




