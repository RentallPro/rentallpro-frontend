<template>
  <div class="auth signin">
    <div class="form-container">
      <div class="logo"><img src="@/assets/logo.svg" alt="logo"></div>
      <div class="form-wrapper">
        <h3 class="form-title">Reset Password</h3>
        <p class="small-text">Enter your username or email to reset your password</p>
        <div class="input">
          <label for="Email">Email or Username</label>
          <input type="text" class="input-box ">
        </div>
        <button class="login-button button">
          RESET PASSWORD
        </button>
        <p class="option">ALready have an account? <span><router-link :to="{name: 'Home'}">Sign In</router-link></span></p>
        <p class="option">Don’t have an account? <span><router-link :to="{name: 'SignUp'}">Create a new account</router-link></span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" src="./Home.scss" scoped></style>
