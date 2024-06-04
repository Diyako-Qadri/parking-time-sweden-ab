const HomeHero = () => {
    return(
        <>
            <section className='flex flex-col bg-homeHero-image bg-center bg-no-repeat bg-cover text-white h-lvh p-8 pt-20'>
                <h1 className='text-5xl pt-20 filter-none '>What time is it?<br/>Parking time!</h1>
                <p className="pt-6">Digital parking disc, directly on your mobile.<br/>A winning concept in a new, digitalized format.</p>
                <button className='text-black bg-white'>Contact us</button>
                <button className="text-white bg-black">Download app</button>
            </section>
        </>
    )
}

export default HomeHero