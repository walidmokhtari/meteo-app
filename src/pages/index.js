import {React, useState} from 'react'
import {useRouter} from 'next/router'
import meteoService from '../services/meteo.service'

function index(props) {
  const [town, setTown] = useState("")
  const [error, setError] = useState(false)

  const router = useRouter()

  const handleSubmit = (e) => {

    e.preventDefault()

    meteoService.getTown(town)
      .then((data) => {
    
        if (data.data.length == 0) {
          setError(true)
          return
        } else {
          localStorage.setItem('lat', data.data[0].lat)
          localStorage.setItem('lon', data.data[0].lon)
          router.push({
            pathname: "/preventions"
          });
          setError(false)
        }
    })
    .catch((err) => {
      setError(true)
      console.log(err)
    } )
  }

  return (
    <div className="div__parent">
      <div className="div__child">
        <h1 className="title">The Forecast Weather App</h1>
        <div className='weather__form'>
            <input 
              type="text" 
              className="search__input"
              placeholder="Search"
              onChange={e => setTown(e.target.value)}
              />
            <input type="submit" className='weather__submit' onClick={(e) => handleSubmit(e)}/> 
        </div>
          {
            error && <p className='p__error'>Aucune ville n&apos;existe sous ce nom</p>
          }
      </div>
    </div>
  );
}

export default index;