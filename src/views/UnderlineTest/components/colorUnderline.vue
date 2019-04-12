<template>
  <a class="colorUnderline-container">
    <slot></slot>
  </a>
</template>

<style lang="less" scoped>
.colorUnderline-container {
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    height: 3px;
    background-color: #61a3ff;
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    left: 50%;
    transition: width 0.3s ease 0s, left 0.3s ease 0s, opacity 0.25s linear;
    opacity: 0;
    box-shadow: 0 0 10px 2px #ff5e33;
  }
  &:hover:after {
    left: 0;
    width: 100%;
    opacity: 1;
  }
  &:active {
    color: #61a3ff;
  }
}
</style>
