import React from 'react'
import Image from 'next/image'

function StandardCard(props) {
    
    const day = new Date(props.data.dt * 1000).toLocaleDateString('fr-FR', {weekday: "long"})
    const month = new Date(props.data.dt * 1000).toLocaleDateString('fr-FR', { day: 'numeric', month: "long"})
    const icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`
    const temp = parseInt(props.data.temp.day)

    //console.log(props.data)
    return (
        <div className='standard__card'>
            <Image 
                    src={icon}
                    alt="Picture of the author"
                    width={100}
                    height={100} 
            />
            <div className='div__date'>
                <p className='p__day'>{day}</p>
                <p className='p__month'>{month}</p>
            </div>
            <h1>{temp}°C</h1>
        </div>
    );
}

export default StandardCard;