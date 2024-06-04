import Image from "next/image"
import Parking from "../../../public/images/parking-time-logo.png"

const HowItWorks = () => {
  return (
    <>
        <section className="flex flex-col bg-pt-background text-center py-28 px-20">
        <div className="text-center py-20">
                <h3>How it works</h3>
        </div>
        <div className="flex flex-col md:flex-row bg-pt-background text-center gap-6 py-5 px-6">
            <div className="w-full ">
                <Image src={Parking} 
                alt="Description of image 1" 
                //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                style={{
                    width: '100%',
                    height: 'auto'
                }}
                />
            </div>
            <div className="w-full">
                <Image src={Parking} 
                alt="Description of image 2" 
                //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                 style={{
                     width: '100%',
                     height: 'auto'}}
                />
            </div>
            <div className="w-full">
                <Image src={Parking} 
                alt="Description of image 3" 
                //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                style={{
                     width: "100%",
                     height: "auto"
                 }}
                />
            </div>
        </div>
            <div className="text-center p-4 px-0">
                <button>Button for download </button>
            </div>
        </section>
    </>
    )
}

export default HowItWorks

