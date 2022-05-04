import axios from 'axios';
class Api {
    constructor() {
        this.baseUrl = 'http://localhost:5000/';
        this.headers = {
            'Content-Type': 'application/json',
        }
        this.axiosService = axios.create({
            baseURL: this.baseUrl
        })
    }
    getApi(path, headers = this.headers) {
        return new Promise((resolve, reject) => {
            this.axiosService
            .get(path, {headers})
            .then(resolve)
            .catch(reject)
        })
    }
    postApi(path, headers = this.headers) {
        return new Promise((resolve, reject) => {
            this.axiosService
            .post(path, {headers})
            .then(resolve)
            .catch(reject)
        })
    }
}

export default new Api();