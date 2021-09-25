import useJsonData from "../custom_hooks/useJsonData"

function MediumCard() {
    const { cards } = useJsonData()
    const { medium_cards } = cards
    return (
        <div className='flex max-w-full scrollbar-hide overflow-x-scroll p-3 pl-0' >
            {medium_cards?.map((card, index) => (
                <div key={index} className="p-2 cursor-pointer hover:scale-105 transition duration-200" >
                    <div className='relative h-[300px] w-[300px]' >
                        <img className='object-cover rounded-md h-full w-full' src={card.img} alt="" />
                    </div>
                    <p className='text-lg font-semibold' >{card.title}</p>
                </div>
            ))}
        </div>
    )
}

export default MediumCard
