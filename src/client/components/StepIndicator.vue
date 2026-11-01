<script setup lang="ts">
defineProps<{ steps: string[]; current: number }>()
</script>

<template>
  <div class="wizard-steps">
    <div
      v-for="(label, i) in steps"
      :key="label"
      class="wizard-step"
      :class="{ active: i === current, done: i < current }"
    >
      {{ i + 1 }}. {{ label }}
    </div>
  </div>
</template>
