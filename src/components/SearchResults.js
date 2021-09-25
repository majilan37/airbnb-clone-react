import { StarIcon } from "@heroicons/react/solid"

function SearchResults({stay}) {
    return (
        <div className="p-4 flex flex-col sm:flex-row border-b hover:shadow-md cursor-pointer transition" >
            <div className="relative h-52 w-64 md:h-52 md:w-80 flex-shrink-0" >
                <img className="object-cover rounded-md h-full w-full" src={stay.img} alt="" />
            </div>
            <div className="px-4 flex-grow" >
                <h4 className="text-xl" >{stay.location}</h4>
                <h3 className="text-2xl font-semibold my-2" >{stay.title}</h3>
                <p className="py-2" >{stay.description}</p>
                <div className="border-b w-10 py-2" ></div>
                <div className="flex  justify-between" >
                    <p className="flex items-center" >
                        <StarIcon className='h-5 mr-1 text-yellow-500' />
                        {stay.star}
                    </p>
                    <p className='flex flex-col' >
                        <span className="text-xl font-medium" >{stay.price}</span>
                        <span>{stay.total}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
