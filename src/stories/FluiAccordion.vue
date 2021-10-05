<template>
  <details class="flui-accordion">
    <summary class="flui-accordion__title" v-on:click="rotateIcon">
      {{ title}}
      <svg
        class="flui-accordion__title__chevron"
        ref="chevron"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
          fill="#122740"
        />
      </svg>
    </summary>
    <div class="flui-accordion__details">
      <p>{{ details }}</p>
    </div>
  </details>
</template>

<script>
export default {
  data() {
    return {
      detailsIsVisible: false,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  methods: {
    rotateIcon() {
      this.detailsIsVisible = !this.detailsIsVisible;
      const chevron = this.$refs.chevron;
      this.detailsIsVisible ? chevron.classList.add('is-open') : chevron.classList.remove('is-open');
    }
  },
};
</script>

<style lang="scss">
:root {
  --flui-accordion-background: var(--flui-color-grey-05);
  --flui-accordion-title-padding: var(--f-gutter);
  --flui-accordion-details-padding: var(--f-gutter);
}

.flui-accordion {
  background: var(--flui-accordion-background);
  list-style: none;

  * {
    margin: 0;
  }
  &__title {
    padding: var(--flui-accordion-title-padding);
    cursor: pointer;
    list-style: none;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 24px;
    &::-webkit-details-marker {
      display: none;
    }
    &__chevron {
      transition: 0.2s ease;
      &.is-open {
        transform: rotate(-180deg)
      }
    }
  }
  &__details {
    padding: var(--flui-accordion-details-padding);
    padding-top: 0;
  }
}
</style>
