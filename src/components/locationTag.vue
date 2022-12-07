<template>
  <div class="locationTag_container">
    <div class="locationTag_tag">
      <img src="../assets/hashtag.png" alt="" />{{ tag.tagName }}
    </div>
    <div class="locationTag_btn">
      <img
        v-if="isUpdate == 1"
        class="locationTag_deleteBtn"
        @click="deleteTag(tag)"
        src="../assets/add-button.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['tag', 'isUpdate'],
  methods: {
    deleteTag(tag) {
      this.$store.dispatch('deleteTag', tag);
    },
  },
};
</script>

<style scoped>
.locationTag_container {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  margin: 14px 0px 10px 8px;
  color: rgba(98, 59, 42, 0.8);
  width: 100%;
  justify-content: space-between;
}
.locationTag_deleteBtn {
  transform: rotate(45deg);
}
</style>
