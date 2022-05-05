import React from 'react'
import Image from 'next/image'

function TodayCard(props) {
    return (
        <div className='today__card'>
            <div className='div__title'>
                <Image 
                    src="https://openweathermap.org/img/wn/10d@4x.png"
                    alt="Picture of the author"
                    width={100}
                    height={100} 
                />
                <h1>Samedi</h1>
            </div>
            <div className='div__details'>
                <div className='div__left'>
                    <p className='p__data'>Jour - 26.6C°</p>
                    <p className='p__data'>Nuit - 17.1C°</p>
                    <p className='p__data'>Humidité - 34%</p>
                </div>
                <div className='div__right'>
                    <p className='p__data'>Pression - 1019hPa</p>
                    <p className='p__data'>Vent - 1,54 km/h</p>
                </div>
            </div>
        </div>
    );
}

export default TodayCard;