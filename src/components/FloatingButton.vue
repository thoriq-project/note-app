<template>
  <div>
    <div @click="$emit('on-click')" class="floating-button">
      <b-icon icon="journal-plus" scale="1.4" class="add-icon"> </b-icon>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.floating-button {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: var(--font-color);
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 5px 5px 2px #cacaca;
}

.floating-button:active {
  transform: scale(0.9);
  box-shadow: 0px 0px 2px 2px #cacaca;
}

.add-icon {
  color: white;
}
</style>
