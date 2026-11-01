# vuebundle-noauth

Bundle Vue 3 (SPA) + Express (TypeScript), satu build untuk frontend & backend,
**tanpa modul auth/login**. Backend hanya menyediakan satu endpoint **gateway
passthrough** yang meneruskan request ke service lain berdasarkan header/body.

Struktur folder mengikuti pola [`vueportal-bundle`](https://github.com/wmusermii/vueportal-bundle)
(reference), tanpa bagian auth, RBAC, groups, menus, dan approval.

## Fitur

- Landing page publik dengan data dummy (berita, agenda, anggota) — gaya mirip fintech.id.
- Menu "Masuk" & "Daftar" di header.
- Halaman Login: UI saja, tombol "Masuk" **dinonaktifkan** (belum difungsikan).
- Halaman Register: form wizard 4 langkah (Akun → Data Diri → Dokumen → Konfirmasi),
  submit hanya simulasi (tidak memanggil API).
- Backend: `ALL /api/gateway` — endpoint tunggal yang menentukan tujuan dari:
  1. Header `x-service-key` / `x-service-path` (prioritas tertinggi)
  2. Query `?service=&path=`
  3. Body `{ service, path }`
  4. Default: service `core` → `http://localhost:9200/healthz`

  Tujuan service diambil dari tabel `gateway.services` (lihat `db/noauth_install.sql`).
  Setiap pemanggilan dicatat ke `gateway.service_logs`.

## Setup

```bash
cp .env.example .env
# sesuaikan DATABASE_URL

npm install
psql -d NAMA_DB -v ON_ERROR_STOP=1 -f db/noauth_install.sql

npm run dev          # jalankan client (5173) + server (3000) bersamaan
```

## Build satu bundle (production)

```bash
npm run build         # build client -> dist/client, build server -> dist/server
npm start              # menjalankan dist/server/index.js, ikut menyajikan dist/client
```

## Contoh test gateway

```bash
# default -> service core -> http://localhost:9200/healthz
curl http://localhost:3000/api/gateway

# arahkan manual ke service lain lewat header
curl http://localhost:3000/api/gateway \
  -H "x-service-key: core" \
  -H "x-service-path: /healthz"
```

## Catatan

- Tidak ada pg bawaan "healthz dummy" — Anda perlu menjalankan backend dummy sendiri
  di `localhost:9200` (atau ubah `base_url` di tabel `gateway.services`) untuk mencoba
  passthrough secara end-to-end.
- Tabel `gateway.service_logs` bisa dipakai sebagai dasar audit / monitoring; untuk
  health-check berkala, tambahkan tabel `service_health_checks` + scheduler terpisah.
