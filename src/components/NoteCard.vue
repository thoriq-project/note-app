<template>
  <div class="note-card" @click="$emit('noteclick')">
    <div class="header-card">
      <p class="title-card">{{ title }}</p>
      <div class="header-right">
        <!-- <b-icon icon="chevron-down" class="header-icon"></b-icon> -->
        <DropdownButton @ondelete="$emit('ondelete')" @onpin="$emit('onpin')" />
      </div>
    </div>

    <!-- Main Card -->
    <div class="main-card">
      <p>{{ content }}</p>
    </div>

    <!-- Footer Card -->
    <div class="footer-card">
      <div class="footer-left">
        <div>
          <div class="pinned me-2" v-if="pin">
            <img src="../assets/pin-angle-fill.svg" alt="Pinned Note" />
          </div>
          <div class="unpinned" v-else>
            <p></p>
          </div>
        </div>
        <div class="note-date">
          <p>{{ date }}</p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-type">{{ type }}</p>
        <p>
          <b-icon class="footer-icon" icon="card-text" v-if="type == 'note'"></b-icon>
          <b-icon class="footer-icon" icon="card-list" v-else> </b-icon>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownButton from "./DropdownButton.vue";
export default {
  components: {
    DropdownButton,
  },
  props: ["title", "date", "content", "type", "pin"],
};
</script>

<style>
.note-card {
  width: 100%;
  height: 180px;
  background-color: white;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
}

.header-card {
  width: 100%;
  height: 23%;
  display: grid;
  grid-template-columns: 7fr 3fr;
  align-items: top;
  /* background-color: pink; */
}

.header-right {
  width: 100%;
  height: 100%;
  /* background-color: powderblue; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.header-icon {
  text-align: center;
  margin: 0px 5px;
  cursor: pointer;
}

.title-card {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: initial;
  color: var(--font-color);
  font-weight: bold;
  font-size: 1.3rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.main-card {
  width: 100%;
  height: 60%;
}

.main-card p {
  display: -webkit-box;
  width: 100%;
  height: 100%;
  text-align: start;
  color: var(--font-color);
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

/* Footer Card Css */

.footer-card {
  width: 100%;
  height: 17%;
  background-color: var(--main-color);
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  color: var(--font-color);
}

.footer-right {
  display: flex;
  padding-top: 2px;
}

.footer-type {
  font-weight: bold;
  padding-right: 3px;
}
/* ----------------- */
.footer-left {
  height: 100%;
  width: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.footer-left .note-date {
  width: max-content;
  height: 100%;
  /* background-color: pink; */

  padding-top: 4px;
}

.footer-left .note-date p {
  font-size: 0.8rem;
  font-weight: bolder;
  color: #696969;
}
</style>
