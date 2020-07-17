import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertData = payload => api.post(`/insert`, payload)
export const displayData = () => api.get(`/display`)


const apis = {
    insertData,
    displayData,
}

export default apis