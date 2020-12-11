export default class auth {
    /**
     * @constructor
     */
    constructor(api) {
        this.http = api
    }

    login(payload) {
        return this.http.post('/api/v1/user/login', payload)
    }
    register(payload) {
        return this.http.post('/api/v1/user/signup', payload)
    }
}