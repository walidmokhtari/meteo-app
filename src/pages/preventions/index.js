import {React, useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import meteoService from '../../services/meteo.service'
import TodayCard from '../../components/todayCard'
import StandardCard from '../../components/StandardCard'

function Preventions(props) {
    const router = useRouter()

    const [data, setData] = useState({})
    console.log(data)

    const townData = JSON.parse(router.query.data)

    //const dateMs = new Date(1651748400000).toLocaleDateString('fr-FR', {weekday: "long", year: "numeric", month: "long", day: "numeric"})
    
    useEffect(() => {
        meteoService.getPreventions(townData.lat, townData.lon)
        .then((data) => {
            setData(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
  

    return (
        <>
            <TodayCard />
            <br />
            {
                data.data?.daily?.map((item) => (
                    <StandardCard data= {item}/>
                ))
            }
            
        </>
    );
}

export default Preventions;

/* {
                data.data.daily.map((item) => {
                    <h1>{item.dt}</h1>
                })
            }
            <h1>{data.data?.daily[0].dt}</h1>*/