<template>
  <div>
    <b-dropdown right variant="link" class="btn" no-caret>
      <template #button-content>
        <b-icon icon="chevron-down" scale="0.8" class="dd-icon"></b-icon>
      </template>
      <b-dropdown-item-button @click="test()"> <b-icon icon="trash" variant="danger"></b-icon> Delete</b-dropdown-item-button>
      <b-dropdown-item-button @click="test()"><img src="../assets/pin-angle-fill-color.svg" alt="Pinned Note" /> Pin</b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log("tester");
    },
  },
};
</script>

<style scoped>
.btn {
  width: max-content;
  padding: 0;
}

.dd-icon {
  color: #333333;
}
</style>
