<template>
  <section>
    <div class="container overflow">
      <div class="row mt-4">
        <div class="col-6">
          <h4>Items for you</h4>
        </div>
        <div class="col-6 text-right">
          <button class="btn px-5 py-2">LEND AN ITEM</button>
        </div>
      </div>
       <p>CATEGORIES </p>
       <div class="flex-it mt-3">
         <div class="space-it">
         <img src="@/assets/Ellipse 44.svg" alt="" />
         <p>All Categories </p>
         </div>
         <div class="space-it">
         <img src="@/assets/Ellipse 43.svg" alt="" />
         <p>Category</p>
         </div>
         <div class="space-it">
         <img src="@/assets/Ellipse 43.svg" alt="" />
         <p>Category</p>
         </div>
         <div class="space-it">
         <img src="@/assets/Ellipse 43.svg" alt="" />
         <p>Category</p>
         </div>
         <div class="space-it">
         <img src="@/assets/Ellipse 43.svg" alt="" />
         <p>Category</p>
         </div>
         <div class="space-it">
         <img src="@/assets/Ellipse 43.svg" alt="" />
         <p>Category</p>
         </div>
         <div class="space-it">
         <img src="@/assets/Ellipse 43.svg" alt="" />
         <p>Category</p>
         </div>
         <div class="space-it">
         <img src="@/assets/Ellipse 43.svg" alt="" />
         <p>Category</p>
         </div>
       </div>
      <div class="row">
        <div class="col-md-12"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 995px) {
  .overflow{
    overflow-x: scroll;
  }
}
.flex-it{
  display: flex;
}
.space-it{
  margin-left: 20px;
  margin-right: 20px;
}
.btn {
  background: #2d9cdb;
  color: #ffffff;
}
</style>