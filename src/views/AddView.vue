<template>
  <div class="addView_container">
    <navBar></navBar>
    <div class="addView_content">
      <form action="">
        제목<br />
        <input
          class="addView_title"
          type="text"
          name="title"
          placeholder="음식-가게이름"
          required
        />
        태그<br />
        <select class="addView_tag" name="tags" id="tag-select">
          <option v-for="(tag, i) in tags" :key="i" :value="tag">
            {{ tag }}
          </option>
        </select>
        <br />
        설명<br />
        <input
          class="addView_desc"
          type="text"
          name="desc"
          placeholder="간단한 설명 부탁드리겠습니다"
          required
        /><br />
        <router-link class="addView_add_image" to="/image"
          >선택된 이미지</router-link
        ><br />
        <img class="addView_image" :src="this.$route.params.src" alt="" /><br />
        가게 정보<br />
        <input
          class="addView_restaurant"
          type="text"
          name="restaurant"
          placeholder="가게 이름이나 가게 url을 입력해주세요"
          required
        />
        채팅방 정보<br />
        <input
          class="addView_chat"
          type="text"
          name="chatting"
          placeholder="오픈채팅방의 url을 입력해주세요"
          required
        />
        <input class="addView_button" type="submit" value="추가하기" />
      </form>
    </div>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';

export default {
  name: 'add',
  components: {
    navBar,
  },
  data() {
    return {
      tags: ['제 1기숙사', '제 2기숙사'],
    };
  },
};
</script>

<style>
.addView_content {
  padding: 20px 12px 10px;

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
}
.addView_add_image::after {
  content: '';
  height: 0;
  width: 0;
  position: absolute;
  top: 403px;
  left: 116px;
  border: 6px solid transparent;
  border-right-width: 0;
  border-left-color: black;
}
.addView_image {
  margin: 5px 0px 15px;
}
.addView_restaurant,
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
