import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', () => {
    const user = {
        id: null,
        role: 'admin'
    }

    return {
        user
    }
})

export default useUserStore