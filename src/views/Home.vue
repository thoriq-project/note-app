<template>
  <div class="home">
    <Navbar />
    <div class="home-body px-2 pb-2">
      <SearchField />
      <NoteCard />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchField from "@/components/SearchField.vue";
import NoteCard from "@/components/NoteCard.vue";
export default {
  name: "Home",
  components: { Navbar, SearchField, NoteCard },
};
</script>

<style scoped>
.home-body {
  padding-top: 50px;
  background-color: var(--main-color);
}
</style>
