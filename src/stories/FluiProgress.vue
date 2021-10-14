<template>
  <div class="flui-progress">
    <div class="flui-progress__bar">
      <p class="flui-progress__bar__value">75%</p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
:root {
  --flui-progress-background-color: var(--flui-color-white);
  --flui-progress-bar-background-color: var(--flui-color-blue-02);
  --flui-progress-width: 100%;
  --flui-progress-height: 16px;
  --flui-progress-border-radius: var(--f-gutter);
  --flui-progress-border-width: 1px;
  --flui-progress-border-color: var(--flui-color-grey-03);
  --flui-progress-bar-value-color: var(--flui-color-white);
}
* {
  margin: 0;
}
.flui-progress {
  background: var(--flui-progress-background-color);
  width: var(--flui-progress-width);
  height: var(--flui-progress-height);
  border-radius: 0;
  border: 0;
  &__bar {
    background: var(--flui-progress-bar-background-color);
    width: 75%;
    height: 100%;
    border-radius: 0;
    &__value {
      margin: 0;
      display: block;
      position: relative;
      text-align: center;
      top: 50%;
      transform: translate(0, -50%);
      color: var(--flui-progress-bar-value-color);
    }
  }
}
</style>
