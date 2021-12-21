<template>
  <div class="about">
    <Navbar />
    <div class="about-body">
      <button><router-link to="/">Back to Home</router-link></button>
    </div>
    <Dropdown />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Dropdown from "@/components/DropdownButton.vue";
export default {
  components: {
    Navbar,
    Dropdown,
  },
};
</script>

<style scoped>
.about-body {
  padding-top: 50px;
}
</style>
