<template>
  <div class="postview_container">
    <navBar></navBar>
    <div class="postview_info">
      <div class="postview_title_container">
        <div class="postview_title">{{ this.$store.state.post.title }}</div>
        <!-- <div class="postview_writer">작성자: {{ post.writer }}</div> -->
      </div>
      <hr />
      <div class="postview_content">
        {{ this.$store.state.post.postdescribe }}
      </div>
      <img
        class="postview_food_img"
        :src="this.$store.state.post.picture"
        alt=""
      />
      <div class="postview_detail_container">
        <!-- <div class="postview_detail">
          가게 정보
          <a class="postview_info_url" href="">{{ post.restaurant }}</a>
        </div> -->
        <div class="postview_detail">
          채팅방 정보
          <a class="postview_info_url" href="">{{
            this.$store.state.post.storeUrl
          }}</a>
        </div>
        <div class="postview_detail">
          모집 인원
          <div class="postview_member_img_container">
            <!-- <img
              v-for="(member, index) in this.members"
              :key="index"
              class="postview_member_img"
              src="../assets/member-circle-brown.png"
              alt=""
            />
            <img
              class="postview_member_img"
              src="../assets/member-circle-red.png"
              alt=""
            /> -->
            {{ this.$store.state.post.countNum }}/4 명
          </div>
        </div>
      </div>
      <button
        class="postview_button"
        @click="postTogether(this.$store.state.post.storeUrl)"
      >
        <!-- <a :href="post.chat"> -->
        같이하기
        <!-- </a> -->
      </button>
    </div>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';

export default {
  name: 'PostView',
  components: {
    navBar,
  },
  data() {
    return {
      // members: [0, 0, 0],
      // post: {},
    };
  },
  methods: {
    // setPost() {
    //   for (const post of this.$store.state.post) {
    //     if (post.tag == this.$route.params.tag) {
    //       this.post = post.posts.find(
    //         (element) => element.post_id == this.$route.params.post_id
    //       );
    //     }
    //   }
    // },
    postTogether(chatUrl) {
      this.$store.dispatch('postTogether', chatUrl);
    },
  },
  created() {
    // this.setPost();
  },
};
</script>

<style>
.postview_container {
  min-width: 360px;
  width: 100vw;
}
.postview_info {
  padding: 14px 10px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.postview_title_container {
  display: flex;
  justify-content: space-between;
  height: 33px;
}
.postview_detail_container {
  display: flex;
  flex-direction: column;
  margin: 100px 0px 0px;
}
.postview_detail {
  margin: 5px 0px 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #000000;
}
.postview_info_url {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: right;
  text-decoration-line: underline;

  color: #201801;
}
.postview_button {
  width: 68px;
  height: 30px;
  background: #ffffcc;
  border: 1px solid #000000;
  border-radius: 10px;
}
.postview_title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #000000;
}
.postview_writer {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.postview_content {
  margin: 20px 0px 15px;
  width: 315px;
  align-self: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;
}
.postview_button {
  align-self: end;
}
.postview_food_img {
  width: 290px;
  height: 190px;
  align-self: center;
  border-radius: 5px;
}
</style>
