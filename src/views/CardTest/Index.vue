<template>
  <div>
    <h1>Card</h1>
    <div class="cardTest">
      <div>
        <flipping-card>
          <template v-slot:front>
            <h2>
              前
            </h2>
          </template>
          <template v-slot:back>
            <h2>
              后
            </h2>
          </template>
        </flipping-card>
      </div>

      <div class="turnning-card">
        <turnning-card>
          hello
        </turnning-card>
      </div>
    </div>
  </div>
</template>

<script>
import flippingCard from "./components/flippingCard";
import turnningCard from "./components/turnningCard";
export default {
  name: "cardTest",
  components: {
    flippingCard,
    turnningCard
  }
};
</script>
<style lang="less" scoped>
.cardTest {
  margin: 20px auto;
  > div {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .turnning-card {
    color: #fff;
  }
}
</style>
