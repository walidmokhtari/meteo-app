import axios from "axios"

export default {
    getTown(town) {
        return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
    },

    getPreventions(lat, lon) {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`)
    }
}