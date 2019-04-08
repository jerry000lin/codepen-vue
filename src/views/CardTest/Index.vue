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
    </div>
  </div>
</template>

<script>
import FlippingCard from "./components/FlippingCard";
export default {
  name: "cardTest",
  components: {
    FlippingCard
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
}
</style>
