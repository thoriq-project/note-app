<template>
  <div class="about">
    <Navbar />
    <div class="about-body">
      <button><router-link to="/">Back to Home</router-link></button>
    </div>
    <b-form>
      <b-input type="text" :value="tried" @input="tried = $event" />
    </b-form>
    <p>{{ tried }}</p>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {
      tried: "",
    };
  },
  methods: {
    cobain(e) {
      console.log(e);
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.about-body {
  padding-top: 50px;
}
</style>
