<template>
  <div id="auth">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "@/partials/navbar";
export default {
  components: {
    navbar,
  },
};
</script>

<style>
</style>