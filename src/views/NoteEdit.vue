<template>
  <div class="note-edit">
    <div class="header">
      <div class="btn-wrapper">
        <Button class="btn-cancel" @onclick="discardEdit()">discard</Button>
      </div>
      <div class="date-wrapper">
        <div class="upper">last change</div>
        <div class="lower">{{ notedata.date }}</div>
      </div>
      <div class="btn-wrapper">
        <Button class="btn-save" type="submit" @onclick="saveChange()" form="input-note-edit">save</Button>
      </div>
    </div>
    <main>
      <b-form id="input-note-edit">
        <TitleField v-model="notedata.title"></TitleField>
        <NoteField v-model="notedata.content"></NoteField>
      </b-form>
    </main>
    <Modal :width="modalsize.width" :height="modalsize.height">
      <CancelModal @clickyes="backToHome()" @clickno="closeModal()">
        <p>you will lose your change</p>
      </CancelModal>
    </Modal>
  </div>
</template>

<script>
import TitleField from "@/components/TitleField.vue";
import Button from "@/components/Button.vue";
import NoteField from "@/components/NoteField.vue";
import Modal from "@/components/Modal.vue";
import CancelModal from "@/components/CancelModal.vue";
import axios from "axios";

export default {
  name: "NoteEdit",
  components: {
    TitleField,
    Button,
    NoteField,
    Modal,
    CancelModal,
  },
  data() {
    return {
      notedata: {
        date: "",
        title: "",
        content: "",
      },
      title: "",
      content: "",
      buttonup: false,
      modalsize: {
        width: "80%",
        height: "auto",
      },
    };
  },
  methods: {
    closeModal() {
      this.$modal.hide("modal-component");
    },
    backToHome() {
      this.$router.push({ name: "Home" });
    },
    discardEdit() {
      this.$modal.show("modal-component");
    },
    saveChange() {
      axios
        .put("http://localhost:3000/data/" + this.$route.params.id, {
          date: this.currentDate,
          title: this.notedata.title,
          content: this.notedata.content,
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/data/" + this.$route.params.id)
      .then((response) => (this.notedata = response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    currentDate() {
      let currDate = new Date();
      let day = currDate.getDay();
      let date = currDate.getDate();
      let month = currDate.getMonth() + 1;
      let year = currDate.getFullYear();

      switch (day) {
        case 0:
          day = "Sun";
          break;
        case 1:
          day = "Mon";
          break;
        case 2:
          day = "Tue";
          break;
        case 3:
          day = "Wed";
          break;
        case 4:
          day = "Thu";
          break;
        case 5:
          day = "Fri";
          break;
        case 6:
          day = "Sat";
          break;
      }
      let fullDate = day + ", " + date + "-" + month + "-" + year;

      return fullDate;
    },
  },
};
</script>

<style scoped>
.note-edit {
  padding-top: 10px;
  min-height: 100vh;
}

.header {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}

.header .btn-wrapper {
  width: 25%;
}

.btn-cancel {
  background-color: transparent;
  border: 1px solid var(--font-color);
  color: var(--font-color);
}

.btn-save {
  color: white !important;
  background-color: var(--font-color);
}

.header .date-wrapper {
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.upper {
  font-size: 0.8rem;
}

.lower {
  font-size: 0.9rem;
  font-weight: bolder;
}

main {
  margin-top: 10px;
}
</style>
