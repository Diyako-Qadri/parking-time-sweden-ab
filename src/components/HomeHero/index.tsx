import HeroActions from "../HeroActions"

type HomeHeroProps = {
    headline1: string;
    headline2: string;
    heroText1: string;
    heroText2: string;
}

const HomeHero = ({headline1, headline2, heroText1, heroText2}: HomeHeroProps) => {
    return(
        <>
            <section className='relative flex flex-col bg-homeHero-image justify-center bg-center bg-no-repeat bg-cover text-white h-lvh -z-10'>
                <div className="p-7 md:px-16">
                    <h1 className="text-5xl font-bold md:text-6xl">{headline1}<br/>{headline2}</h1>
                    <p className="text-base pt-6 md:text-xl">{heroText1}<br/>{heroText2}</p>
                </div>
                <HeroActions/>
            </section>
        </>
    )
}

export default HomeHero