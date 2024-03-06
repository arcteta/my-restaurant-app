<script setup>
import SubMenu from '@/components/SubMenu.vue';

import { useMenuStore } from '@/stores/store';

const store = useMenuStore()


store.fetchMenu()
</script>
<template>
  <SubMenu />
  
    <div class="bg-slate-200">
    <div v-for="item in store.menus" :key="item.id" :item="item">
      <div class="grid grid-cols-2 pt-2">
        <div class="flex mx-3 mb-2 justify-self-center bg-secondContent border border-slate-800 border-r-4 border-b-4">
          <div class="p-2">
            <img :src="item.image" :alt="item.item_name" width="100" height="100">
          </div>
          <div class="ml-2 text-fourthContent p-2">
            <p>{{ item.name }}</p>
            <p>${{ item.price }}</p>
            <p>{{ item.detail }}</p>
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
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <!-- <div class="bg-slate-300 ">
    <div class="flex flex-row ">
      <div>
        <img width="52" height="52" src="https://picsum.photos/200" />
      </div>
      <div>
        <p>title</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Rp 48K</p>
      </div>
    </div>
  </div> -->
</template>

<style></style>
