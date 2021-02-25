<template>
  <section class="items">
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="i in 12" :key="i">
          <div class="card border-0 mb-3">
            <img class="card-img" src="@/assets/product.png" alt="Vans"/>
            <div class="card-img-overlay d-flex justify-content-start">
              <a href="#" class="card-link text-danger like">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="card-body">
              <div class="d-flex">
                <h6 class="card-title">Tool Name Goes Here</h6>
                <span class="float-right"><b>N1000/day</b></span>
              </div>
              <h6 class="card-subtitle mb-2 text-muted">
                Heavy Duty | Ogba, Lagos
              </h6>
              <p class="card-text">
                <img src="@/assets/Starrate.png" alt="" /> (4.5/5.0)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background: #ffffff;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  /* width: 20rem; */
}
</style>