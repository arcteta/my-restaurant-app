<script setup>
import RestaurantLogo from '../components/RestaurantLogo.vue'
</script>
<template>
    <div class="flex justify-items-end justify-between flex-row m-5">
        <RestaurantLogo />
        <nav class=" text-center">
            <ul class="flex justify-items-end justify-evenly">
                <li class="mt-2">
                    <a class="text-2xl bg-firstContent p-3 pt-1 text-fourthContent mr-12  shadow-lg border border-slate-800 border-r-4 border-b-4"
                        href="#"> Home </a>
                </li>
                <li class="mt-2">

                    <a class="text-2xl bg-firstContent p-3 pt-1 text-fourthContent mr-12 border border-slate-800 border-r-4 border-b-4"
                        href=""> Menu </a>

                </li>
                <li>
                    <button
                        class="text-2xl p-3 bg-firstContent text-fourthContent rounded-sm text-center shadow-xl border border-slate-800 border-r-4 border-b-4">
                        book now
                    </button>
                </li>
            </ul>
        </nav>

    </div>
</template>

<style scoped></style>