import { ref } from 'vue'
import { defineStore } from 'pinia'



export const useMenuStore = defineStore('menu', () => {

  const menus = ref({})
  const error = ref({})

  function fetchMenu() {
    fetch('../assets/data.json')
      .then((data) => menus.value = data)
      .catch((err) => { error.value = err })
  }



  console.log(menus);
  return { menus, fetchMenu }
})