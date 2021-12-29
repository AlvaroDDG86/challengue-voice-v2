<script lang="ts" setup>
// Images
import VoicesVoiceIcon01 from '@/assets/images/VoicesVoiceIcon01.png'
import VoicesVoiceIcon02 from '@/assets/images/VoicesVoiceIcon02.png'
import VoicesVoiceIcon03 from '@/assets/images/VoicesVoiceIcon03.png'
import voiceFavouriteOff from '@/assets/images/voice-favourite-off.svg'
import voiceFavourite from '@/assets/images/voice-favourite.svg'
// models
import { IVoice } from "@/models/IVoice"
// Pinia
import { useStore } from '@/store/voices'
const store = useStore()
// props
const props = defineProps<{
  voice: IVoice
}>();
const icons = {
  'VoicesVoiceIcon01.png': VoicesVoiceIcon01,
  'VoicesVoiceIcon02.png': VoicesVoiceIcon02,
  'VoicesVoiceIcon03.png': VoicesVoiceIcon03,
}
</script>

<template>
  <div class="voice" @click="() => store.active = voice">
    <div class="voice__fav" @click.stop="() => store.setFav(voice)">
      <img :src="voice.fav ? voiceFavourite: voiceFavouriteOff" alt="icon">
    </div>
    <div class="voice__icon" :class="{ 'voice__icon--active' : voice.active}">
      <img :src="icons[voice.icon]" alt="icon">
    </div>
    <div class="voice__name" :class="{ 'voice__name--active' : voice.active}">
      {{ voice.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.voice {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1em;
  width: 7em;
  height: 10em;
  text-align: center;
  cursor: pointer;

  &:hover {
    .voice__fav {
      display: flex;
    }

    .voice__icon {
      background-color: white;
    }
  }

  .voice__fav {
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    top: 25px;
    right: 20px;
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 50%;

    & > img {
      width: 10px;
      height: 10px;
    }
  }

  .voice__icon {
    background-color: #dddbdb;
    width: 4em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 50%;

    &--active {
      background: linear-gradient(45deg, #5fc4ff, #23c0d5);
    }
  }

  .voice__name {
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 20px;

    &--active {
      color: #23c0d5;
    }
  }
}
</style>
