import { ref, triggerRef } from 'vue'
import { defineStore } from 'pinia'



export const useMenuStore = defineStore('menu', () => {

  const menus = ref([])
  const menusBreakfast = ref([])
  const menusLunch = ref([])
  const menusDinner = ref([])
  const errorMenus = ref({})
  const errorMenusBreakfast = ref({})
  const errorMenusLunch = ref({})
  const errorMenusDinner = ref({})


  const fetchMenu = async () => {
    try {
      const response = await fetch('http://localhost:8000/menu')
      const result = await response.json()
      menus.value = result;
    } catch (err) {
      errorMenus.value = err
    }
  }

  const fetchMenuBreakfast = async () => {
    try {
      const response = await fetch(`http://localhost:8001/breakfast`)
      const result = await response.json()
      menusBreakfast.value = result;
    } catch (err) {
      subMenusError.value = err
    }
  }

  const fetchMenuLunch = async () => {
    try {
      const response = await fetch(`http://localhost:8001/lunch`)
      const result = await response.json()
      menusLunch.value = result;
    } catch (err) {
      errorMenusLunch.value = err
    }
  }

  const fetchMenuDinner = async () => {
    try {
      const response = await fetch(`http://localhost:8001/dinner`)
      const result = await response.json()
      menusDinner.value = result;
    } catch (err) {
      errorMenusDinner.value = err
    }
  }

  return { menus, menusBreakfast, menusDinner, menusLunch, errorMenus, errorMenusBreakfast, errorMenusDinner, errorMenusLunch, fetchMenu, fetchMenuBreakfast, fetchMenuDinner, fetchMenuLunch }
})
