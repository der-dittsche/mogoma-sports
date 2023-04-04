import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpenModal1: false,
    isOpenModal2: false,
    isOpenModal3: false
  }),
  getters: {
    closeModal1(state) {
      return !state.isOpenModal1 ? 'hidden' : ''
    },
    closeModal2(state) {
      return !state.isOpenModal2 ? 'hidden' : ''
    },
    closeModal3(state) {
      return !state.isOpenModal3 ? 'hidden' : ''
    }
  }
})
