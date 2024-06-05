import HeroActions from "../HeroActions"

const HomeHero = () => {
    return(
        <>
            <section className='relative flex flex-col bg-homeHero-image bg-center bg-no-repeat bg-cover text-white h-lvh -z-10'>
                <div className="p-7 md:px-16">
                    <h1 className="text-5xl font-bold md:text-6xl">What time is it?<br/>Parking time!</h1>
                    <p className="text-base pt-6 md:text-xl">Digital parking disc, directly on your mobile.<br/>A winning concept in a new, digitalized format.</p>
                </div>
                <HeroActions/>
            </section>
        </>
    )
}

export default HomeHero