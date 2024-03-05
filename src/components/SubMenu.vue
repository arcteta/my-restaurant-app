<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class=" flex flex-col justify-items-center text-center">
        <p class=" font-mainFont font-semibold"> The Menu </p>
        <p class="font-mainFont font-semibold"> Most popular Items </p>
    </div>
    <div class="flex flex-row text-center justify-center text-fourthContent text-xl mb-3">
        <RouterLink to="/menu/menu-breakfast">
            <button class="bg-secondContent p-2 border-slate-800 border-r-4 border-b-4 mt-2 mr-5">Breakfast</button>
        </RouterLink>
        <RouterLink to="/menu/menu-lunch">
            <button class="bg-secondContent p-2 border-slate-800 border-r-4 border-b-4 mt-2 mr-5">Lunch</button>
        </RouterLink>
        <RouterLink to="/menu/menu-dinner">
            <button class="bg-secondContent p-2 border-slate-800 border-r-4 border-b-4 mt-2">Dinner</button>
        </RouterLink>
    </div>
</template>

<style scoped></style>