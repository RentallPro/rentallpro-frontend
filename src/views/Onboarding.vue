<template>
<div class="bg">
    <div class="pt-5 text-center" style="color: #fff;">
        <h3>Lend an item</h3>
    </div>
    <span v-if="this.step === 1">
    <FirstPage/> 
    </span>
    <span v-else-if="this.step === 2">
    <SecondPage/> 
    </span>
    <span v-else-if="this.step === 3">
    <ThirdPage/> 
    </span>
    <div class="btn btn-primary" @click="increment">Click</div>
</div>
</template>



<script>
import FirstPage from '@/views/FirstPage'
import SecondPage from '@/views/SecondPage'
import ThirdPage from '@/views/ThirdPage'

export default {
    components: {
    FirstPage,
    SecondPage,
    ThirdPage
  },
    name: "Onboarding",
  data() {
    return {
      step: 1
    };
  },

   methods: {
    increment() {
      this.step += 1;
    },

   }
}
</script>


<style scoped>
.bg{
    background-image: linear-gradient(to bottom right,#80C2EA, #43A6DF);
    height: 100vh;
}
</style>