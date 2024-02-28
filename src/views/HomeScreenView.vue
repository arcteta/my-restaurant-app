<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />

  <div class="w-screen h-screen bg-firstContent img-bg-content" >
    <div class="w-screen h-sceen bg-gray-950 bg-transparent"></div>
    <div class="container flex pt-3 justify-evenly justify-items-center">
      <div>
        <img class="shadow-xl shadow-black " width="720" height="480" src="../assets/img/restaurant-2.jpg"
          alt="img-error-load">
      </div>

      <div class="bg-firstContent shadow-xl text-center flex justify-center">
        <p class="">"makanan enak itu nikmat ketika dihidangkan saat panas"</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-bg-content {
  background-image: url('../assets/img/restaurant-1.jpg');
}
</style>
