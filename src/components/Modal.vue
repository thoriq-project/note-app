<template>
  <modal name="modal-component" :width="mwidth" :height="mheight">
    <slot></slot>
  </modal>
</template>

<script>
export default {
  props: ["mwidth", "mheight"],
};
</script>

<style scoped></style>
