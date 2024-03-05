<script setup>
</script>

<template>
  

  <div class="w-screen h-screen img-bg-content ">
    <div class="container flex justify-evenly pt-32">
      <div>
        <img class="shadow-xl shadow-black " width="720" height="480" src="../assets/img/restaurant-2.jpg"
          alt="img-error-load">
      </div>

      <div class="bg-firstContent shadow-xl justify-items-center text-center pt-24">
        <div class="flex justify-center font-mainFont font-semibold px-3">
          <p class="text-3xl">"welcome to restorante home for the best serve"</p>
        </div>
        <div>
          <button class="bg-secondContent text-fourthContent p-2 mt-24 text-2xl border border-slate-800 border-r-4 border-b-4" @click="$router.push('/booking')">BOOK SEAT</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.img-bg-content {
  background-image: url('../assets/img/restaurant-1.jpg');
}
</style>
