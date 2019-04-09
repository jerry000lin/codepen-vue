<template>
  <div class="card-wrap">
    <div class="card-shadow" :style="shadowStyleObject"></div>
    <div
      class="poster"
      @mouseover="handleMouseOver"
      @mousemove="handleMousemove($event)"
      @mouseleave="handleMouseLeave"
      :style="cardStyleObject"
    >
      <slot></slot>
      <div class="card-shine" :style="shineStyleObject"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoving: false,
      cardRotateX: 0,
      cardRotateY: 0,
      cardTranslateX: 0,
      cardTranslateY: 0,
      shadowRotateX: 0,
      shadowRortateY: 0,
      shadowTranslateX: 0,
      shadowTranslateY: 0,
      shineAngle: 0,
      shineLight: 0
    };
  },
  computed: {
    cardStyleObject() {
      return {
        transform: `translate3d(${this.cardTranslateX}px,${
          this.cardTranslateY
        }px,0) rotateX(${this.cardRotateX}deg) rotateY(${this.cardRotateY}deg)`
      };
    },
    shadowStyleObject() {
      const styleObject = {
        transform: `translate3d(${this.shadowTranslateX}px,${
          this.shadowTranslateY
        }px,0) rotateX(${this.shadowRotateX}deg) rotateY(${
          this.shadowRortateY
        }deg)`
      };
      if (this.hoving) {
        styleObject.transition = "transform 0.05s";
      }
      return styleObject;
    },
    shineStyleObject() {
      return {
        background: `linear-gradient(${
          this.shineAngle
        }deg, rgba(255, 255, 255, ${
          this.shineLight
        }) 0%, rgba(255, 255, 255, 0) 80%)`
      };
    }
  },
  methods: {
    handleMouseOver() {
      clearInterval(this.lightFadeInterval);
    },
    handleMousemove(event) {
      this.hoving = true;
      const targetBCR = event.target.getBoundingClientRect(),
        targetHeight = targetBCR.height,
        targetWidth = targetBCR.width,
        targetTop = targetBCR.top,
        targetLeft = targetBCR.left;
      const mouseX = event.clientX - targetLeft,
        mouseY = event.clientY - targetTop;

      const mouseXToCenter = mouseX - targetWidth / 2,
        mouserYToCenter = targetHeight / 2 - mouseY;

      const xScale = mouseX / targetWidth;
      const yScale = mouseY / targetHeight;

      this.cardRotateX = 20 - 40 * xScale;
      this.cardRotateY = 40 * yScale - 20;
      this.cardTranslateX = xScale * 20 - 10;
      this.cardTranslateY = yScale * 20 - 10;

      this.shadowRotateX = -this.cardRotateX;
      this.shadowRortateY = -this.cardRotateY;
      this.shadowTranslateX = -this.cardTranslateX;
      this.shadowTranslateY = -this.cardTranslateY;

      this.shineAngle = Math.atan2(mouseXToCenter, mouserYToCenter) * 57.3;
      this.shineLight =
        Math.sqrt(
          (mouseXToCenter ** 2 + mouserYToCenter ** 2) /
            ((targetWidth / 2) ** 2 + (targetHeight / 2) ** 2)
        ) * 0.8;
    },
    handleMouseLeave() {
      this.hoving = false;
      this.cardRotateX = 0;
      this.cardRotateY = 0;
      this.cardTranslateX = 0;
      this.cardTranslateY = 0;

      this.shadowRotateX = 0;
      this.shadowRortateY = 0;
      this.shadowTranslateX = 0;
      this.shadowTranslateY = 0;
      const step = this.shineLight / 15;
      this.lightFadeInterval = setInterval(() => {
        this.shineLight -= step;
        if (this.shineLight <= 0) {
          clearInterval(this.lightFadeInterval);
        }
      }, 50);
    }
  }
};
</script>

<style lang="less" scoped>
.card-wrap {
  position: relative;
}
.card-shadow {
  background: #b3b3b3;
  transform-style: preserve-3d;
  width: 320px;
  height: 320px;
  position: absolute;
  box-shadow: 0 0 30px 10px #aaa;
  border-radius: 10px;

  transition: transform 0.75s ease-in-out;
}
.poster {
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 1);
  overflow: hidden;
  transition: transform 0.75s ease-in-out;
  &:hover {
    transition: transform 0.05s;
  }
  .card-shine {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transform-style: preserve-3d;
    border-radius: 10px;
  }
}
</style>
