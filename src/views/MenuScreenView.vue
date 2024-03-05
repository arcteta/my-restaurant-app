<script setup>
import SubMenu from '@/components/SubMenu.vue';

import { useMenuStore } from '@/stores/store';

const store = useMenuStore()


store.fetchMenu()
</script>
<template>
  <SubMenu />

    <div class="bg-slate-200">
    <p> lorem12</p>
    <div>
      <ul v-for="item in store.menus" >
        <li>
          {{ item.name}}
        </li>
      </ul> 
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
