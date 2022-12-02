<template>
  <div class="imageView_container">
    <navBar></navBar>
    <p class="imageView_desc">이미지를 클릭하면 다음으로 넘어갑니다.</p>
    <div class="imageView_content" v-for="(food, i) in this.foods" :key="i">
      <div class="imageView_food">{{ food.type }}</div>
      <div class="imageView_images">
        <img
          class="imageView_image"
          v-for="(url, j) in food.url"
          :key="j"
          :src="url"
          alt=""
          @click="nextPage(url)"
        />
      </div>
    </div>
    <!-- <div class="imageView_content">
      <div class="imageView_food">파스타</div>
      <div class="imageView_images">
        <img src="../assets/pasta1.png" alt="" />
      </div>
    </div> -->
    <!-- <router-link
      class="imageView_button"
      :to="{ name: 'add', params: { src: this.food } }"
      >선택하기</router-link
    > -->
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';

export default {
  name: 'image',
  components: {
    navBar,
  },
  data() {
    return {
      foods: [
        {
          type: '치킨',
          url: [
            require('../assets/chicken1.png'),
            require('../assets/chicken1.png'),
            require('../assets/chicken1.png'),
            require('../assets/chicken1.png'),
            require('../assets/chicken1.png'),
          ],
        },
        {
          type: '파스타',
          url: [
            require('../assets/pasta1.png'),
            require('../assets/pasta1.png'),
            require('../assets/pasta1.png'),
            require('../assets/pasta1.png'),
            require('../assets/pasta1.png'),
          ],
        },
      ],
    };
  },
  methods: {
    nextPage(url) {
      this.$router.push({ name: 'add', params: { src: url } });
    },
  },
};
</script>

<style>
.imageView_desc {
  margin-top: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #969191;
}
.imageView_content {
  margin: 15px 10px 10px;
}
.imageView_food {
  padding: 2px 0px;
  height: 22.46px;

  background: #ffedb8;
  border-radius: 10px;
  margin-bottom: 10px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
}
.imageView_clicked {
  border: 3px solid #159ce8;
  border-radius: 5px;
}
.imageView_button {
  text-decoration: none;
  /* display: block;
  margin: 0 auto;
  box-sizing: border-box; */

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  /* top: 599px; */
  /* left: 31px; */
  width: 298.1px;
  height: 31.48px;

  background: #ffffcc;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
}
.imageView_images {
  display: flex;
  justify-content: center;
}
.imageView_image {
  margin: 0px 5px;
}
</style>
