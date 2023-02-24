import axios from 'axios';

const calsCalcApi = axios.create({
    baseURL: '/api'
})

export default calsCalcApi;