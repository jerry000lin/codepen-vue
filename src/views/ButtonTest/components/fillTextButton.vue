<template>
  <button class="fillTextButton">
    <div class="fillTextButton-text">
      <div class="fillTextButton-text--before">
        {{ this.$slots.default[0].text }}
      </div>
      <slot></slot>
    </div>
  </button>
</template>

<style lang="less" scoped>
.fillTextButton {
  font-family: "PingFang SC";
  border: 0;
  outline: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  background-color: #353746;

  position: relative;
  display: inline-block;
  padding: 0;
  height: 100px;
  width: 400px;
  font-size: 88px;
  line-height: 52px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
  color: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms linear;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-image: linear-gradient(138deg, #da2c4d, #f8ab37);
    z-index: -1;
  }
  .fillTextButton-text {
    position: relative;
    height: 100%;
    line-height: 1;
    .fillTextButton-text--before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 0;
      overflow: hidden;
      -webkit-text-stroke: transparent;
      text-stroke: transparent;
      color: #fff;
      transition: max-height 0.3s;
    }
  }
  &:hover {
    background-color: transparent;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    .fillTextButton-text {
      .fillTextButton-text--before {
        max-height: 100%;
      }
    }
  }
  &:active {
    .fillTextButton-text {
      .fillTextButton-text--before {
        color: transparent;
      }
    }
  }
}
</style>
