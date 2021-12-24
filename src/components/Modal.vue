<template>
  <modal name="modal-component" :width="width" :height="height">
    <slot></slot>
  </modal>
</template>

<script>
export default {
  props: ["width", "height"],
};
</script>

<style scoped></style>
