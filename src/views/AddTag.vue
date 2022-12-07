<template>
  <div class="addTag_blackBg">
    <div class="addTag_container">
      <form action="">
        <input
          class="addTag_tagText"
          type="text"
          placeholder="태그를 입력해주세요"
          required
        />
        <input class="addTag_addBtn" type="submit" value="추가하기" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.addTag_blackBg {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.4);
}
.addTag_container {
  margin: 100px auto 0px;
  width: 200px;
  height: 70px;
  /* background: #f0f0f0; */
  border-radius: 10px;
  opacity: 1;
}
.addTag_tagText {
  border: none;
  border-radius: 5px;
}
.addTag_addBtn {
  background: #ffffcc;
  border: 1px solid #000000;
  border-radius: 5px;
}
</style>
