export default {
    name: 'Home',
    components: {
    },
    data() {
        return {
            password: '',
            passwordFieldType: 'password'
        }
    },
    methods: {
        switchVisibility() {
          this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
        }
    }
  }