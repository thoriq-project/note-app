<template>
  <div class="home">
    <Navbar />
    <div class="home-body px-2 pb-2">
      <SearchField />
      <NoteCard v-for="data in notes" :title="data.title" :date="data.date" :content="data.content" :type="data.type" :pin="data.pinned" :key="data.id"></NoteCard>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchField from "@/components/SearchField.vue";
import NoteCard from "@/components/NoteCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { Navbar, SearchField, NoteCard },
  data() {
    return {
      notes: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        this.notes = response.data;
        console.log(this.notes);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.home-body {
  padding-top: 50px;
  background-color: var(--main-color);
}
</style>
