<template>
  <div class="flui-off-canvas" v-if="isOffCanvasVisible" :data-off-canvas-name="offCanvasName">
    <div class="flui-off-canvas__overlay" v-on:click="closeOffCanvas"></div>
    <div class="flui-off-canvas__container right">
      <div class="flui-off-canvas__container__title">
        <h6>{{ title }}</h6>
        <button
          class="flui-off-canvas__container__title__close"
          v-on:click="closeOffCanvas"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.22517 4.81096C5.83465 4.42044 5.20148 4.42044 4.81096 4.81096C4.42044 5.20148 4.42044 5.83465 4.81096 6.22517L10.5857 11.9999L4.81102 17.7746C4.4205 18.1651 4.42049 18.7983 4.81102 19.1888C5.20154 19.5793 5.83471 19.5793 6.22523 19.1888L11.9999 13.4141L17.7746 19.1888C18.1651 19.5793 18.7983 19.5793 19.1888 19.1888C19.5793 18.7983 19.5793 18.1651 19.1888 17.7746L13.4141 11.9999L19.1889 6.22517C19.5794 5.83465 19.5794 5.20148 19.1889 4.81096C18.7983 4.42044 18.1652 4.42044 17.7746 4.81096L11.9999 10.5857L6.22517 4.81096Z"
              fill="#122740"
            />
          </svg>
        </button>
      </div>
      <div class="flui-off-canvas__container__content">
        <slot></slot>
      </div>
    </div>
    <div class="flui-off-canvas__container__controls"></div>
  </div>
</template>

<script>
import FluiButton from './FluiButton.vue';

export default {
  data() {
    return {
      isOffCanvasVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    offCanvasName: {
      type: String,
      required: true,
    },
  },
  components: { FluiButton },
  methods: {
    offCanvas() {
      const offCanvasTriggerEl = document.querySelectorAll(
        `[data-off-canvas-name="${this.offCanvasName}"]`
      );

      offCanvasTriggerEl.forEach((it) => {
        if (it.dataset.offCanvasName === this.offCanvasName) {
          it.addEventListener('click', (e) => {
            this.isOffCanvasVisible = true;
          });
        }
      });
    },
    closeOffCanvas() {
      this.isOffCanvasVisible = false;
    },
  },
  mounted() {
    this.offCanvas();
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
:root {
  --flui-off-canvas-container-background: var(--flui-color-white);
  --flui-off-canvas-overlay-background: #ffffff3f;
  --flui-off-canvas-padding: var(--f-gutter);
  --flui-off-canvas-container-max-width: 343px;
  --flui-off-canvas-container-max-height: 100%;
  --flui-off-canvas-zindex: 99999999;
  --flui-off-canvas-overlay-zindex: 999999999;
  --flui-off-canvas-container-zindex: 9999999999;
  --flui-off-canvas-container-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
}

.flui-off-canvas {
  z-index: var(--flui-off-canvas-zindex);
  height: 100vh;
  width: 100vw;
  position: fixed;
  inset: 0;
  z-index: var(--flui-off-canvas-overlay-zindex);
  * {
    margin: 0;
  }
  &__overlay {
    background: var(--flui-off-canvas-overlay-background);
    height: 100%;
    width: 100%;
    position: relative;
    z-index: var(--flui-off-canvas-overlay-zindex);
    backdrop-filter: blur(5px);
  }

      &__container, .right {
        box-shadow: var(--flui-off-canvas-container-shadow);
        max-width: 100vw;
        height: var(--flui-off-canvas-container-max-height);
        background: var(--flui-off-canvas-container-background);
        z-index: var(--flui-off-canvas-container-zindex);
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        @include respond-to("<=s") {
          width: 100vw;
        }
        @include respond-to(">=m") {
          width: var(--flui-off-canvas-container-max-width);
        }
        &__title {
          padding: var(--flui-off-canvas-padding);
          display: grid;
          grid-template-columns: 1fr 24px;
          align-items: center;
          &__close {
            padding: 0;
            background: transparent;
            cursor: pointer;
            &:hover {
              background: transparent;
            }
          }
        }
        &__content {
          padding: var(--flui-off-canvas-padding);
          padding-top: 0;
        }
      }

        .left {
            position: absolute;
            left: 0;
            right: auto;
            bottom: 0;
        }

      .bottom {
          position: absolute;
          max-width: 100vw;
          width: 100vw;
          top:auto;
          bottom: 0;
          height: 40vh;
          @include respond-to("<=s") {
          height: 100vh;
          }
        }

        .top {
          position: absolute;
          max-width: 100vw;
          width: 100vw;
          top:0;
          bottom: auto;
          height: 40vh;
          @include respond-to("<=s") {
          height: 100vh;
          }
        } 
} 
</style>
