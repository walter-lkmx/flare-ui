import FluiAlertBar from './FluiAlertBar.vue';

export default {
  title: 'FlareUi/AlertBar',
  component: FluiAlertBar,
  argTypes: {
    message: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiAlertBar },
  template: '<flui-alert-bar v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  message: 'Flare is a design system for agile front-end software engineering. 🚀',
};
