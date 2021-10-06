<template>
  <div class="flui-card" v-if="alertIsVisible">
    <h4>{{title}}</h4>
    <p class="flui-card__message">{{ message }}</p>
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
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
:root {
  --flui-card-background: var(--flui-color-grey-05);
}
.flui-card {
  display: grid;
  gap: var(--f-gutter);
  padding: var(--f-gutter);
  background: var(--flui-card-background);
  * {
    margin: 0;
  }
  &__message {
    
  }
}
</style>
