<script lang="ts" setup>
// Components
import VoiceListTitle from './VoiceListTitle.vue'
import VoiceVue from './Voice.vue'
// Models
import { IVoice } from "@/models/IVoice"
// Props
const props = defineProps<{
  voices: IVoice[],
  title: string
}>();
</script>

<template>
  <div class="voice-list">
    <VoiceListTitle :title="title" />
    <!-- <pre>{{voices}}</pre> -->
    <div v-if="voices.length" class="voice-list__content">
      <VoiceVue v-for="(voice, index) in voices" :key="`voice-${index}`" :voice="voice" />
    </div>
    <div data-testid="message" v-else class="voice-list__notfav">
      No voices yet
    </div>
  </div>
</template>

<style lang="scss" scoped>
.voice-list {
  color: white;
  padding: 2.5em 3em 0em 3em;
  .voice-list__content {
    color: white;
    display: grid;
    gap: 10px;
    justify-content: space-evenly;
    justify-items: center;
    grid-template-columns: 1fr 1fr;

    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 25%);
    }

    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(6, 16%);
    }
    align-items: center;
  }
  .voice-list__notfav {
    color: white;
    width: 100%;
    height: 2em;
    text-align: center;
  }
}
</style>
