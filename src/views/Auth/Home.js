import authService from "../../service/auth";
import errorHandler from '../../service/errorhandler'

export default {
    data() {
        return {
            authService: null,
            passwordFieldType: "password",
            form: {
                email: "",
                password: "",
            },
            loading: false,
            height: null,
        };
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },
        async login() {
            this.loading = true;
            try {
                const login = await this.authService.login(this.form);
                console.log(login.data.data.token)
                window.localStorage.setItem(
                    "userData",
                    JSON.stringify(login.data.data)
                );
                window.localStorage.setItem("userToken", login.data.data.token);
                this.loading = false;
                this.$notify.success({
                    title: "Success",
                    message: "Login Successful",
                });
                this.$router.push({
                    path: "/market-place"
                });
            } catch (err) {
                console.log(err);
                this.loading = false;

                new errorHandler(err, this.$createElement).handler()

                // this.$notify.error({
                //     title: "Error",
                //     message: "Wrong Login details",
                // });
            }
        },
    },
    created() {
        this.authService = new authService(this.$http);
        this.height = window.innerHeight;
    },

}