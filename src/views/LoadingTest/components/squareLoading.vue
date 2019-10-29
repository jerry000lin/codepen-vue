<template>
  <div class="square-loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.square-loading {
  position: relative;
  height: 400px;
  @size: 48px;
  @animation-length: 3s;
  @animation-divider: 12;
  @timing-function: ease-in-out;

  @keyframes high-jump {
    0% {
      top: 50%;
    }
    50% {
      top: calc(50% - 200px);
    }
    100% {
      top: 50%;
    }
  }
  @keyframes low-jump {
    0% {
      top: 50%;
    }
    5% {
      top: calc(50% - 100px);
    }
    25% {
      top: 50%;
    }
    100% {
      top: 50%;
    }
  }

  span {
    position: absolute;
    top: 50%;
    display: block;
    width: @size;
    height: @size;
    background-color: #0ef;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

    &::after {
      width: @size;
      height: @size;
      content: "";
      background-color: white;
      display: block;
      clip-path: polygon(50% 0%, 100% 25%, 50% 50%, 0% 25%);
    }
  }
  span:nth-child(1) {
    // top
    transform: translate(0px, -30px);
    animation: @animation-length @timing-function
      (3 * (@animation-length / @animation-divider)) infinite low-jump;
  }
  span:nth-child(2) {
    // top-right
    transform: translate(25px, -15px);
    animation: @animation-length @timing-function
      (4 * (@animation-length / @animation-divider)) infinite low-jump;
  }
  span:nth-child(3) {
    // top-left
    transform: translate(-25px, -15px);
    animation: @animation-length @timing-function
      (2 * (@animation-length / @animation-divider)) infinite low-jump;
  }
  span:nth-child(4) {
    // middle
    animation: @animation-length @timing-function infinite high-jump;
  }
  span:nth-child(5) {
    // left
    transform: translate(-50px, 0px);
    animation: @animation-length @timing-function
      (1 * (@animation-length / @animation-divider)) infinite low-jump;
  }
  span:nth-child(6) {
    // right
    transform: translate(50px, 0px);
    animation: @animation-length @timing-function
      (5 * (@animation-length / @animation-divider)) infinite low-jump;
  }
  span:nth-child(7) {
    // bottom-right
    transform: translate(25px, 15px);
    animation: @animation-length @timing-function
      (6 * (@animation-length / @animation-divider)) infinite low-jump;
  }
  span:nth-child(8) {
    // bottom-left
    transform: translate(-25px, 15px);
    animation: @animation-length @timing-function
      (8 * (@animation-length / @animation-divider)) infinite low-jump;
  }
  span:nth-child(9) {
    // bottom
    transform: translate(0px, 30px);
    animation: @animation-length @timing-function
      (7 * (@animation-length / @animation-divider)) infinite low-jump;
  }
}
</style>
