<template>
  <div class="home">
    <Navbar />
    <div class="home-body px-2 pb-2">
      <div class="search-field mt-2">
        <div class="search-button">
          <b-icon icon="search" scale="1.3"></b-icon>
        </div>
      </div>
      <div class="note-card mt-2"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Home",
  components: { Navbar },
};
</script>

<style scoped>
.home-body {
  padding-top: 50px;
  background-color: var(--main-color);
}

.search-field {
  width: 100%;
  height: 40px;
  background-color: pink;
}

.search-button {
  height: 100%;
  width: 12%;
  background-color: rgb(248, 206, 213);
  display: flex;
  justify-content: center;
  align-items: center;
}

.note-card {
  width: 100%;
  height: 150px;
  background-color: white;
}
</style>
