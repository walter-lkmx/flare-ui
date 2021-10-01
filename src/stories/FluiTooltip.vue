<template>
  <div class="flui-tooltip__wrapper">
    <div
      v-if="tooltipIsVisible"
      class="flui-tooltip__wrapper__content"
      ref="input"
      :data-tooltip-name="tooltipName"
    >
      <small>{{ message }}</small>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      tooltipIsVisible: false,
    };
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    tooltipName: {
      type: String,
      required: true,
    },
  },
  methods: {
    openTooltip() {
      const tooltipWrapperEl = document.querySelector('.flui-tooltip__wrapper');
      const matchingEl = document.querySelector(
        `[data-tooltip="${this.tooltipName}"]`
      );

      const matchingElDistanceTop = matchingEl.getBoundingClientRect().top;
      const matchingElDistanceLeft = matchingEl.getBoundingClientRect().left;
      const matchingElDistanceRight = matchingEl.getBoundingClientRect().right;

      tooltipWrapperEl.style.setProperty(
        '--flui-tooltip-distance-top',
        matchingElDistanceTop + 'px'
      );
      tooltipWrapperEl.style.setProperty(
        '--flui-tooltip-distance-left',
        matchingElDistanceLeft + 'px'
      );
      tooltipWrapperEl.style.setProperty(
        '--flui-tooltip-distance-right',
        matchingElDistanceRight + 'px'
      );
      tooltipWrapperEl.style.setProperty(
        '--flui-tooltip-height',
        matchingEl.offsetHeight + 'px'
      );
      console.log(matchingElDistanceRight);
      matchingEl.addEventListener('click', (e) => {
        e.preventDefault();
        this.tooltipIsVisible = !this.tooltipIsVisible;

        if (this.tooltipIsVisible) {
          setTimeout(() => {
            const tooltipEl = document.querySelector(
              `[data-tooltip-name=${this.tooltipName}]`
            );

            tooltipWrapperEl.style.setProperty(
              '--flui-tooltip-matchingEl-height',
              tooltipEl.offsetHeight + 'px'
            );

            if (matchingElDistanceTop <= 24 && matchingElDistanceLeft <= 24) {
              tooltipEl.classList.add('top--left');
            } else if (
              matchingElDistanceTop <= 24 &&
              matchingElDistanceRight <= 24
            ) {
              tooltipEl.classList.add('top--right');
            } else if (matchingElDistanceTop <= 24) {
              tooltipEl.classList.add('top');
            } else if (matchingElDistanceLeft <= 24) {
              tooltipEl.classList.add('left');
            } else if (matchingElDistanceRight >= 24) {
              tooltipEl.classList.add('right');
            } else {
              tooltipEl.classList.add('default');
            }
          }, 0);
        }
      });
    },
  },
  mounted() {
    this.openTooltip();
  },
};
</script>

<style lang="scss">
:root {
  --flui-tooltip-background: var(--flui-color-grey-02);
  --flui-tooltip-text-color: var(--flui-color-grey-05);
  --flui-tooltip-font-size: 12px;
  --flui-tooltip-font-weight: normal;
  --flui-tooltip-min-width: 120px;
  --flui-tooltip-border-radius: 0;
  --flui-tooltip-trigger-border-color: var(--flui-color-grey-03);
}
.flui-tooltip__wrapper {
  position: relative;
  display: inline-flex;
  transition: 0.2s ease;
  border-bottom: 0.5px dashed var(--flui-tooltip-trigger-border-color);
  cursor: pointer;

  &__content {
    position: absolute;
    display: inline-grid;
    gap: var(--f-gutter-s);
    padding: var(--f-gutter-s);
    background: var(--flui-tooltip-background);
    min-width: var(--flui-tooltip-min-width);
    border-radius: var(--flui-tooltip-border-radius);
    color: var(--flui-tooltip-text-color);
    font-weight: var(--flui-tooltip-font-weight);
    font-size: var(--flui-tooltip-font-size);
    line-height: 18px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    &.top {
      top: calc(var(--flui-tooltip-height) + var(--f-gutter-xxs));
      &--left {
        top: calc(var(--flui-tooltip-height) + var(--f-gutter-xxs));
        transform: translateX(var(--flui-tooltip-distance-left));
        left: calc(var(--f-gutter) - (var(--f-gutter) * 2));
      }
    }
    &.left {
      top: calc(
        var(--flui-tooltip-matchingEl-height) -
          (var(--flui-tooltip-matchingEl-height) * 2)
      );
      transform: translateX(var(--flui-tooltip-distance-left));
      left: calc(var(--f-gutter) - (var(--f-gutter) * 2));
    }
    &.right {
      top: calc(
        var(--flui-tooltip-matchingEl-height) -
          (var(--flui-tooltip-matchingEl-height) * 2)
      );
      left: calc(var(--f-gutter) - (var(--f-gutter) * 2));
    }
    &.default {
      top: calc(
        var(--flui-tooltip-matchingEl-height) -
          (var(--flui-tooltip-matchingEl-height) * 2)
      );
    }
    * {
      margin: 0;
    }
  }
}
</style>
