<script setup lang="ts">
const model = defineModel<{ email: string; password: string; confirmPassword: string }>({ required: true })
</script>

<template>
  <div>
    <h2 style="margin-bottom:4px">Informasi Akun</h2>
    <p class="muted" style="margin-bottom:20px">Data ini dipakai untuk membuat kredensial login Anda.</p>
    <div class="field">
      <label for="email">Email</label>
      <input id="email" v-model="model.email" class="input" type="email" autocomplete="email" />
    </div>
    <div class="grid-2">
      <div class="field">
        <label for="password">Kata Sandi</label>
        <input id="password" v-model="model.password" class="input" type="password" autocomplete="new-password" />
      </div>
      <div class="field">
        <label for="confirmPassword">Konfirmasi Kata Sandi</label>
        <input id="confirmPassword" v-model="model.confirmPassword" class="input" type="password" />
      </div>
    </div>
  </div>
</template>
