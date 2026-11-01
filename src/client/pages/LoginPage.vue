<script setup lang="ts">
import { ref } from 'vue'
import { usePortalStore } from '@/stores/portal'
import { theme } from '@/theme'
const portal = usePortalStore()
const username = ref('')
const password = ref('')
</script>

<template>
  <div class="auth-wrap">
    <aside class="auth-aside">
      <img v-if="theme.login_image_url" class="auth-aside-bg" :src="theme.login_image_url" alt="" />
      <div class="auth-aside-overlay" :class="{ 'has-image': theme.login_image_url }"></div>
      <div class="brand">
        <img v-if="theme.logo_url" class="brand-logo" :src="theme.logo_url" alt="" />
        <span v-else class="brand-mark">{{ portal.name.charAt(0) }}</span>
        {{ portal.name }}
      </div>
      <h1 class="auth-aside-tagline">Satu build Vue 3 + Express, tanpa modul auth aktif.</h1>
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
