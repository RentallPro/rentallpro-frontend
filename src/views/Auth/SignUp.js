import authService from "../../service/auth";
import errorHandler from '../../service/errorhandler'

export default {
    name: 'SignUp',
    data() {
        return {
            authService: null,
            loading: false,
            height: null,
            passwordFieldType: 'password',
            form: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phoneNumber: ""
            }
        };
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        },
        async signup() {
            this.loading = true;

            try {
                const response = await this.authService.register(this.form);
                if (response) {
                    const login = await this.authService.login({ email: this.form.email, password: this.form.password });
                    window.localStorage.setItem(
                        "userData",
                        JSON.stringify(login.data.data)
                    );
                    window.localStorage.setItem("userToken", login.data.data.token);
                    this.loading = false;
                    this.$notify.success({
                        title: "Success",
                        message: "Registraion Successful"
                    });
                    this.$router.push({
                        path: "/market-place"
                    });
                }
            } catch (err) {
                this.loading = false;
                console.log(err);
                new errorHandler(err, this.$createElement).handler()
                // this.$notify.error({
                //     title: "Error",
                //     message: "Wrong Login details"
                // });
                this.loading = false;
            }
        }
    },
    created() {
        this.authService = new authService(this.$http);
        this.height = window.innerHeight;
    }
};

