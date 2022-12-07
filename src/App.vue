<template>
  <router-view />
  <!-- {{ this.setData() }} -->
  <!-- {{ data.metaPostDTOS }} -->
  <!-- {{ $store.state.mainPost }} -->
  <!-- {{ $store.state.post }} -->
</template>

<script>
import data from "./assets/data.json";
export default {
  data() {
    return {
      data,
    };
  },
  methods: {
    setData() {
      let post = [];
      let posts = [];
      console.log(Object.keys(this.data.metaPostDTOS));
      for (let i in Object.keys(this.data)) {
        console.log(i);
      }
      // console.log(this.data);

      for (let i in Object.keys(this.data.metaPostDTOS)) {
        // keys: 0, 1
        for (let j in this.data.metaPostDTOS[i].postTagSearchDTOS.content) {
          // j :

          posts.push(this.data.metaPostDTOS[i].postTagSearchDTOS.content[j]);
        }
        post.push({
          tag: this.data.metaPostDTOS[i].tagName,
          posts: posts,
        });
      }
      this.$store.commit("setMainPost", post);
    },
  },
  //copied
  created() {
    // console.log('app.vue created()');
    // //메인 컴포넌트를 렌더링하면서 토큰체크
    // let token = this.$store.getters.getToken;
    // if (token.access == null && token.refresh == null) {
    //   //다 없으면 로그인 페이지로
    //   //이미 로그인 페이지가 떠있는 상태에서 새로 고침하면 중복 에러 떠서 이렇게 처리함
    //   this.$router.push({ name: 'login' }).catch(() => {});
    // }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
