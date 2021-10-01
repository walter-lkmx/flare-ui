<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>
      <flui-tooltip message="Primer tooltip..." tooltipName="uno">
        <span data-tooltip="uno">click here</span> 
      </flui-tooltip>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <flui-tooltip message="Segundo tooltip..." tooltipName="dos">
        <span data-tooltip="dos">click here</span> 
      </flui-tooltip> Ratione recusandae sit voluptatem aut quas, eum qui quam amet sapiente!
      Dolorem dignissimos impedit officia saepe voluptatibus molestias amet rem?
      Doloremque, accusamus. <flui-tooltip message="Segundo tooltip" tooltipName="demo2">
        <span data-tooltip="demo2">click here 2</span> 
      </flui-tooltip>
    </p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import FluiTooltip from './stories/FluiTooltip.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    FlTooltip,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img {
    display: inline-block;
  }
}
</style>
