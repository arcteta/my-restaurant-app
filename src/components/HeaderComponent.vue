<script setup>
import { isVNode } from 'vue';
import RestaurantLogo from '../components/RestaurantLogo.vue'
</script>
<template>
    <div class="flex justify-items-end justify-between px-5 py-2">
        <RestaurantLogo />
        <nav>
            <ul class="flex justify-items-end ">
                <li>
                    <a class="text-2xl p-2   bg-sky-200 mr-12" href="#"> Home </a>
                </li>
                <li>
                    <a class="text-2xl p-2  bg-sky-200 mr-12" href="#"> Menu </a>
                </li>
                <li>
                    <button class="text-2xl m-3 p-3 bg-firstContent text-fourthContent rounded-sm text-center "> book now
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>