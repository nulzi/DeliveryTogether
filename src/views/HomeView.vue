<template>
  <div class="main">
    <img src="../assets/logo.png" alt="" />
    <NAV></NAV>
    <POST></POST>
  </div>
</template>

<script>
// @ is an alias to /src
import NAV from '../components/navBar.vue';
import POST from '../components/postContainer.vue';

export default {
  name: 'HomeView',
  components: {
    NAV,
    POST,
  },
};
</script>

<style scoped>
.main {
}
</style>
