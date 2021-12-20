<template>
  <div class="burger-toggle" @click="test()">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      let span = document.querySelectorAll("span");
      span.forEach((item) => {
        item.classList.toggle("active");
      });
    },
  },
};
</script>

<style scoped>
.burger-toggle {
  width: 25px;
  height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 51;
}

.burger-toggle span {
  display: block;
  height: 3px;
  border-radius: 1px;
  background-color: #333333;
  transition: 0.5s;
}

span:nth-child(1) {
  width: 75%;
}
span:nth-child(2) {
  width: 100%;
}
span:nth-child(3) {
  width: 50%;
}

span:nth-child(1).active {
  transform-origin: left center;
  transform: rotate(45deg) translate(2.5px, -2.5px);
  width: 50%;
  transition: 0.5s;
}
span:nth-child(2).active {
  transform: rotate(-45deg);
  transition: 0.5s;
}
span:nth-child(3).active {
  transform-origin: right center;
  transform: rotate(45deg) translate(6px, -6.5px);
  transition: 0.5s;
}
</style>
