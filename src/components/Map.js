import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import {getCenter} from 'geolib'

function Map({stays}) {
    const coordinates = stays?.map((stay) => ({
        longitude: stay.long,
        latitude : stay.lat,
    }))
    const center = getCenter(coordinates)
    const [viewport, setViewport] = useState({});
    const [selected, setSelected] = useState({})

    useEffect(() =>{
        setViewport({
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 10,
        })
    }, [center.latitude, center.longitude])

    return (
        <ReactMapGL 
            mapStyle='mapbox://styles/majilan/cktvncrqa2ffu17ok597z8plj'
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            height='100%'
            width= '100%'
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            {...viewport}
        >
            {stays?.map((stay, index) =>(
                <div key={index} >
                    <Marker
                        longitude={stay.long}
                        latitude={stay.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p  onClick={() => setSelected(stay)}
                            className='text-xl cursor-pointer animate-bounce' >
                            📌
                        </p>
                    </Marker>
                    {selected.long === stay.long ? (
                        <Popup 
                            onClose={() => setSelected({})}
                            closeOnClick={true}
                            latitude={stay.lat}
                            longitude={stay.long}
                        >
                            {stay.title}
                        </Popup>
                    ): (false)}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
