<template>
  <div class="search-field">
    <b-form class="d-flex align-items-center">
      <div class="button-wrapper">
        <button class="btn btn-submit" type="submit">
          <b-icon class="btn-icon" icon="search" scale="1"></b-icon>
        </button>
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
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

form {
  width: 100%;
}

.button-wrapper {
  width: 15%;
  height: 100%;
}

.button-wrapper .btn {
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background-color: #333333;
}

button:focus {
  box-shadow: none;
  border: none;
  outline: none;
}

.btn:active {
  border: 2px solid white;
}

.btn-icon {
  color: white;
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
