import React from 'react'

const Banner = () => {
    
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[800px]" >
            <img className="h-full object-cover object-bottom w-full" src="https://links.papareact.com/0fm" alt="" />
            <div className='absolute flex flex-col top-[45%] py-3 w-full items-center' >
                <h2 className='font-medium text-sm sm:text-lg' >Not sure where to go ? Perfect .</h2>
                <button className='px-7 py-5 my-3 transition duration-200 active:scale-95 rounded-full bg-gray-50 shadow-md text-purple-500 font-semibold' >
                    I'am flexible
                </button>
            </div>
        </div>
    )
}

export default Banner




