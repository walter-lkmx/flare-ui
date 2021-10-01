<template>
  <header class="flui-header">
    <!-- Toogle button -->
    <button v-on:click="toggleMenu" class="flui-header__toggle">
      <img src="../assets/icon-menu-open.svg" v-if="!isNavOpen" alt="Menu" />
      <img src="../assets/icon-menu-close.svg" v-if="isNavOpen" alt="Menu" />
    </button>

    <!-- Logo -->
    <div class="flui-header__logo-container">
      <slot name="headerLogo">
        <img
          class="flui-header__logo-container flui-header__logo-container__img"
          :src="require(`../assets/${logo}`)"
          alt=""
        />
      </slot>
    </div>

    <!-- Main navigation -->
    <nav class="flui-header__navigation" aria-label="main-navigation">
      <a v-for="(nav, index) in mainNavigation" :key="index" :href="nav.to">
        <slot name="headerMainNavigation">{{ nav.title }}</slot>
      </a>
    </nav>

    <!-- Actions -->
    <nav class="flui-header__actions" aria-label="actions">
      <a v-for="(action, index) in actions" :key="index" :href="action.to">
        <slot name="headerActions">{{ action.title }}</slot>
      </a>
    </nav>

  </header>
</template>

<script>
export default {
  data: function () {
    return {
      isNavOpen: false,
    };
  },
  props: {
    mode: {
      type: String,
      required: false,
    },
    logo: {
      type: String,
      required: false,
    },
    mainNavigation: {
      type: Array,
      required: false,
      to: [
        {
          title: String,
          url: String,
        },
      ],
    },
    actions: {
      type: Array,
      required: false,
      to: [
        {
          title: String,
          url: String,
        },
      ],
    },
  },
  methods: {
    toggleMenu() {
      this.isNavOpen = !this.isNavOpen;

      const headerEl = document.querySelector('.flui-header');
      const headerMainNavIsOpenEl = document.querySelector('.navIsOpen');
      const navEl = document.querySelector('.flui-header__navigation');
      const navAnchorEl = document.querySelectorAll('.flui-header__navigation a');
      const bodyEl = document.querySelector('body');

      const navIsClosed = () => {
        navEl.classList.remove('navIsOpen');
        bodyEl.classList.remove('fixed');
        this.isNavOpen = false;
      };

      if (this.isNavOpen) {
        navEl.classList.add('navIsOpen');
        bodyEl.classList.add('fixed');
        headerEl.style.setProperty(
          '--calcHeaderHeight',
          headerEl.offsetHeight + 'px'
        );
        for (const anchor of navAnchorEl) {
          anchor.addEventListener('click', navIsClosed);
        }
      } else {
        navIsClosed();
      }
    },
  },
};
</script>

<style lang="scss">
@import '@lkmx/flare/src/functions/_respond-to.scss';

:root {
  --flui-header-background-color: var(--flui-color-black);
  --flui-header-height: 100%;
  --flui-header-text-color: var(--f-header-text-color);
  --flui-header-logo-width: 100px;
}

.flui-header {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: start;
  justify-content: space-between;
  z-index: 10;
  background-color: var(--flui-header-background-color);
  padding: var(--f-gutter-s) var(--f-gutter);
  min-height: var(--f-gutter-xl);
  height: var(--flui-header-height);
  color: var(--flui-header-text-color);
  gap: var(--f-gutter);
  position: relative;

  a {
    color: var(--flui-color-white);
  }

  @include respond-to('<=m') {
    grid-template-columns: 100px 1fr;
  }

  &__toggle {
    display: none;
    margin: 0;

    @include respond-to('<=m') {
      display: grid;
      gap: var(--f-gutter);
      align-items: center;
      justify-content: center;
      justify-items: center;
      grid-template-columns: 1fr;
      grid-auto-flow: row;

      height: var(--f-gutter-xl);
      width: var(--f-gutter-xl);
    }
  }

  .flui-header__logo-container {
    display: grid;
    gap: var(--f-gutter);
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    height: 100%;

    &__img {
      width: var(--flui-header-logo-width);
      height: 100%;
      padding: var(--f-gutter-xxs) 0;
      object-fit: contain;

      @include respond-to('<=m') {
        width: var(--flui-header-logo-width);
        position: absolute;
        left: 0;
        right: 0;
        // top: var(--f-gutter);
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  &__navigation {
    &:not(.actions) {
      a {
        padding: 0 var(--f-gutter);
      }
    }

    @include respond-to('<=m') {
      display: none;

      &.navIsOpen {
        display: grid;
        gap: var(--f-gutter);
        align-items: center;
        justify-content: center;
        justify-items: center;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        grid-template-rows: repeat(5, minmax(10px, 60px));
        z-index: -1;
        background: var(--flui-color-black);
        position: fixed;
        overflow-y: scroll;
        top: var(--f-header-height);
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - var(--calcHeaderHeight));

        &::-webkit-scrollbar {
          width: 0;
          background: transparent;
        }
      }
    }

    a {
      text-decoration: none;
    }
  }
  &__actions {
    display: grid;
    gap: var(--f-gutter);
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    a {
      text-decoration: none;
    }
  }
}
</style>
