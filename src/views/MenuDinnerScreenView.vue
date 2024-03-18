<script setup>
import SubMenu from '@/components/SubMenu.vue';

import { useMenuStore } from '@/stores/store';

const store = useMenuStore()

store.fetchMenuDinner();

</script>
<template>
  <SubMenu />
  <div class="bg-slate-200">
    <div class="flex justify-center p-2 ">
      <button class="bg-firstContent p-3 border-slate-800 border-r-4 border-b-4 text-fourthContent font-mainFont">ADD MENU</button>
    </div>
    <div class="grid grid-cols-3 gap-2">
    <div class="" v-for="item in store.menusDinner" :key="item.id" :item="item">
        <div class="flex mx-3 mb-2 justify-items-start bg-secondContent border border-slate-800 border-r-4 border-b-4">
          <div class="p-2">
            <img :src="item.image" :alt="item.item_name" width="100" height="100">
          </div>
          <div class="ml-2 text-fourthContent p-2">
            <p>{{ item.name }}</p>
            <p>${{ item.price }}</p>
            <p>{{ item.detail }}</p>
            <div class="flex flex-row pt-2 justify-end">
              <button class="bg-firstContent p-2 border border-slate-800 border-r-4 border-b-4 mr-2"> edit </button>
              <button class="bg-firstContent p-2 border border-slate-800 border-r-4 border-b-4"> delete </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
