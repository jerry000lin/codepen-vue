<template>
  <span class="title">
    <slot></slot>
  </span>
</template>

<script>
export default {};
</script>
<style lang="less">
.title {
  font-family: "Montserrat";
  font-size: inherit;
  color: #fff;
  line-height: 1;
  font-weight: 100;
  text-shadow: 0 0 2px #ff006c, 0 0 4px #ff006c, 0 0 6px #ff006c,
    0 0 8px #ff417d, 0 0 14px #ff417d, 0 0 16px #ff417d, 0 0 20px #ff417d,
    0 0 30px #ff417d;
}
</style>
