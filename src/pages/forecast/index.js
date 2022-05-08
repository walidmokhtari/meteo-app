import {React, useState, useEffect} from 'react'
import meteoService from '../../services/meteo.service'
import MainCard from '../../components/MainCard'
import StandardCard from '../../components/StandardCard'
import Link from 'next/link'

function Forecast(props) {

    //useState ( React hooks)
    const [data, setData] = useState({})
    const [today, setToday] = useState(true)
    const [mainData, setMainData] = useState({})

    //useEffect (React hooks), the getForecast function will be called once only
    useEffect(() => {
        meteoService.getForecast(localStorage.getItem('lat'), localStorage.getItem('lon'))
        .then((data) => {
            setMainData(data.data[0])
            setData(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    //updateMainCard() is the function for update our mainCard informations 
    const updateMainCard = (index) => {
        if (today) {
            setMainData(data.data[index])
            setToday(false)
        } else {
            setMainData(data.data[0])
            setToday(true)
        }
    }
    
    //Our forecast page
    return (
        <div className='div__forecast'>
            <div>
                <Link href="/">Retour</Link>
                <MainCard data= {mainData}/>
            </div>
            <div className='div__standard__card'>
            {
                data.data?.map((item, index) => (
                    index >= 1 && <StandardCard data= {item} key= {index} updateMainCard= {updateMainCard} index= {index}/>
                ))
            }
            </div>
        </div>
    );
}

export default Forecast;