<template>
  <div class="flui-badge" v-if="alertIsVisible">
    <small class="flui-badge__title">{{title}}</small>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      alertIsVisible: true,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
:root {
  --flui-badge-background: var(--flui-color-green-04);
  --flui-badge-text-color: var(--flui-color-green-01);
  --flui-badge-font-size: 12px;
  --flui-badge-font-weight: bold;
  --flui-badge-min-width: 120px;
  --flui-badge-border-radius: var(--f-gutter);
}
.flui-badge {
  display: inline-grid;
  gap: var(--f-gutter-s);
  padding: var(--f-gutter-xxs) var(--f-gutter-s);
  background: var(--flui-badge-background);
  min-width: var(--flui-badge-min-width);
  border-radius: var(--flui-badge-border-radius);
  * {
    margin: 0;
  }
  &__title {
    color: var(--flui-badge-text-color);
    font-weight: var(--flui-badge-font-weight);
    font-size: var(--flui-badge-font-size);
    line-height: 18px;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
