<script setup lang="ts">
defineProps<{ steps: string[]; current: number }>()
</script>

<template>
  <div class="stepper">
    <div
      v-for="(label, i) in steps"
      :key="label"
      class="step"
      :class="{ active: i === current, done: i < current }"
    >
      <span class="step-circle">
        <svg v-if="i < current" viewBox="0 0 24 24" width="16" height="16" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12l4 4L19 7" />
        </svg>
        <template v-else>{{ i + 1 }}</template>
      </span>
      <span class="step-label">{{ label }}</span>
    </div>
  </div>
</template>
