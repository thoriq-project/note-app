<template>
  <div class="note-card">
    <div class="header-card">
      <p class="title-card">Title of the note yesh</p>
      <p class="date-card">20/12/2021</p>
    </div>
    <div class="main-card">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nihil laboriosam unde porro eos voluptatum, odit suscipit dolore ipsam libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, doloribus?</p>
    </div>
    <div class="footer-card">
      <div class="footer-left">
        <img src="../assets/pin-angle-fill.svg" alt="Pinned Note" />
      </div>
      <div class="footer-right">
        <p class="footer-type">note</p>
        <p><b-icon class="footer-icon" icon="card-text"></b-icon></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  grid-template-columns: 6fr 4fr;
  align-items: top;
  /* background-color: pink; */
}

.title-card {
  display: inline-block;
  width: 100%;
  text-align: start;
  color: var(--font-color);
  font-weight: bold;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.date-card {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  text-align: end;

  font-weight: 500;
  color: #858484;
  font-size: 0.9rem;
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

.footer-card {
  width: 100%;
  height: 17%;
  background-color: var(--main-color);
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  color: #858484;
}

.footer-right {
  display: flex;
}

.footer-type {
  font-weight: bold;
  padding-right: 3px;
}

.footer-left {
  padding-left: 10px;
}
</style>
