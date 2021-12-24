<template>
  <div class="note">
    <div class="header">
      <div class="btn-wrapper">
        <Button class="btn-cancel" @on-click="cancelValidation()">cancel</Button>
      </div>
      <div class="date-wrapper">Thu, 23-12-2021</div>
      <div class="btn-wrapper">
        <Button class="btn-save" type="submit" form="input-1">save</Button>
      </div>
    </div>
    <main>
      <b-form id="input-1" @submit.prevent>
        <TitleField v-model="noteData.title"></TitleField>
        <NoteField></NoteField>
        <p>{{ noteData.title }}</p>
        <div class="main-field"></div>
      </b-form>
    </main>
    <FloatingButton v-if="buttonup" @on-click="scrollTop()" icon="caret-up-fill" />
    <Modal><h1>Tester</h1></Modal>
  </div>
</template>

<script>
import TitleField from "@/components/TitleField.vue";
import NoteField from "@/components/NoteField.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
export default {
  name: "Note",
  data() {
    return {
      buttonup: false,
      noteData: {
        title: "",
        content: "",
      },
    };
  },
  components: {
    TitleField,
    NoteField,
    FloatingButton,
    Button,
    Modal,
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
      if (this.noteData.title !== "") {
        this.$modal.show("modal-component");
      } else {
        this.$router.push({ name: "Home" });
      }
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
