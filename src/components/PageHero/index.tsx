type PageHeroProps = {
    bgImage: string;
    categoryText: string;
    headline: string;
    heroText: any;
}

const PageHero = ( {bgImage, categoryText, headline, heroText}:PageHeroProps) => {
    

    return(
        <section className={`flex relative flex-col ${bgImage} bg-cover bg-top h-[583px] text-white pt-20`}>
            <div className="flex flex-col justify-end p-7 md:px-16 backdrop-blur-sm h-full md:w-1/2">
                <p className="relative text-lg font-bold flex items-center pb-4">{categoryText}</p>
                <h1 className="text-4xl font-bold md:text-6xl">{headline}</h1>
                <p className="text-base pt-6 md:text-xl">{heroText}</p>
            </div>
        </section>
    )
}

export default PageHero