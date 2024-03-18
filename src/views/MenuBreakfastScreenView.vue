<script setup>
import SubMenu from '@/components/SubMenu.vue';

import { useMenuStore } from '@/stores/store';

const store = useMenuStore()

store.fetchMenuBreakfast('breakfast');

</script>
<template>
 <SubMenu/>
 <div class="bg-slate-200">
    <div v-for="item in store.menusBreakfast" :key="item.id" :item="item">
      <div class="grid grid-cols-2 pt-2">
        <div class="flex mx-3 mb-2 justify-self-center bg-secondContent border border-slate-800 border-r-4 border-b-4">
          <div class="p-2">
            <img :src="item.image" :alt="item.item_name" width="100" height="100">
          </div>
          <div class="ml-2 text-fourthContent p-2">
            <p>{{ item.name }}</p>
            <p>${{ item.price }}</p>
            <p>{{ item.detail }}</p>
            <div class="flex flex-row pt-2 justify-end">
              <button class="bg-firstContent mr-2 p-2 border border-slate-800 border-r-4 border-b-4"> edit </button>
              <button class="bg-firstContent p-2 border border-slate-800 border-r-4 border-b-4"> add </button>
            </div>
          </div>
        </div>
        <div class="flex mb-2 justify-self-center bg-secondContent border border-slate-800 border-r-4 border-b-4">
          <div class="p-2">
            <img :src="item.image" :alt="item.item_name" width="100" height="100">
          </div>
          <div class="ml-2 text-fourthContent p-2">
            <p>{{ item.name }}</p>
            <p>${{ item.price }}</p>
            <p>{{ item.detail }}</p>
            <div class="flex flex-row pt-2 justify-end">
              <button class="bg-firstContent mr-2 p-2 border border-slate-800 border-r-4 border-b-4"> edit </button>
              <button class="bg-firstContent p-2 border border-slate-800 border-r-4 border-b-4"> tambah </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
