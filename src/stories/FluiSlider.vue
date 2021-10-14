<template>
  <div class="flui-slider">
    <div class="flui-slider__items-container">
      <ul class="flui-slider__items-container__list">
        <li>
          <img
            src="../assets/slider-image-1.png"
            alt="Slider Image"
            class="flui-slider__items-container__image current"
          />
        </li>
        <li>
          <img
            src="../assets/slider-image-2.png"
            alt="Slider Image"
            class="flui-slider__items-container__image"
          />
        </li>
        <li>
          <img
            src="../assets/slider-image-3.png"
            alt="Slider Image"
            class="flui-slider__items-container__image"
          />
        </li>
      </ul>
      <!-- los botones de arrows deberían estar dentro de flui-slider pero no dentro de flui-slider__cointainer -->
      <flui-button
        label=""
        :fullMode="false"
        data-off-canvas-name="demo"
        class="flui-slider__items-container__arrows--left disabled"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4852 6.41421L15.071 5L8 12.0711L15.0711 19.1421L16.4853 17.7279L10.8284 12.071L16.4852 6.41421Z"
            fill="white"
          />
        </svg>
      </flui-button>

      <flui-button
        label=""
        :fullMode="false"
        data-off-canvas-name="demo"
        class="flui-slider__items-container__arrows--right"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6.41421L9.41421 5L16.4853 12.0711L9.41421 19.1421L8 17.7279L13.6569 12.0711L8 6.41421Z"
            fill="white"
          />
        </svg>
      </flui-button>
      <div class="flui-slider__indicators">
        <button
          type="button"
          class="flui-slider__indicators__dot current"
        ></button>
        <button type="button" class="flui-slider__indicators__dot"></button>
        <button type="button" class="flui-slider__indicators__dot"></button>
      </div>
    </div>
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
@import "@lkmx/flare/src/functions/_respond-to.scss";
:root {
  --flui-slider-indicators-bg-color: transparent;
  --flui-slider-indicators-bg-color-current: var(--flui-color-grey-01);
  --flui-slider-indicators-border-color: var(--flui-color-grey-02);
  --flui-slider-indicators-border-color-hover: var(--flui-color-grey-01);
  --flui-slider-indicators-size: 10px;
  --flui-slider-indicators-position-inside: absolute;
  --flui-slider-indicators-position-outside: relative;
  --flui-slider-arrows-bg-color: var(--flui-color-grey-01);
  --flui-slider-arrows-border-radius: 0;
}
.flui-slider {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
  * {
    margin: 0;
  }
  @include respond-to("<=s") {
    width: 100%;
  }
  &__items-container {
    display: block;
    position: relative;
    //width: 100%;
    &__list {
      z-index: 2;
    }
    &__image {
      //object-fit: fill;
      display: block;
      width: 100%;
      &:not(.current) {
        display: none;
      }
    }
    &__arrows--left {
      //use fill for svg, grey
      background-color: var(--flui-slider-arrows-bg-color);
      width: var(--flui-slider-arrows-size);
      height: var(--flui-slider-arrows-size);
      border-radius: var(--flui-slider-arrows-border-radius);
      position: absolute;
      padding: var(--f-gutter-s);
      top: 50%;
      transform: translate(0, -50%);
      // top: 0;
      // bottom: 0;
      // margin-top: auto;
      // margin-bottom: auto;
      left: var(--f-gutter);
      z-index: 3;
      @include respond-to("<=s") {
        display: none;
      }
      // &:disabled {
      //   background-color: var(--flui-slider-arrows-bg-color-disabled);
      // }
    }
    .disabled {
      opacity: 0.5;
    }
    &__arrows--right {
      //how to make it a square button
      background-color: var(--flui-slider-arrows-bg-color);
      border-radius: var(--flui-slider-arrows-border-radius);
      position: absolute;
      padding: var(--f-gutter-s);
      top: 50%;
      transform: translate(0, -50%);
      // top: 0;
      // bottom: 0;
      // margin-top: auto;
      // margin-bottom: auto;
      right: var(--f-gutter);
      z-index: 3;
      @include respond-to("<=s") {
        display: none;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__indicators {
    position: var(--flui-slider-indicators-position-outside);
    bottom: 0;
    width: 100%;
    z-index: 3;
    display: grid;
    grid-auto-flow: column;
    gap: var(--f-gutter-s);
    column-width: auto;
    justify-content: center;
    padding: var(--f-gutter);
    @include respond-to("<=s") {
      padding: var(--f-gutter-xs);
    }
    &__dot {
      padding: 0;
      vertical-align: middle;
      place-self: center;
      width: var(--flui-slider-indicators-size);
      height: var(--flui-slider-indicators-size);
      background-color: var(--flui-slider-indicators-bg-color);
      border: 2px solid var(--flui-slider-indicators-border-color);
      border-radius: var(--f-gutter);
      &:hover {
        background-color: var(--flui-slider-indicators-bg-color);
        border: 2px solid var(--flui-slider-indicators-border-color-hover);
        cursor: pointer;
      }
      &:active {
        background-color: var(--flui-slider-indicators-bg-color-current);
        border: 2px solid var(--flui-slider-indicators-border-color-hover);
      }
    }
    .current {
      background-color: var(--flui-slider-indicators-bg-color-current);
      border: 2px solid var(--flui-slider-indicators-border-color-hover);
    }
  }
}
</style>
