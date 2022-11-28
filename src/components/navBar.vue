<template>
  <div class="nav_container">
    <nav class="nav_container">
      <div class="home_btn">
        <router-link to="/"
          ><img src="../assets/home.png" alt=""
        /></router-link>
      </div>
      <div class="user_btn">
        <router-link to="/"
          ><img src="../assets/user-circle.png" alt=""
        /></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav_container {
  display: flex;
  background-color: #ffcc33;
}
.user_btn {
  display: flex;
  margin-left: auto;
}
</style>
