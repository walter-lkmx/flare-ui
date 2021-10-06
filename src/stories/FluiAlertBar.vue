<template>
  <div class="flui-alert-bar" v-if="alertIsVisible">
    <p class="flui-alert-bar__message">{{ message }}</p>
    <button class="flui-alert-bar__close" v-on:click="close">
      <svg
        class=""
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.15028 3.20747C3.88993 2.94712 3.46782 2.94712 3.20747 3.20747C2.94712 3.46782 2.94712 3.88993 3.20747 4.15028L7.05729 8.0001L3.20751 11.8499C2.94716 12.1102 2.94716 12.5323 3.20751 12.7927C3.46786 13.053 3.88997 13.053 4.15032 12.7927L8.0001 8.94291L11.8499 12.7927C12.1102 13.053 12.5323 13.053 12.7927 12.7927C13.053 12.5323 13.053 12.1102 12.7927 11.8499L8.94291 8.0001L12.7927 4.15028C13.0531 3.88993 13.0531 3.46782 12.7927 3.20747C12.5324 2.94712 12.1103 2.94712 11.8499 3.20747L8.0001 7.05729L4.15028 3.20747Z"
          fill="#000000"
        />
      </svg>
    </button>
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
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    close: function() {
      this.alertIsVisible = false;
    }
  },
};
</script>

<style lang="scss">
:root {
  --flui-alert-bar-background: var(--flui-color-yellow-05);
  --flui-alert-bar-text-color: var(--flui-color-yellow-01);
  --flui-alert-bar-text-align: left;
}
.flui-alert-bar {
  background: var(--flui-alert-bar-background);
  padding: var(--f-gutter);
  display: grid;
  align-content: center;
  align-items: center;
  text-align: var(--flui-alert-bar-text-align);
  grid-template-columns: 1fr 16px;
  * {
    margin: 0;
  }
  &__message {
    color: var(--flui-alert-bar-text-color);
  }
  &__close {
    display: grid;
    align-content: center;
    align-items: center;
    text-align: var(--flui-alert-bar-text-align);
    padding: 0;
    cursor: pointer;
    background: transparent;
    &:hover {
      background: transparent;
    }
    svg {
      path {
        fill: var(--flui-alert-bar-text-color);
      }
    }
  }
}
</style>
