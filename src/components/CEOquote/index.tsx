import { useTranslations } from "next-intl";


const CEOquote = () => {
const j = useTranslations("ceoQuote")

    return (
        <div
        className="h-full py-14 bg-white flex justify-center items-center flex-row">
            <div className=" py-6 w-3/5 flex flex-col text-center">
                <p>
                “{j("quote")}"
                </p>
                <p className="pt-3">
                    -Matilda, CEO {j("title")}
                </p>
            </div>
          
        </div>
    )
};

export default CEOquote
