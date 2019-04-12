<template>
  <div class="hover-shine">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.hover-shine {
  background: linear-gradient(
      to right,
      #222,
      #fff 25%,
      #222 50%,
      #fff 75%,
      #222 100%
    )
    no-repeat;
  background-size: 300px;
  color: rgba(255, 255, 255, 0.3);
  background-clip: text;
  animation-name: shine;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
}

@keyframes shine {
  0% {
    background-position: -100%;
  }

  100% {
    background-position: 200%;
  }
}
</style>
