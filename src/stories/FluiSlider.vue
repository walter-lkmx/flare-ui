<template>
  <div class="flui-slider">
    <ul class="flui-slider__items">
      <li class="flui-slider__items__item current">
        <img
          class="cover"
          src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1518&q=80"
          alt="Slider Image"
        />
      </li>
      <li class="flui-slider__items__item">
        <img
          class="cover"
          src="https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80"
          alt="Slider Image"
        />
      </li>
      <li class="flui-slider__items__item">
        <img
          class="cover"
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          alt="Slider Image"
        />
      </li>
    </ul>
    <!-- controls -->
    <flui-button
      label=""
      data-off-canvas-name="demo"
      class="flui-slider__controls__arrow--left"
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
      data-off-canvas-name="demo"
      class="flui-slider__controls__arrow--right"
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
    <div class="flui-slider__indicators"></div>
  </div>
</template>

<script>
import FluiButton from './FluiButton.vue';

export default {
  components: { FluiButton },
  data: function () {
    return {
      alertIsVisible: true,
    };
  },
  methods: {
    fluiSlider() {
      const slides = document.querySelectorAll('.flui-slider__items__item');
      const btnLeft = document.querySelector(
        '.flui-slider__controls__arrow--left'
      );
      const btnRight = document.querySelector(
        '.flui-slider__controls__arrow--right'
      );
      const dotContainer = document.querySelector('.flui-slider__indicators');

      let curSlide = 0;
      const maxSlide = slides.length;
      console.log(maxSlide);

      const createDots = function () {
        slides.forEach(function (_, i) {
          dotContainer.insertAdjacentHTML(
            'beforeend',
            `<button class="flui-slider__indicators__dot" data-slide="${i}"></button>`
          );
        });
      };

      const activateDot = function (slide) {
        document
          .querySelectorAll('.flui-slider__indicators__dot')
          .forEach((dot) =>
            dot.classList.remove('flui-slider__indicators__dot--active')
          );

        document
          .querySelector(`.flui-slider__indicators__dot[data-slide="${slide}"]`)
          .classList.add('flui-slider__indicators__dot--active');
      };

      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
        );
      };
      // Next slide
      const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
      };
      const prevSlide = function () {
        if (curSlide === 0) {
          curSlide = maxSlide - 1;
        } else {
          curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
      };
      // initialization
      const init = function () {
        createDots();
        activateDot(0);
        goToSlide(0);
      };
      init();

      btnRight.addEventListener('click', nextSlide);
      btnLeft.addEventListener('click', prevSlide);

      document.addEventListener('keydown', function (e) {
        console.log(e);
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
      });

      // slider scrolling with dots and event delegation
      dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('flui-slider__indicators__dot')) {
          const slide = Number(e.target.dataset.slide);
          curSlide = slide;
          goToSlide(slide);
          activateDot(slide);
        }
      });
    },
  },
  mounted() {
    this.fluiSlider();
  },
  props: {},
};
</script>

<style lang="scss">
@import '@lkmx/flare/src/functions/_respond-to.scss';
:root {
  --flui-slider-height: 450px;
  --flui-slider-indicators-bg-color: transparent;
  --flui-slider-indicators-bg-color-current: var(--flui-color-grey-05);
  --flui-slider-indicators-border-color: var(--flui-color-grey-04);
  --flui-slider-indicators-border-color-hover: var(--flui-color-grey-05);
  --flui-slider-indicators-size: 10px;
  --flui-slider-indicators-position: absolute;
  --flui-slider-arrow-background: var(--flui-color-grey-05);
  --flui-slider-arrow-background-hover: var(--flui-color-grey-03);
  --flui-slider-arrow-border-color: var(--flui-color-grey-05);
  --flui-slider-arrow-border-radius: 0;
  --flui-slider-arrow-chevron-color: var(--flui-color-grey-01);
}
.flui-slider {
  position: relative;
  display: grid;
  width: 100%;
  height: var(--flui-slider-height);
  padding: 0;
  * {
    margin: 0;
  }
  &__items {
    display: block;
    position: relative;
    width: 100%;
    height: var(--flui-slider-height);
    padding: 0px;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    &__item {
      display: inline-block;
      width: 100%;
      height: var(--flui-slider-height);
      position: absolute;
      transition: 0.8s ease-in-out;
      img[class] {
        width: 100%;
        height: var(--flui-slider-height);
        object-fit: cover;
      }
    }
  }
  &__controls {
    &__arrow {
      &--left {
        align-items: center;
        display: grid;
        background: var(--flui-slider-arrow-background);
        border-color: var(--flui-slider-arrow-border-color);
        position: absolute;
        padding: var(--f-gutter-s);
        top: 50%;
        bottom: 50%;
        margin-bottom: auto;
        margin-top: auto;
        left: var(--f-gutter);
        z-index: 3;
        &:hover {
          background: var(--flui-slider-arrow-background-hover);
        }
        svg {
          path {
            fill: var(--flui-slider-arrow-chevron-color);
          }
        }
      }
      &--right {
        align-items: center;
        display: grid;
        background: var(--flui-slider-arrow-background);
        border-color: var(--flui-slider-arrow-border-color);
        border-radius: var(--flui-slider-arrow-border-radius);
        position: absolute;
        padding: var(--f-gutter-s);
        top: 50%;
        bottom: 50%;
        right: var(--f-gutter);
        margin-bottom: auto;
        margin-top: auto;
        z-index: 3;
        &:hover {
          background: var(--flui-slider-arrow-background-hover);
        }
        svg {
          path {
            fill: var(--flui-slider-arrow-chevron-color);
          }
        }
        &:hover {
        }
      }
    }
  }
  .disabled {
    opacity: 0.5;
  }
  &__indicators {
    position: var(--flui-slider-indicators-position);
    bottom: 0;
    width: 100%;
    z-index: 3;
    display: grid;
    grid-auto-flow: column;
    gap: var(--f-gutter-s);
    column-width: auto;
    justify-content: center;
    padding: var(--f-gutter);
    @include respond-to('<=s') {
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
      &--active {
        background-color: var(--flui-slider-indicators-bg-color-current);
        border: 2px solid var(--flui-slider-indicators-border-color-hover);
      }
    }
  }
}
</style>
