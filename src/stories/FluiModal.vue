<template>
  <div class="flui-modal" v-if="isModalVisible" :data-modal-name="modalName">
    <div class="flui-modal__overlay" v-on:click="closeModal"></div>
    <div class="flui-modal__container">
      <div class="flui-modal__container__title">
        <h6>{{ title }}</h6>
        <button
          class="flui-modal__container__title__close"
          v-on:click="closeModal"
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
      <div class="flui-modal__container__content">
        <slot></slot>
      </div>
    </div>
    <div class="flui-modal__container__controls"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    modalName: {
      type: String,
      required: true,
    },
  },
  methods: {
    modal() {
      const modalTriggerEl = document.querySelectorAll(
        `[data-modal-name="${this.modalName}"]`
      );

      modalTriggerEl.forEach((it) => {
        if (it.dataset.modalName === this.modalName) {
          it.addEventListener('click', (e) => {
            this.isModalVisible = true;
          });
        }
      });
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  mounted() {
    this.modal();
  },
};
</script>

<style lang="scss">
:root {
  --flui-modal-container-background: var(--flui-color-white);
  --flui-modal-overlay-background: #ffffff3f;
  --flui-modal-padding: var(--f-gutter);
  --flui-modal-container-max-width: 90%;
  --flui-modal-container-max-height: fit-content;
  --flui-modal-zindex: 99999999;
  --flui-modal-overlay-zindex: 999999999;
  --flui-modal-container-zindex: 9999999999;
  --flui-modal-container-border-radius: 0;
  --flui-modal-container-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
}

.flui-modal {
  z-index: var(--flui-modal-zindex);
  height: 100vh;
  width: 100vw;
  position: fixed;
  inset: 0;
  z-index: var(--flui-modal-overlay-zindex);
  * {
    margin: 0;
  }
  &__overlay {
    background: var(--flui-modal-overlay-background);
    height: 100%;
    width: 100%;
    position: relative;
    z-index: var(--flui-modal-overlay-zindex);
    backdrop-filter: blur(5px);
  }
  &__container {
    box-shadow: var(--flui-modal-container-shadow);
    max-width: var(--flui-modal-container-max-width);
    max-height: var(--flui-modal-container-max-height);
    background: var(--flui-modal-container-background);
    z-index: var(--flui-modal-container-zindex);
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: var(--flui-modal-container-border-radius);
    &__title {
      padding: var(--flui-modal-padding);
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
      padding: var(--flui-modal-padding);
      padding-top: 0;
    }
  }
}
</style>
