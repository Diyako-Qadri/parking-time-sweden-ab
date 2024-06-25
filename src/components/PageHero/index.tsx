type PageHeroProps = {
    bgImage: string;
    categoryText: string;
    headline: string;
    heroText: any;
}

const PageHero = ( {bgImage, categoryText, headline, heroText}:PageHeroProps) => {
    

    return (
        <section className={`flex relative flex-col ${bgImage} bg-cover bg-left-200 md:bg-top h-[583px] text-white pt-20`}>
            <div className="flex flex-col justify-center p-7 lg:px-16 backdrop-brightness-75 backdrop-blur-sm h-full md:w-2/5">
                <p className="relative text-lg font-bold flex items-center pb-4">{categoryText}</p>
                <h1 className="text-4xl font-bold w-fit md:text-5xl">{headline}</h1>
                <p className="text-base pt-6 md:text-xl">{heroText}</p>
            </div>
        </section>
    )
}

export default PageHero