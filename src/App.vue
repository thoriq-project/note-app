<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  --main-color: #f4f4f9;
  --font-color: #333333;
  --powder-blue: #f4f4f9;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color);
  max-width: 500px;
  margin: auto;
  background-color: var(--main-color);
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
