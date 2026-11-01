// src/client/stores/portal.ts
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api'

export const usePortalStore = defineStore('portal', () => {
  const name = ref('VueBundle NoAuth')
  const maintenanceMode = ref(false)
  const supportEmail = ref('')

  async function load() {
    try {
      const d = await api.get<{ name: string; maintenanceMode: boolean; supportEmail: string }>('/api/public/portal')
      name.value = d.name
      maintenanceMode.value = d.maintenanceMode
      supportEmail.value = d.supportEmail
      document.title = d.name
    } catch {
      /* pakai default kalau backend belum jalan */
    }
  }

  return { name, maintenanceMode, supportEmail, load }
})