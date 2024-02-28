<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />

  <div class="w-screen h-screen img-bg-content ">
    <div class="container flex justify-evenly pt-32">
      <div>
        <img class="shadow-xl shadow-black " width="720" height="480" src="../assets/img/restaurant-2.jpg"
          alt="img-error-load">
      </div>

      <div class="bg-firstContent shadow-xl text-center flex justify-center">
        <p class="">"makanan enak itu nikmat ketika dihidangkan saat panas"</p>
        <button @click="$router.push('/booking')"> booking now </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.img-bg-content {
  background-image: url('../assets/img/restaurant-1.jpg');
}
</style>
