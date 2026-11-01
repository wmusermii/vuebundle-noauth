<script setup lang="ts">
const model = defineModel<{ fullName: string; phone: string; companyName: string; entityType: string }>({
  required: true,
})
</script>

<template>
  <div>
    <h2 style="margin-bottom:4px">Informasi Pribadi / Entitas</h2>
    <p class="muted" style="margin-bottom:20px">Lengkapi data diri atau perusahaan yang mendaftar.</p>
    <div class="field">
      <label for="fullName">Nama Lengkap</label>
      <input id="fullName" v-model="model.fullName" class="input" />
    </div>
    <div class="grid-2">
      <div class="field">
        <label for="phone">No. Telepon</label>
        <input id="phone" v-model="model.phone" class="input" />
      </div>
      <div class="field">
        <label for="entityType">Jenis Entitas</label>
        <select id="entityType" v-model="model.entityType" class="input">
          <option value="individual">Perorangan</option>
          <option value="company">Perusahaan</option>
        </select>
      </div>
    </div>
    <div class="field" v-if="model.entityType === 'company'">
      <label for="companyName">Nama Perusahaan</label>
      <input id="companyName" v-model="model.companyName" class="input" />
    </div>
  </div>
</template>
