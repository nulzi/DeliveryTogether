<template>
  <div class="mainView_container">
    <navBar></navBar>
    <div
      v-for="(total, i) in $store.state.mainPost"
      :key="i"
      class="mainView_post_container"
    >
      <locationTag :tag="total.tag"></locationTag>
      <div class="mainView_post_content">
        <div class="mainView_post_content_row">
          <post
            v-for="(post, j) in total.posts"
            :key="j"
            :post="post"
            :tag="total.tag"
          >
          </post>
        </div>
        <!-- <div class="mainView_post_content_row">
          <post
            v-for="(post, j) in total.posts"
            :key="j"
            :post="post"
            :tag="total.tag"
          ></post>
        </div> -->
      </div>
    </div>
    <div class="mainView_floatingButton_container" @click="getFood">
      <!-- <router-link to="/image"> -->
      <img
        class="mainView_floatingButton_button"
        src="../assets/add-button.png"
        alt=""
      />
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import navBar from "../components/navBar.vue";
import locationTag from "../components/locationTag.vue";
import post from "../components/post.vue";

export default {
  name: "MainView",
  components: {
    navBar,
    locationTag,
    post,
  },
  methods: {
    getFood() {
      this.$store.dispatch("getFoods");
    },
  },
  created() {
    console.log("main created()");
    this.$store.dispatch("getMain", this.$route.params.tag);
  },
};
</script>

<style>
.mainView_post_container {
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
}
.mainView_post_content {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  border-radius: 5px;
}
.mainView_post_content_row {
  display: flex;
  margin-bottom: 5px;
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
