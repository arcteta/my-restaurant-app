<script setup>
import SubMenu from '@/components/SubMenu.vue';
import HeaderComponent from '../components/HeaderComponent.vue'
import { RouterLink } from 'vue-router';

</script>
<template>
  <SubMenu />
  <div class="bg-slate-300 ">
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
  </div>
</template>

<style></style>
