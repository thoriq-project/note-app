<template>
  <div class="navigation">
    <div class="nav-bar">
      <BurgerToggle v-b-toggle.sidebar></BurgerToggle>
      <Sidebar />
      <div class="brand"><a href="#">notte.</a></div>
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
.navigation {
  background-color: white;
  padding: 0px 10px;
  height: 50px;
  width: 100%;
  position: fixed;
}

.nav-bar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand a {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--font-color);
}

.button-burger {
  height: 80%;
  width: 100px;
  background-color: yellow;
}
</style>
