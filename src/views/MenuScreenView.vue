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
      <div class="grid grid-cols-2">
        <div>
        <img :src="item.image" :alt="item.item_name" width="52" height="52">
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <p>{{ item.detail }}</p>
        </div>
        <div>
        <img :src="item.image" :alt="item.item_name" width="52" height="52">
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <p>{{ item.detail }}</p>
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
