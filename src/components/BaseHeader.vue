<script setup>
// Images
import random from '@/assets/images/button-random.svg'
import filter from '@/assets/images/filter.svg'
import order from '@/assets/images/order.svg'
// Pinia
import { useStore } from '@/store/voices';
const store = useStore()

const selectedOptions = ['asc', 'desc']
</script>

<template>
  <div class="base-header">
    <BaseInput icon="search" v-model="store.filters.text" />
    <div class="base-header__group">
      <BaseIcon name="filter.png" :icon="filter" />
      <BaseSelect :options="store.tagOptions" :default="store.filters.tags" @input="event => store.filters.tags = event"/>
    </div>
    <div class="base-header__group">
      <BaseIcon name="order" :icon="order" />
      <BaseSelect :options="selectedOptions" :default="store.filters.order" @input="event => store.filters.order = event"/>
    </div>
    <BaseIcon name="button random" :icon="random" @click="() => store.setActiveRandom()" />
  </div>
</template>

<style lang="scss" scoped>
.base-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .base-header__group {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .base-input {
    margin-right: auto;
  }

  .base-header__group {
    margin-right: 1em;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .base-input:first-of-type {
      margin-right: initial;
    }
    .base-header__group {
      margin-right: 0;
    }
  }
}
</style>
