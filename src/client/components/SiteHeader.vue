<script setup lang="ts">
import { usePortalStore } from '@/stores/portal'
const portal = usePortalStore()
</script>

<template>
  <header class="site-header">
    <div class="container bar">
      <RouterLink to="/" class="brand">
        <span class="brand-mark">{{ portal.name.charAt(0) }}</span>
        {{ portal.name }}
      </RouterLink>
      <nav class="main-nav">
        <RouterLink to="/">Beranda</RouterLink>
        <a href="#berita">Berita</a>
        <a href="#agenda">Agenda</a>
        <a href="#anggota">Anggota</a>
      </nav>
      <div class="nav-actions">
        <RouterLink class="btn btn-ghost" to="/login">Masuk</RouterLink>
        <RouterLink class="btn btn-primary" to="/register">Daftar</RouterLink>
      </div>
    </div>
  </header>
</template>
