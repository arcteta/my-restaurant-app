<script setup>
import RestaurantLogo from '../components/RestaurantLogo.vue'
import { RouterLink } from 'vue-router'; 
</script>
<template>
    <div class="flex justify-items-end justify-between flex-row mb-3 bg-slate-300">
        <RestaurantLogo />
        <nav class=" text-center">
            <ul class="flex justify-items-end justify-evenly">
                <li class="mt-2">
                    <RouterLink to="/">
                        <p
                            class="text-2xl bg-firstContent p-3 pt-1 text-fourthContent mr-12 border-slate-800 border-r-4 border-b-4 font-mainFont font-semibold">
                            Home
                        </p>
                    </RouterLink>
                </li>
                <li class="mt-2">
                    <RouterLink to="/menu">
                        <p class="text-2xl bg-firstContent p-3 pt-1 text-fourthContent mr-12 border border-slate-800 border-r-4 border-b-4 font-mainFont font-semibold">
                            Menu
                        </p>
                    </RouterLink>
                </li>
                <li class="mt-2">
                    <RouterLink to="/booking">
                        <p
                            class="text-2xl bg-firstContent p-3 pt-1  text-fourthContent mr-12 border border-slate-800 border-r-4 border-b-4 font-mainFont font-semibold">
                            Book a Table now!
                        </p>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>