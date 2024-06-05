type PageHeroProps = {
    bgImage: string;
}

const PageHero = ({ bgImage }: PageHeroProps) => {
    return(
        <section className={`flex flex-col ${bgImage} bg-cover bg-center justify-center h-custom-458 text-white pt-20`}>
            <div className="p-7 md:px-16">
                <h1 className="text-5xl font-bold md:text-6xl">What time is it?<br/>Parking time!</h1>
                <p className="text-base pt-6 md:text-xl">Digital parking disc, directly on your mobile.<br/>A winning concept in a new, digitalized format.</p>
            </div>
        </section>
    )
}

export default PageHero