import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api'

export const usePortalStore = defineStore('portal', () => {
  const name = ref('VueBundle NoAuth')
  const tagline = ref('')

  async function load() {
    try {
      const d = await api.get<{ name: string; tagline: string }>('/api/public/portal')
      name.value = d.name
      tagline.value = d.tagline
      document.title = d.name
    } catch {
      /* pakai nilai bawaan kalau backend belum jalan */
    }
  }

  return { name, tagline, load }
})
