import {
    Notification
} from 'element-ui';

export default class errorHandler {
    /**
     * @constructor
     */
    constructor(error, createElement) {
        this.error = error,
            this.createElement = createElement
    }

    displayer(msg) {
        const h = this.createElement;
        Notification.error({
            title: 'Error',
            message: h('b', {
                style: 'color: red'
            }, msg),
        })

    }
    handler() {
        if (this.error.response.data.errors) {
            let keys = Object.keys(this.error.response.data.errors)
            let errorKey = keys[0]
            let error = this.error.response.data.errors[errorKey]
            if (errorKey) {
                this.displayer(error[0])
            }
        } else if (this.error.response.data.message) {
            this.displayer(this.error.response.data.message)
        } else {
            this.displayer('Something Went Wrong')
        }
    }
}