<template>
  <b-sidebar id="sidebar" width="250px" z-index="50" lazy no-header-close aria-label="sidebarhead" shadow>
    <div class="content px-2">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  props: [],
};
</script>

<style scoped>
.content {
  padding-top: 40px;
}

a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  padding-bottom: 5px;
  color: var(--font-color);
}

a.router-link-exact-active {
  font-weight: bold;
  color: var(--font-color);
}
</style>
