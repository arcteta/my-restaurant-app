<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />

  <div class="w-screen h-screen bg-firstContent">
    <div class="container flex pt-3 justify-evenly">
      <div>
        <img class="rounded-2xl shadow-xl shadow-black " width="720" height="480" src="../assets/img/restaurant-1.jpg"
          alt="img-error-load">
      </div>

      <div class="bg-sky-500 ">
        <h1>"makanan enak itu nikmat ketika dihidangkan saat panas"</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-bg-content {
  background-image: url('../assets/img/restaurant-1.jpg');
}
</style>
