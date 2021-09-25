import axios from 'axios'
import { useEffect, useState } from 'react'

function useJsonData() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        const path = 'data/data.json'
        axios.get(path)
            .then(({data}) => setCards(data))
    }, [])

    return {cards, setCards}
}

export default useJsonData
