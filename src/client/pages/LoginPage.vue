<script setup lang="ts">
import { ref } from 'vue'
import { usePortalStore } from '@/stores/portal'
const portal = usePortalStore()
const username = ref('')
const password = ref('')
</script>

<template>
  <div class="auth-wrap">
    <aside class="auth-aside">
      <div class="brand">
        <span class="brand-mark">{{ portal.name.charAt(0) }}</span>
        {{ portal.name }}
      </div>
      <p>Satu build Vue 3 + Express, tanpa modul auth aktif. Halaman ini hanya contoh tampilan.</p>
    </aside>
    <section class="auth-main">
      <form class="auth-form" @submit.prevent>
        <h1>Masuk ke akun Anda</h1>
        <p class="muted" style="margin-bottom:20px">
          Login belum difungsikan pada versi tanpa-auth ini.
        </p>
        <p class="alert alert-info" role="status">
          Mode demo: form di bawah tidak terhubung ke backend. Tombol "Masuk" dinonaktifkan.
        </p>
        <div class="field">
          <label for="username">Email / Username</label>
          <input id="username" v-model="username" class="input" autocomplete="username" />
        </div>
        <div class="field">
          <label for="password">Kata Sandi</label>
          <input id="password" v-model="password" class="input" type="password" autocomplete="current-password" />
        </div>
        <a href="#" class="muted" style="font-size:.85rem" @click.prevent>Lupa Kata Sandi?</a>
        <button class="btn btn-primary btn-block" style="margin-top:20px" type="submit" disabled>
          Masuk (nonaktif)
        </button>
        <p class="hint muted">
          Belum punya akun? <RouterLink to="/register">Daftar</RouterLink>
        </p>
      </form>
    </section>
  </div>
</template>
