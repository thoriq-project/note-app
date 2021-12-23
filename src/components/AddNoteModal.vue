<template>
  <div class="modal-body">
    <div class="m-header">
      <h3>Create new</h3>
    </div>
    <div class="m-main">
      <div class="btn" @click="openNotePage()">
        <b-icon icon="card-text"></b-icon> Note
        <b-icon icon="card-text" class="dummy-icon"></b-icon>
      </div>
      <div class="btn" @click="openListPage()">
        <b-icon icon="card-list"></b-icon> List
        <b-icon icon="card-text" class="dummy-icon"></b-icon>
      </div>
    </div>
    <div class="m-footer" @click="closeModal()">
      <div class="btn">cancel</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNotePage() {
      this.$router.push({ name: "Note" });
    },
    openListPage() {
      this.$router.push({ name: "List" });
    },
    closeModal() {
      this.$modal.hide("modal-component");
    },
  },
};
</script>

<style scoped>
.modal-body {
  width: 100%;
  height: 100%;
}

.m-header {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #999999;
}

.m-header h3 {
  font-weight: bold;
}

.m-main {
  /* background-color: mediumaquamarine; */
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}

.m-main .btn {
  background-color: var(--font-color);
  color: white;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.m-main .btn:active {
  background-color: #a8a8a8;
  color: #202020;
}

.dummy-icon {
  color: transparent;
}

.m-footer {
  width: 100%;
  height: 20%;
}

.m-footer .btn {
  border: 2px solid var(--font-color);
  width: 100%;
  height: 100%;
  color: var(--font-color);
  font-size: 1.15rem;
  font-weight: bold;
}

.m-footer .btn:active {
  background-color: #333333;
  color: white;
  border-color: white;
}
</style>
