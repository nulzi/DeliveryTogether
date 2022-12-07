<template>
  <nav class="navBar_container">
    <!-- <router-link to="/main"> -->
    <img
      class="navBar_home"
      @click="getMain"
      src="../assets/home.png"
      alt="home_icon"
    />
    <!-- </router-link> -->
    <!-- <router-link to="/user"> -->
    <img
      class="navBar_user"
      @click="getUser"
      src="../assets/user-circle.png"
      alt="home_icon"
    />
    <!-- </router-link> -->
  </nav>
</template>

<script>
export default {
  methods: {
    getMain() {
      this.$router.push({ name: "post-amu" });
    },
    getUser() {
      this.$store.dispatch("getUser");
    },
  },
};
</script>

<style scoped>
.navBar_container {
  min-width: 360px;
  min-height: 50px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background: #ffcc33;
  padding: 8px 10px 0px 8px;
  /* padding: 2.5vw 1.9vw; */
  box-sizing: border-box;
  border-radius: 8px;
}
.navBar_home {
  width: 32.5px;
  height: 32.5px;
}
.navBar_user {
  width: 33.5px;
  height: 33.5px;
}
</style>
