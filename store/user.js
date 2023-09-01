import { defineStore } from 'pinia'
import { getData } from '../api'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  getters: {},
  actions: {
    async getData() {
      const res = await getData()
      console.log(res)
    }
  }
})
