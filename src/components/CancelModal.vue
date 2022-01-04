<template>
  <div class="cancel-modal">
    <div class="header">
      Discard note ?
      <slot></slot>
    </div>
    <div class="main">
      <div class="btn btn-yes" @click="$emit('clickyes')">Discard</div>
      <div class="btn btn-no" @click="$emit('clickno')">No</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: max-content;
  padding-top: 10px;
  border-bottom: 1px solid #8f8f8f;
  color: var(--font-color);
  font-size: 1.2rem;
  font-weight: bolder;
}

.header p {
  font-weight: 300;
  padding: 0px 40px;
  font-size: 15px;
  margin: 0px;
  margin-bottom: 5px;
}

.main {
  width: 100%;
  height: min-content;
  padding-bottom: 10px;
}

.main .btn {
  width: 100%;
  margin-top: 10px;
  border-radius: 0px;
  padding: 8px;
}

.btn-no {
  font-weight: bolder;
  font-size: 1.1rem;
}

.btn-no:active {
  font-weight: 300;
}

.btn-yes:active {
  font-weight: bolder;
}
</style>
