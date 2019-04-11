<template>
  <div>
    <h1>Button</h1>
    <div class="buttonTest">
      <div>
        <awesome-button>click me</awesome-button>
      </div>
      <div>
        <pink-button>click me</pink-button>
      </div>
      <div>
        <bubbly-button @click="handleClick">click me</bubbly-button>
      </div>
      <div>
        <fill-text-button>click me</fill-text-button>
      </div>
    </div>
  </div>
</template>

<script>
import awesomeButton from "./components/awesomeButton.vue";
import pinkButton from "./components/pinkButton.vue";
import bubblyButton from "./components/bubblyButton.vue";
import fillTextButton from "./components/fillTextButton.vue";
export default {
  name: "buttonTest",
  components: {
    awesomeButton,
    pinkButton,
    bubblyButton,
    fillTextButton
  },
  methods: {
    handleClick() {
      console.log(111111);
    }
  }
};
</script>
<style lang="less" scoped>
.buttonTest {
  display: flex;
  width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
  > div {
    width: 400px;
    height: 200px;
  }
}
</style>
