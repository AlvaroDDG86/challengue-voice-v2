<script lang="ts" setup>
// Props y emiters
const props = defineProps<{
  icon: string,
  name: string
}>();
const emit = defineEmits(['click'])
</script>
<template>
  <div class="base-icon" @click="emit('click')">
    <img :src="icon" :alt="`icon-${name}`">
  </div>
</template>

<style lang="scss" scoped>
.base-icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
