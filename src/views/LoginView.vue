<template>
  <div class="home_main">
    <img class="home_logo" src="../assets/logo.png" alt="" />
    <p class="home_title">"시켜요 같이"</p>
    <button class="home_login_button">
      <div class="home_btn_content">
        <img
          class="home_chat_img"
          src="../assets/Chat.png"
          alt=""
          width="26"
          height="26"
        />
        카카오톡으로 로그인하기
      </div>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.home_main {
  text-align: center;
  /* frame */

  /* position: relative; */
  width: 360px;
  height: 640px;

  background: #f9f9f9;
  border-radius: 8px;
}
.home_logo {
  /* logo */

  /* position: absolute; */
  width: 176px;
  height: 218px;
  /* left: 92px; */
  margin-top: 102px;
  /* top: 102px; */
}
.home_title {
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
.home_login_button {
  /* position: absolute; */
  width: 298.1px;
  height: 40.48px;
  /* left: 31px; */
  /* top: 502px; */
  margin-top: 65px;
  background: #ffea32;
  border-radius: 5px;
}
.home_btn_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 73px 0px 8px;
}
.home_chat_img {
  border-right: 1px solid gray;
  padding-right: 6.5px;
}
</style>
