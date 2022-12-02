<template>
  <div class="userView_container">
    <navBar></navBar>
    <div class="userView_content">
      <div class="userView_user">
        <div class="userView_circle">
          <img src="../assets/user.png" alt="" />
        </div>
        <div class="userView_name">김태영</div>
      </div>
    </div>
    <div class="userView_tag_container">
      <locationTag></locationTag>
      <div class="userView_member">
        <img src="../assets/user.png" alt="" width="16" height="16" />
        600명
      </div>
    </div>
    <div class="userView_floatingButton_container">
      <router-link class="userView_floatingButton_button" to="/user">
        <img src="../assets/pencil.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';
import locationTag from '../components/locationTag.vue';

export default {
  name: 'user',
  components: {
    navBar,
    locationTag,
  },
};
</script>

<style>
.userView_user {
  font-family: 'Inter';
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

  background: #020715;
  border-radius: 63px;
}
.userView_tag_container {
  margin: 30px auto 0px;
  padding: 0px 8px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 275px;
  height: 57px;
  background: rgba(255, 255, 204, 0.9);
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
