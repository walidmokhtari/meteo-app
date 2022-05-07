import axios from "axios"

export default {
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

    getPreventions(lat, lon) {
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