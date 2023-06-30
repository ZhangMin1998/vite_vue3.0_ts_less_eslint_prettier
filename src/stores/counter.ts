// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    age: 18,
    name: 'zm'
  }),
  getters: {
    getAge() {
      return this.age + 1
    } 
  },
  actions: {
    changeAge(val) {
      this.age += val
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true
  }
})
