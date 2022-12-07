import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
// import VueCookies from 'vue-cookies'
// import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    // meta: {unauthorized: true}
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue')
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
  },
  {
    path: '/userUpdate',
    name: 'userUpdate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserUpdate.vue')
  },
  {
    path: '/post/:tag/:post_id',
    name: 'post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue')
  },
  {
    path: '/add/:src',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddTest.vue')
  },
  {
    path: '/image',
    name: 'image',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ImageTest.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// //copied
// //네비게이션 가드((뷰 라우터로 URL 접근에 대해서 처리할 수 있음)
// router.beforeEach( async(to, from, next) => { //여기서 모든 라우팅이 대기 상태가 됨
//   /**
//    * to: 이동할 url 정보가 담긴 라우터 객체
//    * from: 현재 url 정보가 담긴 라우터 객체
//    * next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
//    * next() 가 호출되기 전까지 화면 전환되지 않음
//    */
//   console.log(store.state.accessToken, store.state.refreshToken);
//   // if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') !== null){
//   //   //refreshToken은 있고 accessToken이 없을 경우 토큰 재발급 요청
//   //   await store.dispatch('refreshToken');
//   // }
//   // if (VueCookies.get('accessToken')!==null){
//   //   //accessToken이 있을 경우 진행
//   //   console.log('accessToken이 있을 경우 진행')
//   //   return next();
//   // }
//   // //둘다 없을 경우에는 여기서 요청을 너무 때려서 주석처리하고 App.uve에다가 created 훅에다가 추가함
//   // if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') === null){
//   //   // if(from.path != '/')
//   //   // return next({name: 'login'});
//   //   if(to.path === '/'){
//   //     console.log('로그인 페이지인 경우');
//   //     return next();
//   //   }
//   //   //2개 토큰이 모두 없을 경우 로그인페이지로
//   //   console.log('2개 토큰이 모두 없을 경우 로그인페이지로')
//   //   next('/');
//   // }
//   if(store.state.accessToken===null && store.state.refreshToken !== null){
//     //refreshToken은 있고 accessToken이 없을 경우 토큰 재발급 요청
//     await store.dispatch('refreshToken');
//   }
//   if (store.state.accessToken!==null){
//     //accessToken이 있을 경우 진행
//     console.log('accessToken이 있을 경우 진행')
//     return next();
//   }
//   //둘다 없을 경우에는 여기서 요청을 너무 때려서 주석처리하고 App.uve에다가 created 훅에다가 추가함
//   if(store.state.accessToken===null && store.state.refreshToken === null){
//     // if(from.path != '/')
//     // return next({name: 'login'});
//     if(to.path === '/'){
//       console.log('로그인 페이지인 경우');
//       return next();
//     }
//     //2개 토큰이 모두 없을 경우 로그인페이지로
//     console.log('2개 토큰이 모두 없을 경우 로그인페이지로')
//     next('/');
//   }
// })

export default router
