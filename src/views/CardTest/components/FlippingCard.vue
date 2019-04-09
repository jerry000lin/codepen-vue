<template>
  <div class="card">
    <div class="card-front">
      <slot name="front"></slot>
    </div>
    <div class="card-back">
      <slot name="back"></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.card {
  position: relative;
  width: 30rem;
  height: 15rem;
  perspective: 150rem;

  &-front,
  &-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 1.5rem 4rem rgba(black, 0.4);
    transition: transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    backface-visibility: hidden;
    overflow: hidden;
  }
  &-back {
    // 旋转180°，背面朝上
    transform: rotateX(180deg);
  }
  &:hover &-front {
    // 0->-180
    transform: rotateX(-180deg);
  }
  &:hover &-back {
    // 180->0
    transform: rotateX(0deg);
  }
}
</style>
