import axios from "axios";


class BookingDetailService {
    createPost = async (data) => {
        console.log("form data: " + data)
        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/car_rental_02_war/api/v1/bookingDetails', data)   //10s
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchPosts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/car_rental_02_war/api/v1/bookingDetails')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
}

export default new BookingDetailService()