<template>
  <div class="home">
    <Navbar />
    <div class="home-body px-2 pb-2">
      <SearchField />
      <NoteCard
        v-for="data in notes"
        :title="data.title"
        :date="data.date"
        :content="data.content"
        :type="data.type"
        :pin="data.pinned"
        :key="data.id"
        @ondelete="deleteNote(data.id)"
        @onpin="pinNote()"
        @noteclick="openNote(data.id)"
      ></NoteCard>
    </div>
    <FloatingButton @on-click="openModal()" icon="journal-plus" />
    <Modal :width="modalsize.width" :height="modalsize.height">
      <AddNoteModal />
    </Modal>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SearchField from "@/components/SearchField.vue";
import NoteCard from "@/components/NoteCard.vue";
import axios from "axios";
import FloatingButton from "@/components/FloatingButton.vue";
import Modal from "@/components/Modal.vue";
import AddNoteModal from "@/components/AddNoteModal.vue";

export default {
  name: "Home",
  components: { Navbar, SearchField, NoteCard, FloatingButton, Modal, AddNoteModal },
  data() {
    return {
      notes: "",
      modalsize: {
        width: "80%",
        height: "250px",
      },
    };
  },
  methods: {
    openModal() {
      this.$modal.show("modal-component");
    },
    deleteNote(id) {
      axios
        .delete("http://localhost:3000/data/" + id)
        .then(this.loadData())
        .catch((e) => console.log(e));
    },
    pinNote() {
      console.log("pinned");
    },
    loadData() {
      axios
        .get("http://localhost:3000/data")
        .then((response) => (this.notes = response.data))
        .catch((error) => console.log(error));
    },
    openNote(id) {
      this.$router.push({ path: "/noteedit/" + id });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.home-body {
  padding-top: 50px;
  background-color: var(--main-color);
}
</style>
