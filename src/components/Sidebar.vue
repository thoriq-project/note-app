<template>
  <b-sidebar id="sidebar" width="250px" z-index="50" no-header-close shadow>
    <div class="content px-2">
      <router-link to="/">Home</router-link>
      <router-link to="/about">about</router-link>
    </div>
  </b-sidebar>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding-top: 50px;
}

a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  padding-bottom: 5px;
  color: var(--font-color);
}
</style>
