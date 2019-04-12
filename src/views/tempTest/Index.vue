<template>
  <div>
    <h1>Text</h1>
    <div class="tempTest">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tempTest",
  components: {}
};
</script>
<style lang="less" scoped>
.tempTest {
  display: flex;
  width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
  font-size: 48px;
  > div {
    width: 100%;
  }
}
</style>
