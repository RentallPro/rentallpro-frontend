<template>
  <div class="auth signin">
    <div class="form-container">
      <div class="logo"><img src="@/assets/logo.svg" alt="logo"></div>
      <div class="form-wrapper">
        <h3 class="form-title">Sign in to your account</h3>
        <div class="input">
          <label for="Email">Email or Username</label>
          <input type="text" class="input-box ">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <div>
            <input :type='passwordFieldType' v-model="password">
            <span>SHOW</span>
          </div>
          <p><router-link :to="{name: 'ResetPassword'}">Forgot Password?</router-link></p>
        </div>
        <button class="login-button button">
          LOGIN
        </button>
        <div class="social-buttons">
          <button class="google-button button">
            <div class="flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z" fill="#FF1B1B"/>
              </svg>
              <span>LOGIN WITH GOOGLE</span>
            </div>
          </button>
          <button class="facebook-button button">
            <div class="flex">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7657 0H3.23405C1.44797 0 0 1.44791 0 3.23405V20.7658C0 22.552 1.44791 23.9999 3.23405 23.9999H11.8806L11.8953 15.4236H9.66721C9.37765 15.4236 9.14264 15.1895 9.14152 14.8999L9.13084 12.1354C9.12972 11.8443 9.36544 11.6077 9.65659 11.6077H11.8806V8.93651C11.8806 5.83661 13.7739 4.14869 16.5392 4.14869H18.8083C19.0986 4.14869 19.3341 4.38406 19.3341 4.67444V7.00547C19.3341 7.29573 19.0988 7.53104 18.8086 7.53122L17.4161 7.53187C15.9122 7.53187 15.621 8.24648 15.621 9.29522V11.6078H18.9255C19.2404 11.6078 19.4847 11.8827 19.4476 12.1954L19.1199 14.9599C19.0885 15.2244 18.8642 15.4237 18.5978 15.4237H15.6357L15.621 24H20.7658C22.5519 24 23.9998 22.5521 23.9998 20.766V3.23405C23.9998 1.44791 22.5519 0 20.7657 0Z" fill="#475993"/>
              </svg>
              <span>LOGIN WITH FACEBOOK</span>
            </div>
          </button>
        </div>
        <p class="option">Don’t have an account? <span><router-link :to="{name: 'SignUp'}">Create a new account</router-link></span></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


</script>
<script src="./Home.js"></script>

<style lang="scss" src="./Home.scss" scoped></style>
