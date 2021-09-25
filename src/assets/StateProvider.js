import { useState, createContext, useContext } from "react";


export const StartDateValue = createContext()
export const EndDateValue = createContext()
export const NumberOfGustsValue = createContext()
export const OnChangeDateValue = createContext()
export const HandleNumberOfGustsValue = createContext()
export const SearchInputValue = createContext()
export const HandleSearchInputValue = createContext()


export default function StateProvider({children}) {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfGusts, setNumberOfGusts] = useState(1)
    const onChangeDate = (ranges) => {
        setStartDate(ranges.selection.startDate) 
        setEndDate(ranges.selection.endDate)
    }
const handleNumberOfGusts = (e) => setNumberOfGusts(e.target.value)

    return (
        <SearchInputValue.Provider value={searchInput}>
            <HandleSearchInputValue.Provider value={setSearchInput}>
                <StartDateValue.Provider value={startDate}>
                    <EndDateValue.Provider value={endDate}> 
                        <NumberOfGustsValue.Provider value={numberOfGusts}>
                            <OnChangeDateValue.Provider value={onChangeDate} >
                                <HandleNumberOfGustsValue.Provider value={handleNumberOfGusts} >
                                    {children}
                                </HandleNumberOfGustsValue.Provider>
                            </OnChangeDateValue.Provider>
                        </NumberOfGustsValue.Provider>
                    </EndDateValue.Provider>
                </StartDateValue.Provider>
            </HandleSearchInputValue.Provider>
        </SearchInputValue.Provider>
    )
}

export const useSDValue = () => useContext(StartDateValue)
export const useEDValue = () => useContext(EndDateValue)
export const useNOGValue = () => useContext(NumberOfGustsValue)
export const useOCDValue = () => useContext(OnChangeDateValue)
export const useHNOGValue = () => useContext(HandleNumberOfGustsValue)
export const useSIValue = () => useContext(SearchInputValue)
export const useHSIValue = () => useContext(HandleSearchInputValue)