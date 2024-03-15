import { ref, triggerRef } from 'vue'
import { defineStore } from 'pinia'



export const useMenuStore = defineStore('menu', () => {

  const menus = ref([])
  const subMenus = ref([])
  const error = ref({})
  const subMenusError = ref({})


  const fetchMenu = async () => {
    try {
      const response = await fetch('http://localhost:8000/menu')
      const result = await response.json()
      menus.value = result;
    } catch (err) {
      error.value = err
    }
  }

  const subMenu = async (param) => {
    try {
      const response = await fetch(`http://localhost:8001/${param}`)
      const result = await response.json()
      subMenus.value = result;
    } catch (err) {
      subMenusError.value = err
    }
  }


  console.log(menus);
  return { menus, fetchMenu , subMenu}
})
