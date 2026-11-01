<script setup lang="ts">
import { usePortalStore } from '@/stores/portal'
const portal = usePortalStore()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div>
        <h3>{{ portal.name }}</h3>
        <p class="muted">{{ portal.tagline || 'Portal demo, data bersifat dummy.' }}</p>
      </div>
      <div>
        <h3>Tautan</h3>
        <p><a href="#berita">Berita</a></p>
        <p><a href="#agenda">Agenda</a></p>
        <p><a href="#anggota">Anggota</a></p>
      </div>
      <div>
        <h3>Akun</h3>
        <p><RouterLink to="/login">Masuk</RouterLink></p>
        <p><RouterLink to="/register">Daftar</RouterLink></p>
      </div>
      <div>
        <h3>Kontak</h3>
        <p class="muted">Jl. Contoh No. 1, Jakarta</p>
        <p class="muted">info@vuebundle.example</p>
      </div>
    </div>
    <div class="copyright">&copy; 2026 {{ portal.name }}. Semua data pada halaman ini bersifat dummy.</div>
  </footer>
</template>
