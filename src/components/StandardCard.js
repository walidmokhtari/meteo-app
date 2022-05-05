import React from 'react'
import Image from 'next/image'

function StandardCard(props) {
    
    const date = new Date(props.data.dt * 1000).toLocaleDateString('fr-FR', {weekday: "long"})

    return (
        <div className='standard__card'>
            <Image 
                    src="https://openweathermap.org/img/wn/10d@4x.png"
                    alt="Picture of the author"
                    width={100}
                    height={100} 
            />
            <div>
                <h2>{date}</h2>
                <p className='p__date'></p>
            </div>
            <h1>30°C</h1>
        </div>
    );
}

export default StandardCard;