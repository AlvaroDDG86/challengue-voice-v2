<script lang="ts" setup>
// Components
import VoicesList from './components/VoicesList.vue'
// Pinia
import { useStore } from '@/store/voices'
const store = useStore()
</script>
<template>
  <div class="voices">
    <BaseHeader />
    <VoicesList :voices="store.getFavs" :title="'FAVOURITE VOICES'" />
    <VoicesList :voices="store.getVoices" :title="'PRO VOICES'" />
  </div>
</template>

<style lang="scss" scoped>
.voices {
  margin: 0 auto;
  max-width: 1024px;
  min-width: 400px;
}
</style>
