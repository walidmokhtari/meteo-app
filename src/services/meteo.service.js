import axios from "axios"

export default {
    getTown(town) {
        return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=1&appid=9bfc73c5cc9acfbe0f46e9346c5dc174`)
    },

    getPreventions(lat, lon) {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=9bfc73c5cc9acfbe0f46e9346c5dc174`)
    }
}