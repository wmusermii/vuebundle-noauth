<script setup lang="ts">
import { onMounted } from 'vue'
import { usePortalStore } from '@/stores/portal'

const portal = usePortalStore()
onMounted(() => portal.load())
</script>

<template>
  <router-view />
</template>
