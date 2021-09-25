import { format } from "date-fns"
import { useLocation } from 'react-router';
import Header from "../components/Header"
import SearchResults from "../components/SearchResults";
import Map from "../components/Map";
import useJsonData from "../custom_hooks/useJsonData";


function Search() {
    const location = useLocation()
    const { searchInput, startDate, endDate, numberOfGusts } = location.state
    const dateFormatter = {
        startDate:format(new Date(startDate), 'dd MMMM yy'),
        endDate:format(new Date(endDate), 'dd MMMM yy'),
    }
    const { cards } = useJsonData()
    const {search_results} = cards
    return (
        <div className="block" >
            <Header placeholder={`${searchInput} | ${dateFormatter.startDate} | ${dateFormatter.endDate} |  ${numberOfGusts} `} />
           <div className="flex">
                <div className="pt-12 px-6 flex-grow">
                    <p className='text-xs' >
                        {`${700}+ stays - ${dateFormatter.startDate} - ${dateFormatter.endDate} - for ${numberOfGusts} number of gusts`}
                    </p>
                    <h4 className='text-3xl font-medium' >
                        {`Stays in ${searchInput}`}
                    </h4>
                    <div className="hidden md:flex pt-6 pb-2 px-4 border-b space-x-3">
                        <button className="bg-gray-50 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 active:ring-2 ring-gray-100 transition-all duration-200 border">Cancellation Flexibility</button>
                        <button className="bg-gray-50 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 active:ring-2 ring-gray-100 transition-all duration-200 border">Type of place</button>
                        <button className="bg-gray-50 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 active:ring-2 ring-gray-100 transition-all duration-200 border">Price</button>
                        <button className="bg-gray-50 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 active:ring-2 ring-gray-100 transition-all duration-200 border">Rooms and beds</button>
                        <button className="bg-gray-50 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 active:ring-2 ring-gray-100 transition-all duration-200 border">More filters</button>
                    </div>
                    <div className='flex flex-col' >
                        {search_results?.map((stay, index) => (
                            <SearchResults key={index} stay={stay} />
                        ))}
                    </div>
                </div>
                <div className="hidden xl:inline-flex min-w-[600px]">
                    <Map stays={search_results} />
                </div>
           </div>
        </div>
    )
}

export default Search
