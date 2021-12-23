<template>
  <div class="title-field">
    <b-form-input placeholder="Add title .." required></b-form-input>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
};
</script>

<style scoped>
.title-field {
  width: 100%;
  height: 50px;
  padding: 0px 10px;
}
.title-field input {
  height: 100%;
  text-transform: capitalize;
}
</style>
