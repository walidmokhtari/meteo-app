import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function TodayCard(props) {
    
    const date = new Date(props.data.dt * 1000).toLocaleDateString('fr-FR', {weekday: "long",  day: "numeric", month: "long"})
    const tempDay = props?.data?.temp?.day
    const tempNeight = props?.data?.temp?.night
    const humidity = props?.data?.humidity
    const pressure = props?.data?.pressure
    const wind_speed = props?.data?.wind_speed

    


    return (
        <div className='today__card' >
            <div className='div__title'>
                <Image 
                    src="https://openweathermap.org/img/wn/10d@4x.png"
                    alt="Picture of the author"
                    width={100}
                    height={100} 
                />
                <h1>{date}</h1>
            </div>
            <div className='div__details'>
                <div className='div__left'>
                    <p className='p__data'>Jour - {tempDay}°C</p>
                    <p className='p__data'>Nuit - {tempNeight}°C</p>
                    <p className='p__data'>Humidité - {humidity}%</p>
                </div>
                <div className='div__right'>
                    <p className='p__data'>Pression - {pressure}hPa</p>
                    <p className='p__data'>Vent - {wind_speed} km/h</p>
                </div>
            </div>
        </div>
    );
}

export default TodayCard;