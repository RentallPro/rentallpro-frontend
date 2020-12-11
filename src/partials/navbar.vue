<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
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
      <form class="form-inline mx-5 my-lg-0">
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
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="@/assets/heart.png" alt="" /> Favorites</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="@/assets/mail.png" alt="" /> Messages</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="@/assets/Vector.png" alt="" />Notifications</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"
              ><img src="@/assets/Vector4.png" alt="" /> Profile</a
            >
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