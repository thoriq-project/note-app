<template>
  <div class="home">
    <Navbar />
    <div class="home-body px-2 pb-2">
      <SearchField />
      <div class="note-card mt-2"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchField from "@/components/SearchField.vue";
export default {
  name: "Home",
  components: { Navbar, SearchField },
};
</script>

<style scoped>
.home-body {
  padding-top: 50px;
  background-color: var(--main-color);
}

.note-card {
  width: 100%;
  height: 150px;
  background-color: white;
}
</style>
