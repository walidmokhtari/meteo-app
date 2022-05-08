import axios from "axios"

export default {

    //Api call to get lat and lon town informations after user has choices a town
    getTown(town) {
        return axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/town-data`,
            {
                headers : {
                    'Access-Control-Allow-Origin': '*',
                    'town': town,
                }
            }
        )
    },

    //Api call to get all forecast weather doing today and the next 7 days
    getForecast(lat, lon) {
        return axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/weather-data`,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'lat': lat,
                    'lon': lon,
                }
            }
        )
    }
}