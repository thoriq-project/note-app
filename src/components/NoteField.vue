<template>
  <div class="note-field">
    <b-form-textarea :value="value" @input="$emit('input', $event)" rows="15" max-rows="100" placeholder="Type something .."></b-form-textarea>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style scoped>
.note-field {
  width: 100%;
  height: max-content;
  padding: 10px 10px;
}

textarea {
  width: 100%;
  min-height: 300px;
}
</style>
