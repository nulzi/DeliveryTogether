<template>
  <div class="post_container" @click="getPost">
    <img
      :src="post.picture"
      alt=""
      class="post_food_img"
      width="50"
      height="90"
    />
    <div class="post_content">
      <div class="post_timer">
        <div class="post_timer_circle"></div>
        <!-- {{ post.time }}분 후 -->
      </div>
      <p class="post_food">{{ getTitleHead() }}</p>
      <p class="post_storename">{{ getTitleBody() }}</p>
      <div class="post_member">
        <!-- <img
            v-for="(member, index) in this.members"
            :key="index"
            class="post_member_img"
            src="../assets/member-circle-brown.png"
            alt=""
          />
          <img
            class="post_member_img"
            src="../assets/member-circle-red.png"
            alt=""
          /> -->
        {{ post.count }}/4
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post', 'tag'],
  data() {
    return {
      // members: [0, 0, 0],
    };
  },
  methods: {
    getTitleHead() {
      return this.post.title.split('-')[0];
    },
    getTitleBody() {
      return this.post.title.split('-')[1];
    },
    getPost() {
      this.$router.push({
        name: 'post',
        params: {
          tag: this.tag,
          post_id: this.post.post_id,
        },
      });
    },
  },
};
</script>

<style>
.post_container {
  margin-right: 5px;
  display: flex;
  width: 130px;
  height: 95px;
  /* left: 11px; */
  /* top: 93px; */
}
.post_food_img {
  width: 50px;
  height: 95px;
  /* left: 11px; */
  /* top: 93px; */

  border-radius: 5px;
}
.post_content {
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  flex-direction: column;

  width: 80px;
  height: 95px;
  /* left: 61px; */
  /* top: 93px; */

  background: rgb(255, 230, 155);
  border-radius: 5px;
}
.post_timer {
  align-self: end;

  /* width: 31.15px; */
  /* height: 7.45px; */
  /* left: 105.29px; */
  /* top: 96.73px; */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
.post_timer_circle {
  width: 4.93px;
  height: 4.66px;
  /* left: 97.88px; */
  /* top: 98.46px; */

  background: #30d721;
}
.post_food {
  margin-top: 12px;
  margin-left: 3px;
  /* width: 53.53px; */
  /* height: 16.76px; */
  /* left: 67.15px; */
  /* top: 116.17px; */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;

  color: #000000;
}
.post_storename {
  margin-top: 8px;
  margin-left: 3px;
  /* width: 53.53px; */
  /* height: 13.9px; */
  /* left: 66.78px; */
  /* top: 137.49px; */

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 9px;

  color: #000000;
}
.post_member {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 9px;

  color: #000000;

  margin-top: 25px;
  align-self: end;
  display: flex;
}
.post_member_img {
  width: 10px;
  height: 10px;
}
</style>
