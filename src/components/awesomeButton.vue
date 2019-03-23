<template>
  <button class="awesome-button" @mousemove="mousemoveHandle">
    <span class="colorful" :style="{ left: `${x}px`, top: `${y}px` }"></span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  methods: {
    mousemoveHandle(event) {
      this.x = event.pageX - event.target.offsetLeft;
      this.y = event.pageY - event.target.offsetTop;
    }
  }
};
</script>

<style lang="less">
// 颜色块hover的时候加宽高，宽高有动画
.awesome-button {
  position: relative;
  appearance: none;
  background: #f72359;
  padding: 1em 2em;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;

  span {
    position: relative;
    pointer-events: none;
  }

  .colorful {
    position: absolute;
    width: 0;
    height: 0;
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
  }

  &:hover .colorful {
    display: inline-block;
    width: 200px;
    height: 200px;
  }
}
</style>
