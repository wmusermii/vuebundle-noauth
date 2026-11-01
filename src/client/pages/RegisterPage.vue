<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { usePortalStore } from '@/stores/portal'
import StepIndicator from '@/components/StepIndicator.vue'
import StepAccount from './wizard/StepAccount.vue'
import StepPersonal from './wizard/StepPersonal.vue'
import StepDocuments from './wizard/StepDocuments.vue'
import StepConfirm from './wizard/StepConfirm.vue'

const portal = usePortalStore()
const steps = ['Akun', 'Data Diri', 'Dokumen', 'Konfirmasi']
const current = ref(0)
const submitted = ref(false)

const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  phone: '',
  entityType: 'individual',
  companyName: '',
  idDocumentName: '',
  supportingDocumentName: '',
})

const error = ref('')

function validateCurrent(): boolean {
  error.value = ''
  if (current.value === 0) {
    if (!form.email || !form.password) {
      error.value = 'Email dan kata sandi wajib diisi.'
      return false
    }
    if (form.password !== form.confirmPassword) {
      error.value = 'Konfirmasi kata sandi tidak cocok.'
      return false
    }
  }
  if (current.value === 1) {
    if (!form.fullName || !form.phone) {
      error.value = 'Nama lengkap dan no. telepon wajib diisi.'
      return false
    }
  }
  return true
}

function next() {
  if (!validateCurrent()) return
  if (current.value < steps.length - 1) current.value++
}
function back() {
  error.value = ''
  if (current.value > 0) current.value--
}
function submit() {
  if (!validateCurrent()) return
  // mode demo: tidak memanggil API, cukup tandai selesai
  submitted.value = true
}

const isLastStep = computed(() => current.value === steps.length - 1)
</script>

<template>
  <div class="auth-wrap">
    <aside class="auth-aside">
      <div class="brand">
        <span class="brand-mark">{{ portal.name.charAt(0) }}</span>
        {{ portal.name }}
      </div>
      <p>Formulir pendaftaran bergaya wizard, mengikuti data dummy saja.</p>
    </aside>
    <section class="auth-main">
      <div class="auth-form" style="max-width:520px">
        <template v-if="!submitted">
          <h1>Daftar Akun</h1>
          <StepIndicator :steps="steps" :current="current" />
          <p v-if="error" class="alert" role="alert" style="margin-bottom:16px">{{ error }}</p>

          <StepAccount v-if="current === 0" v-model="form" />
          <StepPersonal v-else-if="current === 1" v-model="form" />
          <StepDocuments v-else-if="current === 2" v-model="form" />
          <StepConfirm v-else :form="form" />

          <div class="wizard-actions">
            <button class="btn btn-ghost" :disabled="current === 0" @click="back">Kembali</button>
            <button v-if="!isLastStep" class="btn btn-primary" @click="next">Lanjut</button>
            <button v-else class="btn btn-primary" @click="submit">Kirim Pendaftaran</button>
          </div>
          <p class="hint muted">
            Sudah punya akun? <RouterLink to="/login">Masuk</RouterLink>
          </p>
        </template>
        <template v-else>
          <h1>Pendaftaran Terkirim</h1>
          <p class="muted">
            Ini hanya simulasi tampilan — belum ada data yang dikirim ke server.
            Pada implementasi penuh, langkah ini akan memanggil endpoint pendaftaran.
          </p>
          <RouterLink class="btn btn-primary" to="/">Kembali ke Beranda</RouterLink>
        </template>
      </div>
    </section>
  </div>
</template>
