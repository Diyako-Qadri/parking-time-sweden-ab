import { Roboto }  from "next/font/google"

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'], 
});

const KnowMore = () => {
    return(
        <div className="flex flex-col justify-center items-center text-center bg-pt-primary pt-[79px] text-white md:flex-row md:place-content-evenly md:px-28">
            <div className={`flex flex-col items-center ${roboto.className} md:mx-6`}>
                <img
                    src="/images/ceo.png"
                    className="h-[187px] w-[187px] rounded-full my-6"
                    alt="image of CEO">
                </img>
                <p className="text-2xl pb-2">Matilda Öhman, CEO </p>
                <p className="underline cursor-pointer text-lg md:text-[16px]"><a href="mailto:info@parkingtime.se"></a>info@parkingtime.se</p>
            </div>
            <div className="md:text-left md:mx-6">
                <p className="text-4xl py-6">Want to know more?</p>
                <p className={`text-lg pb-6 ${roboto.className}`}>text</p>
            </div>
        </div>
    )
}

export default KnowMore