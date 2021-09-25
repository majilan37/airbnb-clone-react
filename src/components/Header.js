import {
    SearchIcon, GlobeAltIcon, UserIcon, UserCircleIcon, MenuIcon 
} from '@heroicons/react/solid'
import { DateRangePicker } from 'react-date-range'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useEDValue, useHNOGValue, useHSIValue, useNOGValue, useOCDValue, useSDValue, useSIValue } from '../assets/StateProvider';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 



function Header({placeholder}) {
    const searchInput = useSIValue()
    const setSearchInput = useHSIValue()
    const startDate = useSDValue()
    const endDate = useEDValue()
    const numberOfGusts = useNOGValue()
    const setNumberOfGusts = useHNOGValue()
    const onChangeDate = useOCDValue()
    const history = useHistory()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
    
    const handleSearch = () => {
        history.push({
            pathname: '/search',
            state: {
                searchInput,
                startDate,
                endDate,
                numberOfGusts
            },
        })
        setSearchInput('')
    }
    return (
        <header className="grid grid-cols-2 md:grid-cols-3 px-8 py-5 z-50 bg-white sticky top-0 shadow-md" >
            <div className="relative my-auto sm:flex items-center sm:m-0 ">
                <Link to="/">
                    <img className="object-contain h-8 block" src="https://links.papareact.com/qd3" alt="" />
                </Link>
            </div>
            <div className="border sm:justify-between p-2 sm:p-1 rounded-full flex items-center" >
                <input 
                    value={searchInput}
                    onChange={ (e) => setSearchInput(e.target.value)}
                    className='flex-grow outline-none text-sm px-3' 
                    type="text" 
                    placeholder={ placeholder || 'Start your search' }
                />
                <div className="hidden sm:flex items-center justify-center bg-red-400 rounded-full p-2 text-white" >
                    <SearchIcon className='h-4' />
                </div>
            </div>
            <div className="hidden md:flex justify-end items-center space-x-1">
                <p className="hover:bg-gray-50 p-2 rounded-full" >Become a host</p>
                <GlobeAltIcon className="h-10 hover:bg-gray-50 p-2 rounded-full" />
                <div className="flex p-2 items-center space-x-1 bg-gray-50 border rounded-full">
                    <MenuIcon className='h-5' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            {searchInput && (
               <div className="flex flex-col col-span-3 mt-10 mx-auto">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        onChange={onChangeDate}
                        rangeColors={['#fd5b61']}
                        minDate={new Date()}
                    />
                    <div className="flex justify-between border-b pb-2">
                        <h4 className="text-2xl font-medium" >Number of guests</h4>
                        <div className="flex" >
                            <UserIcon className='h-6' />
                            <input 
                                className='border ml-2 w-14 outline-none' 
                                value={numberOfGusts} 
                                onChange={setNumberOfGusts}
                                min={1} 
                                type="number" 
                            />
                        </div>
                    </div>
                    <div className='flex justify-around mt-4' >
                        <Button onClick={() => setSearchInput('')} variant='text' style={{ color: 'gray' }} >Cancel</Button>
                        <Button variant='text' style={{ color: '#fd5b61' }} onClick={handleSearch}>Search</Button>
                    </div>
               </div>
            )}
        </header>
    )
}

export default Header
