<script lang="ts" setup>
import { ref } from 'vue'
// Images
import searchIcon from '@/assets/images/search.svg'
import searchClose from '@/assets/images/search-close.svg'
// Props and emiters
const props = defineProps<{
  modelValue: string | number,
  icon: string
}>();
const emit = defineEmits(['update:modelValue'])
const input = ref({} as any)
// Functions
function focus() {
  input.value.focus()
}
function update(event: any) {
  emit('update:modelValue', event.target.value)
}
function clear() {
  emit('update:modelValue', '')
}
</script>
<template>
  <div class="base-input">
    <span class="base-input__icon" @click="() => focus()">
      <img :src="searchIcon" alt="focus">
    </span>
    <input ref="input" class="base-input__input" type="text" :value="modelValue" @input="(event) => update(event)" />
    <span class="base-input__close" @click="() => clear()">
      <img :src="searchClose" alt="clear">
    </span>
  </div>
</template>

<style lang="scss" scoped>
.base-input {
  padding: 0em 1em;
  width: 210px;
  border-radius: 20px;
  background-color: black;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;

  .base-input__input {
    margin-left: 5px;
    background-color: black;
    border: none;
    color: white;
    height: 2em;
    &:focus {
      outline: none;
    }
  }

  .base-input__icon {
    width: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .base-input__close {
    width: 1em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: display 1s;
    position: absolute;
    right: -30px;
    transition: right 1s;
  }

  .base-input__input:focus + .base-input__close {
    right: 10px;
  }
}
</style>
