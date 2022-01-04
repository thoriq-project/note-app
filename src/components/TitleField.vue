<template>
  <div class="title-field">
    <b-form-input :value="value" @input="$emit('input', $event)" placeholder="Add title .." required></b-form-input>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {},
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
}
</style>
