import axios from "axios";

//base_url
const instance = axios.create({
    //baseURL
    baseURL: 'http://localhost:8080/car_rental_02_war/'
    // Header
    // timeout
})
export default instance;