<template>
  <div>
    <h1>Text</h1>
    <div class="textTest">
      <div>
        <pink-light>Hello World</pink-light>
      </div>
      <div class="black-box">
        <hover-shine>Shine Bright Like a Diamond </hover-shine>
      </div>
    </div>
  </div>
</template>

<script>
import pinkLight from "./components/pinkLight";
import hoverShine from "./components/hoverShine";
export default {
  name: "textTest",
  components: {
    pinkLight,
    hoverShine
  }
};
</script>
<style lang="less" scoped>
.textTest {
  font-family: "Dosis", sans-serif;
  display: flex;
  width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
  font-size: 48px;
  > div {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
  .black-box {
    background-color: #333;
  }
}
</style>
