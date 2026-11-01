<script setup lang="ts">
const model = defineModel<{ idDocumentName: string; supportingDocumentName: string }>({ required: true })

function onFile(e: Event, field: 'idDocumentName' | 'supportingDocumentName') {
  const file = (e.target as HTMLInputElement).files?.[0]
  model.value[field] = file?.name ?? ''
}
</script>

<template>
  <div>
    <h2 style="margin-bottom:4px">Dokumen Pendukung</h2>
    <p class="muted" style="margin-bottom:20px">
      Mode demo: dokumen tidak benar-benar diunggah, hanya menyimpan nama file.
    </p>
    <div class="field">
      <label for="idDoc">KTP / Dokumen Identitas</label>
      <input id="idDoc" class="input" type="file" @change="onFile($event, 'idDocumentName')" />
      <p v-if="model.idDocumentName" class="muted" style="margin-top:6px">{{ model.idDocumentName }}</p>
    </div>
    <div class="field">
      <label for="supportDoc">Dokumen Pendukung Lain (opsional)</label>
      <input id="supportDoc" class="input" type="file" @change="onFile($event, 'supportingDocumentName')" />
      <p v-if="model.supportingDocumentName" class="muted" style="margin-top:6px">
        {{ model.supportingDocumentName }}
      </p>
    </div>
  </div>
</template>
