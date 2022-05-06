import {React, useState, useEffect} from 'react'
import meteoService from '../../services/meteo.service'
import TodayCard from '../../components/todayCard'
import StandardCard from '../../components/StandardCard'
import Link from 'next/link'

function Preventions(props) {

    const [data, setData] = useState({})
    const [todayData, setTodayData] = useState({})
    //console.log(router.query.lat)

    //const dateMs = new Date(1651748400000).toLocaleDateString('fr-FR', {weekday: "long", year: "numeric", month: "long", day: "numeric"})

    useEffect(() => {
        meteoService.getPreventions(localStorage.getItem('lat'), localStorage.getItem('lon'))
        .then((data) => {
            setTodayData(data.data.daily[0])
            setData(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
  

    return (
        <div className='div__preventions'>
            <div>
                <Link href="/">Retour</Link>
                <TodayCard data= {todayData}/>
            </div>
            <div className='div__standard__card'>
            {
                data.data?.daily?.map((item, index) => (
                    index >= 1 && <StandardCard data= {item} key= {index}/>
                ))
            }
            </div>
        </div>
    );
}

export default Preventions;

/* {
                data.data.daily.map((item) => {
                    <h1>{item.dt}</h1>
                })
            }
            <h1>{data.data?.daily[0].dt}</h1>*/