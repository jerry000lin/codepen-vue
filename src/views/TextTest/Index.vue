<template>
  <div>
    <h1>Text</h1>
    <div class="textTest">
      <div>
        <pink-light>Hello World</pink-light>
      </div>
    </div>
  </div>
</template>

<script>
import pinkLight from "./components/pinkLight";
export default {
  name: "textTest",
  components: {
    pinkLight
  }
};
</script>
<style lang="less" scoped>
.textTest {
  display: flex;
  width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
  font-size: 48px;
  > div {
    flex: 1;
    width: 400px;
  }
}
</style>
