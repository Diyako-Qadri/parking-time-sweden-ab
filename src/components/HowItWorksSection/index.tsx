import Image from "next/image"
import Parking from "../../../public/images/parking-time-logo.png"

const HowItWorks = () => {
  return (
    <>
        <section className="flex flex-col bg-pt-background text-center py-28 px-10">
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
        </section>
    </>
    )
}

export default HowItWorks

