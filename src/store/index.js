import { createStore } from "vuex";
import router from "../router/index";
// import axios from '../axios/index'
import axios from "axios";
// import VueCookies from 'vue-cookies';

const store = createStore({
  state: {
    loginUser: {},
    user: {},
    mainPost: [],
    post: {},
    // foods:[
    //   {
    //     type:'치킨',
    //     images:[
    //       require('@/assets/chicken-big.png'),
    //       require('../assets/chicken1.png'),
    //       require('../assets/chicken1.png'),
    //       require('../assets/chicken1.png'),
    //       require('../assets/chicken1.png'),]
    //   },
    //   {
    //     type: '파스타',
    //     images: [
    //       require('../assets/pasta1.png'),
    //       require('../assets/pasta1.png'),
    //       require('../assets/pasta1.png'),
    //       require('../assets/pasta1.png'),
    //       require('../assets/pasta1.png'),
    //     ],
    //   },],
    foods_test: [
      require("@/assets/chicken-big.png"),
      require("@/assets/foods/food00.jpg"),
      require("@/assets/foods/food01.jpg"),
      require("@/assets/foods/food02.jpg"),
      require("@/assets/foods/food03.jpg"),
      require("@/assets/foods/food04.jpg"),
      require("@/assets/foods/food05.jpg"),
      require("@/assets/foods/food06.jpg"),
      require("@/assets/foods/food07.jpg"),
      require("@/assets/foods/food08.jpg"),
      require("@/assets/foods/food09.jpg"),
      require("@/assets/foods/food10.jpg"),
      require("@/assets/foods/food11.jpg"),
      require("@/assets/foods/food12.jpg"),
      require("@/assets/foods/food13.jpg"),
      require("@/assets/foods/food14.jpg"),
      require("@/assets/foods/food15.jpg"),
      require("@/assets/foods/food16.jpg"),
      require("@/assets/foods/food17.jpg"),
      require("@/assets/foods/food18.jpg"),
      require("@/assets/foods/food19.jpg"),
      require("@/assets/foods/food20.jpg"),
    ],
  },
  mutations: {
    setAccessToken(state) {
      state.accessToken = "access";
    },
    setUser(state, user) {
      console.log(`setUser()`);
      state.user = user;
    },
    setLoginUser(state, user) {
      console.log(`setLoginUser()`);
      state.loginUser = user;
    },
    setMainPost(state, post) {
      console.log(`setMainPost()`);
      state.mainPost = post;
    },
    setPost(state, post) {
      console.log(`setPost()`);
      state.post = post;
    },
  },
  actions: {
    getUser(context) {
      //유저 페이지 넘어갈 때
      //유저 정보 받아오기
      console.log(`getUser()`);
      //쿠키 처리 필요
      axios
        .get(`http://localhost:8080/post/user/${context.state.loginUser.id}`)
        .then((response) => {
          context.commit("setUser", response.data);
          router.push({ name: "user" });
        })
        .catch((e) => {
          console.log("error getUser()");
          console.log(e);
        });
    },
    getMain(context, data) {
      //게시글 전체 정보 받아오기
      console.log(`getMain()`);
      axios
        .get(`http://localhost:8080/post/${data}`)
        .then((response) => {
          console.log("게시글 불러오기 성공");
          console.log(`http://localhost:8080/post/${data}`);
          console.log(response.data);
          context.commit("setLoginUser", {
            id: response.data.userId,
            token: response.data.access_token,
          });
          let post = [];
          let posts = [];

          for (let i in Object.keys(response.data.metaPostDTOS)) {
            // i: 0, 1
            for (let j in response.data.metaPostDTOS[i].postTagSearchDTOS
              .content) {
              // j : contents length
              posts.push(
                response.data.metaPostDTOS[i].postTagSearchDTOS.content[j]
              );
            }
            post.push({
              tag: response.data.metaPostDTOS[i].tagName,
              posts: posts,
            });
          }
          console.log(post);
          context.commit("setMainPost", post);
        })
        .catch((e) => console.log("게시글 불러오기 실패", e));
    },
    getPost(context, id) {
      //게시글 정보 받아오기
      console.log(`getMain()`);
      axios
        .get(`http://localhost:8080/post/post/${id}`)
        .then((response) => {
          console.log("게시글 불러오기 성공");
          context.commit("setPost", response.data);
          // router.push({ name: "post" });
        })
        .catch((e) => console.log("게시글 불러오기 실패", e));
    },
    getFoods() {
      //게시글 작성 전 이미지 선택
      console.log(`getFoods()`);
      // context.commit('setFoods');
      router.push({ name: "image" });
    },
    addPost(context, data) {
      //post add
      console.log(`addPost()`);
      console.log(data);
      axios
        .post("http://localhost:8080/post/create", data)
        .then((response) => {
          console.log("게시글 추가 요청");
          console.log(response);
          this.dispatch("getPost");
        })
        .catch((e) => console.log("게시글 추가 요청 실패", e));
      router.push({ name: "main" });
    },
    postTogether(context, chatUrl) {
      //join delivery(사람 수 증가)
      console.log(`getTogether()`);
      // axios.get('').then((response)=>{
      //   console.log('같이하기 성공');
      //   console.log(response);
      //   //해당 페이지로 이동
      // }).catch((e)=>console.log('같이하기 실패',e));
      window.location.href = chatUrl;
    },
    deleteTag(context, tag) {
      //tag 삭제
      console.log(tag);
      for (let i in this.state.user.tags) {
        if (this.state.user.tags[i] === tag) {
          this.state.user.tags = this.state.user.tags.filter(
            (el) => el !== tag
          );
          axios
            .get(`http://localhost:8080/post/user/sub/delete/${tag.id}`, {
              transformRequest: [
                (data, headers) => {
                  delete headers.common["X-Requested-With"];
                  return data;
                },
              ],
            })
            .then((response) => {
              console.log("태그 삭제 완료");
              console.log(response);
            })
            .catch((e) => {
              console.log("태그 삭제 실패");
              console.log(e);
            });
        } else console.log("없는 태그 삭제 불가");
      }
    },
    addTag(context, tag) {
      //태그 추가
      if (!this.state.user.tags.includes(tag)) {
        //새로운 태그인 경우
        this.state.user.tags.push(tag);
        axios
          .post(
            `http://localhost:8080/post/user/sub/add?userId=${this.state.loginUser.userId}&tagName=${tag.tagName}`,
            tag
          )
          .then((response) => {
            console.log("태그추가 성공");
            console.log(response);
          })
          .catch((e) => {
            console.log("태그추가 실패");
            console.log(e);
          });
      } else console.log("같은 태그가 존재합니다");
    },
  },
});

export default store;
