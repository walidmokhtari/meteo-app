import {React, useState, useEffect} from 'react'
import meteoService from '../../services/meteo.service'
import TodayCard from '../../components/todayCard'
import StandardCard from '../../components/StandardCard'
import Link from 'next/link'

function Preventions(props) {

    const [data, setData] = useState({})
    const [todayData, setTodayData] = useState({})

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
                    index >= 1 && <StandardCard data= {item} key= {index} setTodayData= {setTodayData}/>
                ))
            }
            </div>
        </div>
    );
}

export default Preventions;