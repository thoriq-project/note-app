<template>
  <div class="search-field mt-2">
    <!-- <div class="form-wrapper container-fluid h100 d-flex align-items-center">
      <b-form inline>
        <b-button type="submit">Search</b-button>
        <b-form-input id="search-input" placeholder="e.g How to make omlette"></b-form-input>
      </b-form>
    </div> -->
    <b-form class="d-flex align-items-center">
      <div class="button-wrapper">
        <b-button type="submit" @submit.prevent>
          <b-icon icon="search" scale="1"></b-icon>
        </b-button>
      </div>
      <div class="input-wrapper">
        <b-form-input id="search-input" placeholder="e.g How to make omlette"></b-form-input>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-field {
  width: 100%;
  height: 40px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
}

form {
  width: 100%;
}

.button-wrapper {
  width: 15%;
  height: 100%;
}

.button-wrapper button {
  width: 100%;
  height: 100%;
  border-radius: 0px;
}

button:active {
  border: none;
  box-shadow: none;
  outline: none;
}

.input-wrapper {
  width: 100%;
  height: 100%;
}

input {
  width: 100%;
  height: 100%;
  border-radius: 0px;
}

.form-control:focus {
  border: none;
  box-shadow: none;
}

.form-control:invalid {
  border: none;
  box-shadow: none;
}

.form-control:valid {
  border: none;
  box-shadow: none;
}
</style>
