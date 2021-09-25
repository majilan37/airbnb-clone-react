function LargeCard() {
    return (
        <div className='relative my-12' >
            <div className='relative h-96' >
                <img className='object-cover h-full w-full rounded-md' src="https://links.papareact.com/4cj" alt="" />
            </div>
            <div className='absolute top-[30%] px-10' >
                <h4 className='text-4xl font-semibold max-w-[250px]' >The Greatest Outdoor</h4>
                <p className='my-2' >Wishlists curated by Airbnb</p>
                <button className='px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition duration-200 active:ring-[3px] ring-gray-700' >Get inspired</button>
            </div>
        </div>
    )
}

export default LargeCard
