<template>
  <div class="userView_container">
    <navBar></navBar>
    <div class="userView_content">
      <div class="userView_user">
        <div id="profile" class="userView_circle"></div>
        <div class="userView_name">{{ this.$store.state.user.nickname }}</div>
      </div>
    </div>
    <div
      v-for="(tag, i) in this.$store.state.user.tags"
      :key="i"
      class="userView_tag_container"
    >
      <locationTag :tag="tag" isUpdate="1"></locationTag>
    </div>
    <div class="userUpdate_addTag">
      <select class="userUpdate_addBtn" id="addTag">
        <option value="none">==태그 선택==</option>
        <option value="1기숙사">1기숙사</option>
        <option value="2기숙사">2기숙사</option>
        <option value="E동">E동</option>
        <option value="벙커">벙커</option>
      </select>
      <div class="userUpdate_add" @click="addTag">
        추가<img
          class="userUpdate_addImg"
          src="../assets/add-button.png"
          alt=""
        />
      </div>
    </div>
    <button class="userUpdate_addBtn userUpdate_endBtn" @click="getUser">
      수정 완료
    </button>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue';
import locationTag from '../components/locationTag.vue';

export default {
  name: 'UserView',
  data() {
    return {
      profile_image: '',
    };
  },
  components: {
    navBar,
    locationTag,
  },
  methods: {
    setProfile() {
      const profile = document.getElementById('profile');
      profile.style.backgroundImage = this.$store.state.user.profile_image;
    },
    addTag() {
      const tag = document.getElementById('addTag').value;
      // console.log(typeof tag);
      if (tag !== 'none') this.$store.dispatch('addTag', tag);
    },
    getUser() {
      this.$store.dispatch('getUser');
    },
  },
  mounted() {
    this.setProfile();
  },
};
</script>

<style>
.userView_user {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  /* display: flex; */
  /* align-items: center; */
  text-align: center;

  color: #000000;
}
.userView_circle {
  margin: 20px auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  width: 125px;
  height: 125px;
  /* left: 118px; */
  /* top: 70px; */

  background: #020715 no-repeat center;
  background-image: url('../assets/user.png');
  border-radius: 63px;
}
.userView_tag_container {
  margin: 20px auto 0px;
  padding: 0px 8px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 275px;
  height: 57px;
  background: rgba(241, 225, 191, 0.9);
  border-radius: 10px;
}
.userUpdate_addTag {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: rgba(98, 59, 42, 0.8);
}
.userUpdate_addBtn {
  display: block;
  margin-right: 10px;
  width: 125px;
  height: 37px;
  background: rgba(241, 225, 191, 0.9);
  border-radius: 10px;
  border: none;
  line-height: 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: rgba(98, 59, 42, 0.8);
}
.userUpdate_add {
  display: flex;
  align-items: center;
  justify-content: center;
}
.userUpdate_addImg {
  width: 27px;
  height: 27px;
}
.userUpdate_endBtn {
  margin: 20px auto 0px;
}
.userUpdate_endBtn a {
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: rgba(98, 59, 42, 0.8);
}
</style>
