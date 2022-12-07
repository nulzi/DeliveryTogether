<template>
  <div class="login_main">
    <img class="login_logo" src="../assets/logo.png" alt="" />
    <p class="login_title">"시켜요 같이"</p>
    <button class="login_login_button" @click="doLogin">
      <div class="login_btn_content">
        <img
          class="login_chat_img"
          src="../assets/Chat.png"
          alt=""
          width="26"
          height="26"
        />
        카카오톡으로 로그인하기
      </div></button
    ><br />
    <button @click="test1">test1</button><br />
    <button @click="test2">test2</button><br />
    <button @click="test3">test3</button><br />
    <a
      href="https://kauth.kakao.com/oauth/authorize?client_id=71e0a176033c8ff1373036d34e7a32ac&redirect_uri=http://localhost:8080/auth/kakao/callback&response_type=code"
    >
      카카오
    </a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LoginView',
  components: {},
  methods: {
    doLogin() {
      this.$store.dispatch('doLogin');
    },
    test1() {
      this.$store.dispatch('test1');
    },
    test2() {
      this.$store.dispatch('test2');
    },
    test3() {
      this.$store.dispatch('test3');
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.login_main {
  text-align: center;
  /* frame */

  /* position: relative; */
  min-width: 360px;
  width: 100vw;
  height: 640px;

  background: #f9f9f9;
  border-radius: 8px;
}
.login_logo {
  /* logo */

  /* position: absolute; */
  width: 176px;
  height: 218px;
  /* left: 92px; */
  margin-top: 102px;
  /* top: 102px; */
}
.login_title {
  /* “시켜요 같이” */

  /* position: absolute; */
  /* width: 274px; */
  height: 70px;
  /* left: 43px; */
  /* top: 367px; */
  margin-top: 47px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 50px;
  /* display: flex; */
  /* align-items: center; */
  text-align: center;

  color: #ff9900;
}
.login_login_button {
  /* position: absolute; */
  width: 298.1px;
  height: 40.48px;
  /* left: 31px; */
  /* top: 502px; */
  margin-top: 65px;
  background: #ffea32;
  border-radius: 5px;
}
.login_btn_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 73px 0px 8px;
}
.login_chat_img {
  border-right: 1px solid gray;
  padding-right: 6.5px;
}
</style>
