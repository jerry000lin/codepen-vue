<template>
  <div>
    <h1>underline</h1>
    <div class="tempTest">
      <div>
        <color-underline>
          Hover me
        </color-underline>
      </div>
    </div>
  </div>
</template>
<script>
import colorUnderline from "./components/colorUnderline";
export default {
  name: "tempTest",
  components: {
    colorUnderline
  }
};
</script>
<style lang="less" scoped>
.tempTest {
  display: flex;
  width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
  font-size: 32px;
  > div {
    width: 100%;
  }
}
</style>
