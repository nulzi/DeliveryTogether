<template>
  <div class="userView_container">
    <navBar></navBar>
    <div class="userView_content">
      <div class="userView_user">
        <div id="profile" class="userView_circle"></div>
        <div class="userView_name">
          {{ this.$store.state.user.userDTO.name }}
        </div>
      </div>
    </div>
    <div
      v-for="(tag, i) in this.$store.state.user.tags"
      :key="i"
      class="userView_tag_container"
    >
      <locationTag :tag="tag.tagName"></locationTag>
      <!-- <div class="userView_member">
        <img src="../assets/user.png" alt="" width="16" height="16" />
        600명
      </div> -->
    </div>
    <div class="userView_floatingButton_container">
      <router-link class="userView_floatingButton_button" to="/userUpdate">
        <img src="../assets/pencil.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import navBar from "../components/navBar.vue";
import locationTag from "../components/locationTag.vue";

export default {
  name: "UserView",
  data() {
    return {
      profile_image: "",
    };
  },
  components: {
    navBar,
    locationTag,
  },
  methods: {
    setProfile() {
      const profile = document.getElementById("profile");
      profile.style.backgroundImage = this.$store.state.user.profile_image;
    },
  },
  mounted() {
    this.setProfile();
  },
};
</script>

<style>
.userView_container {
  min-width: 360px;
  width: 100vw;
}
.userView_user {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  /* display: flex; */
  /* align-items: center; */
  text-align: center;

  color: #000000;
}
.userView_circle {
  margin: 20px auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  width: 125px;
  height: 125px;
  /* left: 118px; */
  /* top: 70px; */

  background: #020715 no-repeat center;
  background-image: url("../assets/user.png");
  border-radius: 63px;
}
.userView_tag_container {
  margin: 20px auto 0px;
  padding: 0px 8px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 275px;
  height: 57px;
  background: rgba(241, 225, 191, 0.9);
  border-radius: 10px;
}
.userView_floatingButton_container {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.userView_floatingButton_button {
  background-color: #ffcc33;
  width: 27px;
  height: 27px;
  padding: 8px 6px 4px;
  border-radius: 15px;
}
</style>
