<template>
  <button class="btn" @click="$emit('onclick')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.header .btn {
  width: 100%;
  color: var(--font-color);
  border-radius: 0;
  padding: 5px;
}
</style>
