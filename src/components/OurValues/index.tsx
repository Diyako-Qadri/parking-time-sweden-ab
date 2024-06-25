import { FiBox } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";

const OurValues = () => {
    return (
        <>
        <div className="flex w-full h-full bg-pt-background md:h-[878px]">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="block text-center bg-pt-background">  
                    <h2 className="text-3xl font-extrabold pb-7 mb-2">Our Values</h2>
                    <p className="font-bold">What we believe in</p> 
                </div>
                <div className="flex md:flex-row flex-col md:w-6/12 max-w-full p-8 pt-7"> 
                   <div className="flex flex-col items-center  bg-pt-background p-4 md:px-5  md:py-18">
                        <p className="flex justify-center items-center w-16 h-16 bg-slate-200 border rounded-lg shadow-md text-3xl text-pt-red"><FiBox /></p> 
                        <h2 className="py-3 font-bold">Simplicity</h2>  
                        <p className="text-center">We are striving to create simple and smooth experiences.</p>  
                    </div>
                    <div className="flex flex-col items-center  bg-pt-background p-4 md:px-5 md:py-18">
                        <p className="flex justify-center items-center w-16 h-16 bg-slate-200 border rounded-lg shadow-md text-3xl text-pt-red"><HiLightBulb /> </p>
                        <h2 className="py-3 font-bold">Innovation</h2>
                        <p className="text-center">Always trying to improve and making our apps a leader in its field.</p>
                    </div>
                    <div className="flex flex-col items-center  bg-pt-background p-4 md:px-5 md:py-18 ">
                        <p className="flex justify-center items-center w-16 h-16 bg-slate-200 border rounded-lg shadow-md text-3xl text-pt-red"><FaUserCheck /> </p>
                        <h2 className="py-3 font-bold">User friendly</h2>
                        <p className="text-center">Its crucial that our service meets users needs and enhances their parking experience.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OurValues