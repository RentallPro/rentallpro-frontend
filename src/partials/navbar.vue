<template>
  <nav class="navbar navbar-expand-lg navbar-light m-auto text-center">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img
          src="@/assets/logo.svg"
          style="height: 40px; width: 135px"
          alt="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <form class="form-inline ml-4 my-lg-0">
        <input
          class="form-control mr-sm-1"
          id="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline my-1 my-sm-0"
          id="search-btn"
          type="submit"
        >
          <i class="fas fa-filter"></i>
        </button>
      </form>

      <div
        class="collapse navbar-collapse text-right"
        id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
         <li class="nav-item">
              <router-link class="nav-link mx-2 my-2" to="/onboarding">
              <img src="@/assets/heart.png" alt="" />Favorites</router-link>
          </li>
         <li class="nav-item">
              <router-link class="nav-link m-2" to="/onboarding">
              <img src="@/assets/mail.png" alt="" />Messages</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link m-2" to="/onboarding">
              <img src="@/assets/Vector.png" alt="" />Notifications</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link m-2" to="/about">
              <img src="@/assets/Vector.png" alt="" />History</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link m-2" to="/onboarding">
              <img src="@/assets/Vector4.png" alt="" />Profile</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
.navbar {
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);
}
#search-input,
#search-btn {
  border: 1px solid #bdbdbd !important;
  background: #fcfcfc;
  border-radius: 10px !important;
}
.nav-link {
  color: #828282;
  font-size: 16px;
  line-height: 21px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
}

.nav-link img {
  padding-right: 10px !important;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.nav-link {
  margin: 0 35px;
  text-align: right;
}
</style>