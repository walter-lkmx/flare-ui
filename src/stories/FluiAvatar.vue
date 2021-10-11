<template>
  <img src="../assets/avatar.png" alt="Avatar" class="flui-avatar" />
</template>

<script>
export default {

};
</script>

<style lang="scss">
:root {
  --flui-avatar-border-radius: var(--f-gutter-xxl);
  --flui-avatar-border-width: 2px;
  --flui-avatar-border-color: var(--flui-color-grey-04);
  --flui-avatar-size: 136px;
  --flui-avatar-box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
}
* {
  margin: 0;
}
.flui-avatar {
  width: var(--flui-avatar-size);
  height: var(--flui-avatar-size);
  border: 0;
  border-radius: 0;
  box-shadow: 0;
}
</style>
