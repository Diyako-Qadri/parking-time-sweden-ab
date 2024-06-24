import { FiBox } from "react-icons/fi";
import { HiLightBulb } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";

const OurValues = () => {
    return (
        <>
        <div className="flex justify-center w-full h-full">
            <div className="flex flex-col justify-center text-center">
                <div className="flex flex-col border border-slate-950">
                    <h2 className="text-3xl font-extrabold">Our Values</h2>
                    <p className="font-bold">What we believe in</p>
                </div>
                <div className="flex md:flex-row flex-col justify-center ">
                   
                    <div className="flex flex-col items-center border border-slate-950 ">
                        <p className="flex justify-center items-center w-16 h-16 bg-slate-200 border rounded-lg  text-3xl text-pt-red"><FiBox /></p>
                        <h2>Simplicity</h2>
                        <p>We are striving to create simple and smooth experiences.</p>
                    </div>
                    <div className="flex flex-col items-center border border-slate-950">
                        <p className="flex justify-center items-center w-16 h-16 bg-slate-200 border rounded-lg text-3xl text-pt-red"><HiLightBulb /> </p>
                        <h2>Innovation</h2>
                        <p>Always trying to improve and making our apps a leader in its field.</p>
                    </div>
                    <div className="flex flex-col items-center border border-slate-950">
                        <p className="flex justify-center items-center text-3xl w-16 h-16 bg-slate-200 border rounded-lg text-pt-red"><FaUserCheck /> </p>
                        <h2>User friendly</h2>
                        <p>Its crucial that our service meets users needs and enhances their parking experience.</p>
                    </div>
                      
                
                </div>
            </div>
       
        </div>
        </>
    )
}

export default OurValues