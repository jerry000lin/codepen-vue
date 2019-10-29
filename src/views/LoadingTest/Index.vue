<template>
  <div>
    <h1>Loading</h1>
    <div class="loadingTest">
      <div>
        <float-loading />
      </div>
      <div style="background-color:#000;" v-crius-loading="true">
        <!-- <circle-loading /> -->
      </div>
      <div>
        <write-loading />
      </div>
      <div style="background-color:#e74c3c;">
        <fan-loading />
      </div>
      <div style="background-color: #000;">
        <square-loading />
      </div>
    </div>
  </div>
</template>

<script>
import floatLoading from "./components/floatLoading.vue";
import circleLoading from "./components/circleLoading.vue";
import writeLoading from "./components/writeLoading.vue";
import fanLoading from "./components/fanLoading.vue";
import squareLoading from "./components/squareLoading.vue";
export default {
  name: "loadingTest",
  components: {
    floatLoading,
    circleLoading,
    writeLoading,
    fanLoading,
    squareLoading
  }
};
</script>
<style lang="less" scoped>
.loadingTest {
  font-family: "Dosis", sans-serif;
  display: flex;
  width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
  font-size: 48px;
  > div {
    min-height: 200px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .black-box {
    background-color: #333;
  }
}
</style>
