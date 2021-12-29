<script lang="ts" setup>
// Props
const props = defineProps<{
  title: string
}>();
</script>
<template>
  <div class="voice-list-title">
    <span data-testid="title" class="voice-list-title__text">{{ title }}</span>
    <span class="voice-list-title__line"></span>
  </div>
</template>
<style lang="scss" scoped>
.voice-list-title {
  height: 2em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .voice-list-title__line {
    height: 1px;
    flex: 1 1 auto;
    margin-left: 1em;
    background-color: #dddbdb34;
  }
  .voice-list-title__text {
    color: #dddbdb34;
    font-weight: bold;
  }
}
</style>
