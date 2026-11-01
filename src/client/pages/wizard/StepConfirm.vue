<script setup lang="ts">
defineProps<{
  form: {
    email: string
    fullName: string
    phone: string
    entityType: string
    companyName: string
    idDocumentName: string
    supportingDocumentName: string
  }
}>()
</script>

<template>
  <div>
    <h2 style="margin-bottom:4px">Konfirmasi</h2>
    <p class="muted" style="margin-bottom:20px">Periksa kembali data sebelum mengirim pendaftaran.</p>
    <div class="card" style="gap:6px">
      <div><strong>Email:</strong> {{ form.email || '-' }}</div>
      <div><strong>Nama:</strong> {{ form.fullName || '-' }}</div>
      <div><strong>Telepon:</strong> {{ form.phone || '-' }}</div>
      <div><strong>Jenis Entitas:</strong> {{ form.entityType === 'company' ? 'Perusahaan' : 'Perorangan' }}</div>
      <div v-if="form.entityType === 'company'"><strong>Perusahaan:</strong> {{ form.companyName || '-' }}</div>
      <div><strong>Dokumen Identitas:</strong> {{ form.idDocumentName || 'Belum diunggah' }}</div>
      <div><strong>Dokumen Pendukung:</strong> {{ form.supportingDocumentName || '-' }}</div>
    </div>
  </div>
</template>
