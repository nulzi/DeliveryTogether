<template>
  <div class="mainView_container">
    <navBar></navBar>
    <locationTag></locationTag>
    <div class="mainView_post_container">
      <router-link to="/post">
        <post></post>
      </router-link>
    </div>
    <div class="mainView_floatingButton_container">
      <router-link to="/image">
        <img
          class="mainView_floatingButton_button"
          src="../assets/add-button.png"
          alt=""
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';
import locationTag from '../components/locationTag.vue';
import post from '../components/post.vue';

export default {
  name: 'main',
  components: {
    navBar,
    locationTag,
    post,
  },
};
</script>

<style>
.mainView_post_container {
  margin-left: 12px;
}

.mainView_floatingButton_container {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.mainView_floatingButton_button {
  background-color: #ffcc33;
  width: 27px;
  height: 27px;
  border-radius: 14px;
}
</style>
