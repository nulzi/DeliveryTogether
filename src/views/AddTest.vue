<template>
  <div class="addView_container">
    <navBar></navBar>
    <div class="addView_content">
      제목<br />
      <input
        class="addView_title"
        type="text"
        id="title"
        placeholder="음식-가게이름"
        required
      />
      태그<br />
      <select class="addView_tag" id="tag" name="tag-select">
        <option v-for="(tag, i) in tags" :key="i" :value="tag">
          {{ tag }}
        </option>
      </select>
      <br />
      설명<br />
      <input
        class="addView_desc"
        type="text"
        id="desc"
        placeholder="간단한 설명 부탁드리겠습니다"
        required
      /><br />
      <router-link class="addView_add_image" to="/image"
        >선택된 이미지</router-link
      ><br />
      <img class="addView_image" :src="this.$route.params.src" alt="" /><br />
      마감 시간 설정<br />
      <select class="addView_tag" id="time" name="time-select">
        <option v-for="(time, i) in times" :key="i" :value="time">
          {{ time }}
        </option>
      </select>
      <br />
      함께해요 정보<br />
      <input
        class="addView_chat"
        type="text"
        id="chatting"
        placeholder="오픈채팅방 또는 함께해요의 url을 입력해주세요"
        required
      />
      <div class="addView_isFull">{{ this.message }}</div>
      <input
        class="addView_button"
        type="submit"
        @click="addPost"
        value="추가하기"
      />
    </div>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';

export default {
  name: 'AddView',
  components: {
    navBar,
  },
  data() {
    return {
      tags: ['1기숙사', '2기숙사', 'E동', '벙커'],
      times: ['5분', '10분', '20분', '30분'],
      isFull: 0,
      message: '',
    };
  },
  methods: {
    addPost() {
      console.log('addPost()');
      const title = document.getElementById('title').value;
      const tag = document.getElementById('tag').value;
      const desc = document.getElementById('desc').value;
      const image = this.$route.params.src;
      const chatting = document.getElementById('chatting').value;
      const time = document.getElementById('time').value;

      const data = JSON.stringify({
        title: title,
        tag: tag,
        postdescribe: desc,
        picture: image,
        storeUrl: chatting,
        limitMinute: time,
      });
      if (
        title !== '' &&
        tag !== '' &&
        desc !== '' &&
        image !== '' &&
        time !== '' &&
        chatting !== ''
      ) {
        if (title.split('-').length !== 2) {
          this.message = '제목을 "음식-가게이름"으로 작성해주세요.';
          return;
        }
        this.isFull = 1;
        this.$store.dispatch('addPost', data);
      } else {
        console.log('모든 칸을 다 채워주세요');
        this.message = '모든 칸을 다 채워주세요';
      }
    },
  },
};
</script>

<style>
.addView_container {
  min-width: 360px;
  width: 100vw;
}
.addView_content {
  min-width: 340px;
  width: 30vw;
  margin: 15px auto;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
}
.addView_title {
  padding: 0px 8px;
  margin: 5px 0px 15px;
  border: none;
  /* position: absolute; */
  width: 320px;
  height: 30.38px;
  /* left: 12px; */
  /* top: 93px; */

  background: #f2efef;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #969191;
}
.addView_tag {
  margin: 5px 7px 15px 0px;
  border: none;
  /* position: absolute; */
  /* top: 151.85px; */
  /* left: 103.93px; */
  /* width: 81.7px; */
  height: 28.06px;

  background: #ffffcc;
  border-radius: 10px;
}
.addView_clicked {
  border: 2px solid #ffcc33;
}
.addView_desc {
  padding: 0px 8px;
  margin: 5px 0px 15px;
  border: none;
  /* position: absolute; */
  /* left: 12px; */
  /* top: 213px; */
  width: 320px;
  height: 136.35px;

  background: rgba(255, 204, 51, 0.4);
  border-radius: 20px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #7e7878;
}
.addView_emptybox {
  height: 15px;
}
.addView_add_image {
  margin-bottom: 5px;
  text-decoration: none;
  color: black;
  position: relative;
}
.addView_add_image::after {
  content: '';
  height: 0;
  width: 0;
  position: absolute;
  top: 5px;
  left: 105px;
  border: 6px solid transparent;
  border-right-width: 0;
  border-left-color: black;
}
.addView_image {
  margin: 5px 0px 15px;
  width: 290px;
  height: 195px;
  border-radius: 5px;
}
.addView_time,
.addView_chat {
  padding: 0px 8px;
  margin: 5px 0px 15px;
  border: none;
  /* position: absolute; */
  /* top: 444px; */
  /* left: 12px; */
  width: 320px;
  height: 30.38px;

  background: #f2efef;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #969191;
}
.addView_isFull {
  color: red;
  margin-bottom: 15px;
  text-align: center;
}
.addView_button {
  display: block;
  margin: 0 auto;
  box-sizing: border-box;

  /* position: absolute; */
  /* top: 599px; */
  /* left: 31px; */
  width: 298.1px;
  height: 31.48px;

  background: #ffffcc;
  border: 1px solid #000000;
  border-radius: 10px;
}
</style>
