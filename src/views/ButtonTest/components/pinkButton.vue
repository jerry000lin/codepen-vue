<template>
  <button href="#" class="pink-button">
    <span>
      <slot></slot>
    </span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </button>
</template>
<style lang="less">
// css要点：hove:颜色加深,宽度变大->100%;active transform:scale
@color: #111;
@primary: #ffab9d;

.pink-button {
  background-color: transparent;
  border: 0;
  outline: none;
  color: @color;
  display: inline-block;
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: rgba(@primary, 0.5);
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: @color;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: rgba(@primary, 1);
    }
    svg {
      transform: translateX(0);
    }
  }
  &:active {
    transform: scale(0.96);
  }
}
</style>
