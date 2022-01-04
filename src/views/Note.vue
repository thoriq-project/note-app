<template>
  <div class="note">
    <div class="header">
      <div class="btn-wrapper">
        <Button class="btn-cancel" @onclick="cancelValidation()">cancel</Button>
      </div>
      <div class="date-wrapper">{{ currentDate }}</div>
      <div class="btn-wrapper">
        <Button class="btn-save" @onclick="saveValidation()" type="submit" form="input-1">save</Button>
      </div>
    </div>
    <main>
      <b-form id="input-1" @submit.prevent>
        <TitleField v-model="noteData.title"></TitleField>
        <NoteField v-model="noteData.content"></NoteField>
        {{ $route.params.id }}
        <div class="main-field"></div>
      </b-form>
    </main>
    <FloatingButton v-if="buttonup" @on-click="scrollTop()" icon="caret-up-fill" />
    <Modal :width="modalsize.width" :height="modalsize.height">
      <CancelModal @clickyes="backToHome" @clickno="closeModal()">
        <p>you will leave without save the note</p>
      </CancelModal>
    </Modal>
  </div>
</template>

<script>
import TitleField from "@/components/TitleField.vue";
import NoteField from "@/components/NoteField.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import CancelModal from "@/components/CancelModal.vue";
import axios from "axios";
export default {
  name: "Note",
  data() {
    return {
      buttonup: false,
      modalsize: {
        width: "80%",
        height: "auto",
      },
      noteData: {
        title: "",
        content: "",
        date: "",
      },
    };
  },
  computed: {
    currentDate() {
      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDay();
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
      let date = day + ", " + today.getDate() + "-" + month + "-" + today.getFullYear();
      return date;
    },
  },
  components: {
    TitleField,
    NoteField,
    FloatingButton,
    Button,
    Modal,
    CancelModal,
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollY);
  },
  methods: {
    getScrollY() {
      let getScrollValue = window.scrollY;
      if (getScrollValue > 50) {
        this.buttonup = true;
      } else {
        this.buttonup = false;
      }
    },
    scrollTop() {
      document.documentElement.scrollTop = 0;
    },
    cancelValidation() {
      if (this.noteData.title !== "" || this.noteData.content !== "") {
        this.$modal.show("modal-component");
      } else {
        this.$router.push({ name: "Home" });
      }
    },
    saveValidation() {
      this.noteData.date = this.currentDate;
      if (this.noteData.title != null) {
        axios
          .post("http://localhost:3000/data", {
            date: this.noteData.date,
            title: this.noteData.title,
            content: this.noteData.content,
            type: "note",
            pinned: false,
          })
          .then(() => {
            console.log("Data berhasil ditambahkan");
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    closeModal() {
      this.$modal.hide("modal-component");
    },
    backToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.note {
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
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  margin-top: 10px;
}
</style>
