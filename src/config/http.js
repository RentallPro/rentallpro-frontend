import axios from 'axios'

const base = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
    }
})
export default base