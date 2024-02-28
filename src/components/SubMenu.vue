<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="bg-yellow-200 flex flex-col justify-items-center text-center">
        <p class=" font-mainFont font-medium"> The Menu </p>
        <hr class="bg-blue-900">
        <p class="font-mainFont font-medium"> Most popular Items </p>
    </div>
    <div class="flex flex-row ">
        <RouterLink to="/menu/menu-breakfast">
            <button>Breakfast</button>
        </RouterLink>
        <RouterLink to="/menu/menu-lunch">
            <button>Lunch</button>
        </RouterLink>
        <RouterLink to="/menu/menu-lunch">
            <button>Dinner</button>
        </RouterLink>
    </div>
</template>

<style scoped></style>