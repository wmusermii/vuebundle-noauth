<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { dummyNews } from '@/data/dummyNews'
import { dummyAgenda } from '@/data/dummyAgenda'
import { dummyMembers } from '@/data/dummyMembers'
</script>

<template>
  <div>
    <SiteHeader />

    <section class="container hero">
      <div>
        <h1>Selamat datang di VueBundle NoAuth</h1>
        <p>
          Portal demo satu-build (Vue 3 + Express) tanpa modul login/RBAC. Konten di halaman
          ini seluruhnya data dummy, dan backend hanya menyediakan satu endpoint gateway yang
          meneruskan (passthrough) permintaan ke service lain.
        </p>
        <RouterLink class="btn btn-primary" to="/register">Daftar Sekarang</RouterLink>
      </div>
      <div class="hero-card">
        <div class="stat"><span class="muted">Anggota terdaftar</span><strong>128</strong></div>
        <div class="stat"><span class="muted">Service terhubung</span><strong>1 (core)</strong></div>
        <div class="stat"><span class="muted">Status gateway</span><strong>Dummy / Healthz</strong></div>
      </div>
    </section>

    <section id="berita" class="container section">
      <div class="section-head">
        <h2>Berita Terbaru</h2>
        <a href="#berita">Lihat Semua</a>
      </div>
      <div class="card-grid">
        <article v-for="n in dummyNews" :key="n.id" class="card">
          <span class="tag">{{ n.tag }}</span>
          <h3>{{ n.title }}</h3>
          <span class="muted">{{ n.date }}</span>
        </article>
      </div>
    </section>

    <section id="agenda" class="container section">
      <div class="section-head">
        <h2>Agenda Kegiatan</h2>
        <a href="#agenda">Lihat Semua</a>
      </div>
      <div class="card-grid">
        <article v-for="a in dummyAgenda" :key="a.id" class="card">
          <span class="tag">{{ a.location }}</span>
          <h3>{{ a.title }}</h3>
          <span class="muted">{{ a.date }}</span>
        </article>
      </div>
    </section>

    <section id="anggota" class="container section">
      <div class="section-head">
        <h2>Anggota</h2>
      </div>
      <div class="member-list">
        <span v-for="m in dummyMembers" :key="m">{{ m }}</span>
      </div>
    </section>

    <section class="container section">
      <div class="cta-block">
        <div>
          <h2>Gabung sebagai anggota</h2>
          <p style="opacity:.9">Pendaftaran menggunakan formulir wizard beberapa langkah.</p>
        </div>
        <RouterLink class="btn" style="background:#fff;color:var(--primary)" to="/register">
          Mulai Pendaftaran
        </RouterLink>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
