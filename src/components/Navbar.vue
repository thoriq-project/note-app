<template>
  <div class="navbar fixed-top">
    <div class="container">
      <BurgerToggle v-b-toggle.sidebar></BurgerToggle>
      <Sidebar></Sidebar>
      <div class="navbar-brand">
        <router-link to="/">notte.</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BurgerToggle from "./BurgerToggle.vue";
import Sidebar from "./Sidebar.vue";
export default {
  components: {
    BurgerToggle,
    Sidebar,
  },
};
</script>

<style scoped>
.navbar {
  background-color: white;
  padding: 0px 10px;
}

.container {
  max-width: 500px;
  padding: 0px;
}

a {
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--font-color);
  font-weight: bold;
  font-family: "Montserrat Alternates", sans-serif;
}
</style>
