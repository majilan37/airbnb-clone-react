
import useJsonData from "../custom_hooks/useJsonData";

function SmallCards() {
    const { cards } = useJsonData()
    const { small_cards } = cards
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
            {small_cards?.map((card, index) => (
                <div key={index} className='flex items-center pr-4 mx-2 my-2 rounded-md transition duration-200 hover:bg-gray-100 hover:scale-105' >
                    <div className='w-16 h-16 relative' >
                        <img className='object-contain rounded-md h-full' src={card.img} alt="" />
                    </div>
                    <div className="flex pl-2 flex-col">
                        <h4 className='font-semibold' >{card.location}</h4>
                        <p className='text-sm text-gray-500' >{card.distance}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SmallCards


